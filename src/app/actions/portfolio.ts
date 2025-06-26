'use server';

import { getPortfolioData } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';

const UpdateAboutSchema = z.object({
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  image: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith('image/'), 'File must be an image.')
    .refine((file) => file.size < 4 * 1024 * 1024, 'Image must be less than 4MB.')
    .optional(),
});

type FormState = {
  message: string;
  success: boolean;
};

export async function updateAbout(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const validatedFields = UpdateAboutSchema.safeParse({
      description: formData.get('description'),
      image: formData.get('image'),
    });

    if (!validatedFields.success) {
      return {
        success: false,
        message: validatedFields.error.errors.map((e) => e.message).join(', '),
      };
    }
    
    const { description, image } = validatedFields.data;
    const portfolioData = await getPortfolioData();
    if (!portfolioData) {
      throw new Error('Portfolio data not found.');
    }

    portfolioData.about.description = description;

    if (image && image.size > 0) {
      const uploadDir = path.join(process.cwd(), 'public/uploads');
      await fs.mkdir(uploadDir, { recursive: true });

      const buffer = Buffer.from(await image.arrayBuffer());
      const filename = `profile${path.extname(image.name)}`;
      const imagePath = path.join(uploadDir, filename);
      await fs.writeFile(imagePath, buffer);
      
      portfolioData.about.imageUrl = `/uploads/${filename}`;
    }

    const dataPath = path.join(process.cwd(), 'src/data/portfolio.json');
    await fs.writeFile(dataPath, JSON.stringify(portfolioData, null, 2));

    revalidatePath('/');
    revalidatePath('/admin/about');

    return {
      success: true,
      message: 'About section updated successfully.',
    };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      success: false,
      message: `Error updating about section: ${errorMessage}`,
    };
  }
}
