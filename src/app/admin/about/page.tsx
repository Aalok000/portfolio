'use client';

import { useFormState } from 'react-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { getPortfolioData } from '@/lib/data';
import { updateAbout } from '@/app/actions/portfolio';
import { useEffect, useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

type AboutFormProps = {
  data: NonNullable<Awaited<ReturnType<typeof getPortfolioData>>>['about'];
};

function SubmitButton() {
    // This component is not needed since useFormStatus is not used.
    // For simplicity, we can just use a standard button.
    // Kept here as a pattern for more complex forms with pending states.
  return <Button type="submit">Save Changes</Button>;
}


export default function AdminAboutPage() {
  const [data, setData] = useState<AboutFormProps['data'] | null>(null);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const initialState = { message: '', success: false };
  const [state, dispatch] = useFormState(updateAbout, initialState);

  useEffect(() => {
    getPortfolioData().then((portfolioData) => {
      if (portfolioData) {
        setData(portfolioData.about);
      }
    });
  }, []);

  useEffect(() => {
    if(state.message){
        toast({
            title: state.success ? 'Success' : 'Error',
            description: state.message,
            variant: state.success ? 'default' : 'destructive',
        });
    }
    if (state.success) {
        formRef.current?.reset();
        // Refetch data to show updated image
        getPortfolioData().then(portfolioData => {
            if (portfolioData) setData(portfolioData.about);
        });
    }
  }, [state, toast]);

  if (!data) {
    return <div>Loading...</div>;
  }
  
  return (
    <form action={dispatch} ref={formRef}>
      <Card>
        <CardHeader>
          <CardTitle>Edit About Section</CardTitle>
          <CardDescription>
            Update your profile picture and the &quot;About Me&quot; description.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="description">About Me Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={data.description}
              rows={5}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Profile Picture</Label>
            <div className="flex items-center gap-4">
                 <Image
                    src={data.imageUrl}
                    alt="Current profile picture"
                    width={80}
                    height={80}
                    className="rounded-full aspect-square object-cover"
                 />
                <Input id="image" name="image" type="file" accept="image/*" />
            </div>
             <p className="text-sm text-muted-foreground">
              Upload a new image to replace the current one. Leave blank to keep the existing image.
            </p>
          </div>
        </CardContent>
        <CardFooter>
            <Button type="submit">Save Changes</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
