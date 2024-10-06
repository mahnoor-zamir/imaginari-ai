// components/home/steps/ScenarioStep.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Paintbrush } from "lucide-react";

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
  setStep,
}) => {
  const paintInfluencer = () => {
    if (!activeInfluencer) return; // Early exit if no active influencer

    const paintedScenario = "/api/placeholder/400/600";
    const newGalleryItem: GalleryItem = {
      influencer: activeInfluencer,
      scenario: paintedScenario,
      prompt: scenarioPrompt || "Image-based scenario",
    };
    setGallery((prevGallery) => [...prevGallery, newGalleryItem]);
    setStep(5);
  };

  const selectedImage = activeInfluencer ? activeInfluencer.image : null;

  return (
    <>
      <h2 className="text-4xl font-bold mb-4 text-center">
        Paint {activeInfluencer ? activeInfluencer.name : "Influencer"} in a New
        Scenario
      </h2>
      <section className="flex items-center justify-center mb-16 relative mt-20">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected influencer"
            className="w-64 h-auto rounded-lg mr-8"
          />
        )}
        <div className="space-y-2">
            <Label htmlFor="influencerName">Scenario Prompt</Label>
            <textarea
            id="scenarioPrompt"
            placeholder="Enter scenario prompt"
            value={scenarioPrompt}
            onChange={(e) => setScenarioPrompt(e.target.value)}
            className="w-full p-2 border rounded bg-black text-white"
            rows={4}
            />
          {/* Save button - disabled if no name is entered */}
          <Button
            onClick={paintInfluencer}
            disabled={!scenarioPrompt || !activeInfluencer}
            className="w-full"
          >
            Paint Scenario <Paintbrush className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
};

export default ScenarioStep;
