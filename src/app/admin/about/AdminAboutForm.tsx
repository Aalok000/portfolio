'use client';

import type { getPortfolioData } from '@/lib/data';
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
import { updateAbout } from '@/app/actions/portfolio';
import { useEffect, useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  type Crop,
  type PixelCrop,
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

type AboutData = NonNullable<Awaited<ReturnType<typeof getPortfolioData>>>['about'];

type AboutFormProps = {
  data: AboutData;
};

// Helper to get data URL from canvas
function canvasPreview(
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  crop: PixelCrop
) {
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('No 2d context');
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const pixelRatio = window.devicePixelRatio;

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = 'high';

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  ctx.save();
  ctx.translate(-cropX, -cropY);
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  );
  ctx.restore();
}

export default function AdminAboutForm({ data: initialData }: AboutFormProps) {
  const [data, setData] = useState<AboutData>(initialData);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [croppedImageDataUri, setCroppedImageDataUri] = useState('');
  const [isCropModalOpen, setIsCropModalOpen] = useState(false);

  const aspect = 1;

  const initialState = { message: '', success: false };
  const [state, dispatch] = useFormState(updateAbout, initialState);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
    if (state.success) {
      formRef.current?.reset();
      setCroppedImageDataUri('');
      setImgSrc('');
    }
  }, [state, toast]);

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(e.target.files[0]);
      setIsCropModalOpen(true);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 90,
        },
        aspect,
        width,
        height
      ),
      width,
      height
    );
    setCrop(crop);
  }

  async function handleCrop() {
    if (completedCrop && imgRef.current) {
      const canvas = document.createElement('canvas');
      canvasPreview(imgRef.current, canvas, completedCrop);
      const dataUri = canvas.toDataURL('image/jpeg');
      setCroppedImageDataUri(dataUri);
      setIsCropModalOpen(false);
      // Clear file input so the un-cropped file isn't submitted
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  }

  const previewSrc = croppedImageDataUri || data.imageUrl;

  return (
    <>
      <form action={dispatch} ref={formRef}>
        <input type="hidden" name="croppedImage" value={croppedImageDataUri} />
        <Card>
          <CardHeader>
            <CardTitle>Edit About Section</CardTitle>
            <CardDescription>
              Update your profile picture and the &quot;About Me&quot; description. You can crop your new profile picture after selecting it.
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
                  src={previewSrc}
                  alt="Current profile picture"
                  width={80}
                  height={80}
                  className="rounded-full aspect-square object-cover"
                  key={previewSrc} // force re-render on src change
                />
                <Input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={onSelectFile}
                  ref={fileInputRef}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Upload a new image to replace the current one.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </Card>
      </form>

      <Dialog open={isCropModalOpen} onOpenChange={setIsCropModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Crop your new profile picture</DialogTitle>
          </DialogHeader>
          {imgSrc && (
            <ReactCrop
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspect}
              className="max-h-[70vh]"
            >
              <img
                ref={imgRef}
                alt="Crop me"
                src={imgSrc}
                onLoad={onImageLoad}
              />
            </ReactCrop>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCropModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCrop}>Crop and Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
