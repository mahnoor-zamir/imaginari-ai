// components/home/steps/PaintedScenarioStep.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Camera } from 'lucide-react';

interface PaintedScenarioStepProps {
  gallery: {
    influencer: {
      name: string;
    };
    scenario: string;
    prompt: string;
  }[];
  setStep: (step: number) => void;
  resetApp: () => void;
}

const PaintedScenarioStep: React.FC<PaintedScenarioStepProps> = ({ gallery, setStep, resetApp }) => {
  const latestScenario = gallery[gallery.length - 1];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl">Painted Scenario</CardTitle>
        <CardDescription>Your AI influencer in a new scenario</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <img src={latestScenario.scenario} alt="Painted scenario" className="w-full h-auto rounded-lg" />
        <p className="text-xl text-gray-300">Prompt: {latestScenario.prompt}</p>
        <div className="flex space-x-4">
          <Button onClick={() => setStep(4)} className="flex-1">
            Paint Another Scenario <Paintbrush className="ml-2" />
          </Button>
          <Button onClick={resetApp} variant="outline" className="flex-1">
            Start Over <Camera className="ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaintedScenarioStep;