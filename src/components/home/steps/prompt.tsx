// components/home/steps/PromptStep.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles } from 'lucide-react';

interface PromptStepProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  setGeneratedImages: (images: string[]) => void;
  setStep: (step: number) => void;
}

const PromptStep: React.FC<PromptStepProps> = ({ prompt, setPrompt, setGeneratedImages, setStep }) => {
  const generateImages = () => {
    const fakeImages = [
      '/api/placeholder/300/400',
      '/api/placeholder/300/400',
      '/api/placeholder/300/400',
      '/api/placeholder/300/400'
    ];
    setGeneratedImages(fakeImages);
    setStep(1);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl">Generate Human Influencer</CardTitle>
        <CardDescription>Enter a prompt to generate your AI influencer</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="prompt">Prompt</Label>
          <Input
            id="prompt"
            placeholder="Enter prompt or upload image"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <Button onClick={generateImages} className="w-full">
          Generate Images <Sparkles className="ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default PromptStep;