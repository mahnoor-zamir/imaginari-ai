// components/home/steps/ScenarioStep.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Paintbrush } from 'lucide-react';

interface Influencer {
  name: string;
  image: string;
}

interface GalleryItem {
  influencer: Influencer;
  scenario: string;
  prompt: string;
}

interface ScenarioStepProps {
  activeInfluencer: Influencer | null;
  scenarioPrompt: string;
  setScenarioPrompt: (prompt: string) => void;
  setGallery: React.Dispatch<React.SetStateAction<GalleryItem[]>>;
  setStep: (step: number) => void;
}

const ScenarioStep: React.FC<ScenarioStepProps> = ({ 
  activeInfluencer, 
  scenarioPrompt, 
  setScenarioPrompt, 
  setGallery, 
  setStep 
}) => {
  const paintInfluencer = () => {
    if (!activeInfluencer) return; // Early exit if no active influencer

    const paintedScenario = '/api/placeholder/400/600';
    const newGalleryItem: GalleryItem = {
      influencer: activeInfluencer,
      scenario: paintedScenario,
      prompt: scenarioPrompt || 'Image-based scenario'
    };
    setGallery(prevGallery => [...prevGallery, newGalleryItem]);
    setStep(5);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl">Paint {activeInfluencer ? activeInfluencer.name : 'Influencer'} in a New Scenario</CardTitle>
        <CardDescription>Describe a new scenario for your AI influencer</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="scenarioPrompt">Scenario Prompt</Label>
          <Input
            id="scenarioPrompt"
            placeholder="Enter scenario prompt"
            value={scenarioPrompt}
            onChange={(e) => setScenarioPrompt(e.target.value)}
          />
        </div>
        <Button onClick={paintInfluencer} disabled={!scenarioPrompt || !activeInfluencer} className="w-full">
          Paint Scenario <Paintbrush className="ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ScenarioStep;
