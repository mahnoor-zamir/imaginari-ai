// components/home/steps/InfluencerSavedStep.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Camera } from 'lucide-react';

interface InfluencerSavedStepProps {
  activeInfluencer: {
    name: string;
    image: string;
  } | null; // Allow null
  setStep: (step: number) => void;
  resetApp: () => void;
}

const InfluencerSavedStep: React.FC<InfluencerSavedStepProps> = ({ activeInfluencer, setStep, resetApp }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl">Influencer Saved!</CardTitle>
        <CardDescription>Your new AI influencer has been created</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activeInfluencer ? ( // Conditional rendering based on activeInfluencer
          <div className="flex items-center space-x-4">
            <img src={activeInfluencer.image} alt={activeInfluencer.name} className="w-32 h-auto rounded-lg" />
            <div>
              <h3 className="text-2xl font-bold">{activeInfluencer.name}</h3>
              <p className="text-gray-400">Ready for new scenarios</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-400">No influencer selected.</p> // Handle null case
        )}
        <Button onClick={() => setStep(4)} className="w-full" disabled={!activeInfluencer}>
          Paint in New Scenario <Paintbrush className="ml-2" />
        </Button>
        <Button onClick={resetApp} variant="outline" className="w-full">
          Create Another Influencer <Camera className="ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default InfluencerSavedStep;
