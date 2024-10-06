import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ScenarioStep from "./steps/scenerio";
import PaintedScenarioStep from "./steps/painted-scenerio";

interface Influencer {
  name: string;
  image: string;
}

interface GalleryItem {
  influencer: Influencer;
  scenario: string;
  prompt: string;
}

interface InfluencerListProps {
  influencers: Influencer[];
  setActiveInfluencer: (influencer: Influencer) => void; // Update to accept active influencer
  gallery: GalleryItem[];
  setGallery: React.Dispatch<React.SetStateAction<GalleryItem[]>>;
}

const InfluencerList: React.FC<InfluencerListProps> = ({
  influencers,
  setActiveInfluencer,
  gallery,
  setGallery,
}) => {
  const [step, setStep] = useState(0);
  const [scenarioPrompt, setScenarioPrompt] = useState("");
  const [activeInfluencer, setActiveInfluencerState] =
    useState<Influencer | null>(null);

  const handleSelectInfluencer = (influencer: Influencer) => {
    setActiveInfluencer(influencer);
    setActiveInfluencerState(influencer);
    setStep(1);
  };

  const fadeInOut = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  const steps = [
    <section className="text-center mb-16 relative mt-20">
      <h2 className="text-3xl font-bold mb-4">Saved Influencers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {influencers.map((influencer, index) => (
            <Card key={index} className="relative border-none shadow-none">
              <div className="flex justify-center items-center">
                <img
                  src={influencer.image}
                  alt={influencer.name}
                  className="object-cover rounded-lg"
                  style={{ width: "300px", height: "400px" }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-black" style={{ width: "75%", margin: "0 auto" }}>
                <h3 className="text-lg font-bold mb-2">{influencer.name}</h3>
                <Button
                  onClick={() => handleSelectInfluencer(influencer)}
                  className="w-full text-sm"
                >
                  Select Influencer
                </Button>
              </div>
            </Card>
        ))}
      </div>
    </section>,
    <ScenarioStep
      activeInfluencer={activeInfluencer}
      scenarioPrompt={scenarioPrompt}
      setScenarioPrompt={setScenarioPrompt}
      setGallery={setGallery}
      setStep={setStep}
    />,
    <PaintedScenarioStep
      gallery={gallery}
      setStep={setStep}
      resetApp={() => setStep(0)}
    />,
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div key={`step${step}`} {...fadeInOut}>
        {steps[step]}
      </motion.div>
    </AnimatePresence>
  );
};

export default InfluencerList;
