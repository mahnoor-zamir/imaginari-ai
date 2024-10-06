// components/home/steps/ImageSelectionStep.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ImageSelectionStepProps {
  generatedImages: string[];
  setSelectedImage: (image: string) => void;
  setStep: (step: number) => void;
}

const ImageSelectionStep: React.FC<ImageSelectionStepProps> = ({
  generatedImages,
  setSelectedImage,
  setStep,
}) => {
  const handleImageSelection = (image: string) => {
    setSelectedImage(image);
    setStep(2);
  };

  return (
    <section className="text-center mb-16 relative mt-20">
      <h2 className="text-3xl font-bold mb-4">Select favourite image</h2>
      <RadioGroup
        onValueChange={handleImageSelection}
        className="flex justify-center gap-4"
      >
        {generatedImages.map((image, index) => (
          <div key={index} className="relative group">
            <RadioGroupItem
              value={image}
              id={`image-${index}`}
              className="peer sr-only"
            />
            <Label
              htmlFor={`image-${index}`}
              className="flex flex-col items-center justify-between p-4 transition-transform duration-200 group-hover:scale-105 group-hover:z-10 group-hover:shadow-lg peer-data-[state=checked]:border-primary"
            >
              <img
                src={image}
                alt={`Generated image ${index + 1}`}
                className="w-[300px] h-[400px] rounded-md transition-opacity duration-200 group-hover:opacity-100 group-hover:scale-105 peer-data-[state=unchecked]:opacity-50"
              />
            </Label>
          </div>
        ))}
      </RadioGroup>
    </section>
  );
};

export default ImageSelectionStep;
