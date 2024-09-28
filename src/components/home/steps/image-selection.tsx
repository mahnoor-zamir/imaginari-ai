// components/home/steps/ImageSelectionStep.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ImageSelectionStepProps {
  generatedImages: string[];
  setSelectedImage: (image: string) => void;
  setStep: (step: number) => void;
}

const ImageSelectionStep: React.FC<ImageSelectionStepProps> = ({ generatedImages, setSelectedImage, setStep }) => {
  const handleImageSelection = (image: string) => {
    setSelectedImage(image);
    setStep(2);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl">Select an Image</CardTitle>
        <CardDescription>Choose your favorite generated image</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup onValueChange={handleImageSelection} className="grid grid-cols-2 gap-4">
          {generatedImages.map((image, index) => (
            <div key={index}>
              <RadioGroupItem
                value={image}
                id={`image-${index}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`image-${index}`}
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <img src={image} alt={`Generated image ${index + 1}`} className="w-full h-auto rounded-md" />
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default ImageSelectionStep;