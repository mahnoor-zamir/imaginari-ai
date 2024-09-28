import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from 'lucide-react';

// Define the Influencer interface
interface Influencer {
  name: string;
  image: string;
}

// Define props for NamingStep component
interface NamingStepProps {
  selectedImage: string; // Ensure selectedImage is a string, not nullable
  influencerName: string;
  setInfluencerName: (name: string) => void;
  setInfluencers: (influencers: (prev: Influencer[]) => Influencer[]) => void; // Ensure setInfluencers can handle the correct function signature
  setActiveInfluencer: (influencer: Influencer) => void;
  setStep: (step: number) => void;
}

// The NamingStep component
const NamingStep: React.FC<NamingStepProps> = ({
  selectedImage,
  influencerName,
  setInfluencerName,
  setInfluencers,
  setActiveInfluencer,
  setStep,
}) => {
  // Function to save the influencer
  const saveInfluencer = () => {
    // Create a new influencer object
    const newInfluencer: Influencer = { name: influencerName, image: selectedImage };

    // Update the influencers array by appending the new influencer
    setInfluencers((prev) => [...prev, newInfluencer]);

    // Set the active influencer
    setActiveInfluencer(newInfluencer);

    // Move to the next step
    setStep(3);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl">Name Your Influencer</CardTitle>
        <CardDescription>Give your AI influencer a unique name</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Show selected image if it exists */}
        {selectedImage && (
          <img src={selectedImage} alt="Selected influencer" className="w-64 h-auto mx-auto rounded-lg" />
        )}
        <div className="space-y-2">
          <Label htmlFor="influencerName">Influencer Name</Label>
          {/* Input for the influencer's name */}
          <Input
            id="influencerName"
            placeholder="Enter influencer name"
            value={influencerName}
            onChange={(e) => setInfluencerName(e.target.value)}
          />
        </div>
        {/* Save button - disabled if no name is entered */}
        <Button onClick={saveInfluencer} disabled={!influencerName} className="w-full">
          Save Influencer <Save className="ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default NamingStep;
