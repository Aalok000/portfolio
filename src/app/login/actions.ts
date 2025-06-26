'use server';

import { cookies } from 'next/headers';
import { z } from 'zod';

const LoginSchema = z.object({
  password: z.string(),
});

type FormState = {
  message: string;
  success: boolean;
};

export async function login(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = LoginSchema.safeParse({
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  const { password } = validatedFields.data;

  // IMPORTANT: In a real application, use a securely hashed password comparison.
  // This is a simplified check for demonstration purposes.
  if (password === process.env.ADMIN_PASSWORD) {
    // Set a cookie to maintain the session
    cookies().set('auth-token', 'super-secret-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    return { success: true, message: 'Login successful!' };
  } else {
    return { success: false, message: 'Incorrect password.' };
  }
}
