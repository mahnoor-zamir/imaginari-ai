// components/home/steps/InfluencerSavedStep.tsx
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

interface InfluencerSavedStepProps {
  activeInfluencer: {
    name: string;
    image: string;
  } | null; // Allow null
  setStep: (step: number) => void;
  resetApp: () => void;
}

const InfluencerSavedStep: React.FC<InfluencerSavedStepProps> = ({
  activeInfluencer,
  setStep,
  resetApp,
}) => {
  return (
    <section className="text-center mb-16 relative mt-20">
      <h3 className="text-4xl font-bold mb-2">
        {activeInfluencer?.name.toUpperCase()} 🎉
      </h3>
      {activeInfluencer ? ( // Conditional rendering based on activeInfluencer
        <div className="relative flex flex-col items-center space-y-4">
          <img
            src={activeInfluencer.image}
            alt={activeInfluencer.name}
            className="w-96 h-auto rounded-lg" // Increased image size
          />
          <div className="absolute bottom-4 w-full px-4 flex flex-col items-center">
            <Button
              onClick={() => setStep(4)}
              className="w-80 mb-4"
              disabled={!activeInfluencer}
            >
              Paint in New Scenario <Paintbrush className="ml-2" />
            </Button>
            <Button onClick={resetApp} variant="outline" className="w-80">
              Create Another Influencer <Camera className="ml-2" />
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-gray-400">No influencer selected.</p> // Handle null case
      )}
    </section>
  );
};

export default InfluencerSavedStep;
