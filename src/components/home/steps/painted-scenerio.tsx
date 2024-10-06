// components/home/steps/PaintedScenarioStep.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Camera } from "lucide-react";

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

const PaintedScenarioStep: React.FC<PaintedScenarioStepProps> = ({
  gallery,
  setStep,
  resetApp,
}) => {
  const latestScenario = gallery[gallery.length - 1];

  return (
    <section className="text-center mb-16 relative mt-20">
      <h2 className="text-3xl font-bold mb-4">
        Your AI influencer in a new scenario
      </h2>
      <div className="flex justify-center mb-4">
        <img
          src={
            latestScenario.scenario
              ? latestScenario.scenario
              : "https://via.placeholder.com/300x300"
          }
          alt="Scenario"
          className="w-[600px] h-[400px] object-cover"
        />
      </div>
      <div className="flex justify-center mb-4">
        <p className="text-xl text-gray-300">Prompt: {latestScenario.prompt}</p>
      </div>
      <div className="flex justify-center space-x-4">
        <Button onClick={() => setStep(4)} className="flex-1">
          Paint Another Scenario <Paintbrush className="ml-2" />
        </Button>
        <Button onClick={resetApp} variant="outline" className="flex-1">
          Start Over <Camera className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default PaintedScenarioStep;
