import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PromptStep from './steps/prompt';
import ImageSelectionStep from './steps/image-selection';
import NamingStep from './steps/naming';
import InfluencerSavedStep from './steps/influencer-saved';
import ScenarioStep from './steps/scenerio';
import PaintedScenarioStep from './steps/painted-scenerio';

// Define the types for the influencer and gallery item
interface Influencer {
  name: string;
  image: string;
}

interface GalleryItem {
  influencer: Influencer;
  scenario: string;
  prompt: string;
}

// Define the props for the CreateInfluencer component
interface CreateInfluencerProps {
  influencers: Influencer[];
  setInfluencers: React.Dispatch<React.SetStateAction<Influencer[]>>;
  gallery: GalleryItem[];  // Update this to GalleryItem[]
  setGallery: React.Dispatch<React.SetStateAction<GalleryItem[]>>;  // Update this to GalleryItem[]
}

const CreateInfluencer: React.FC<CreateInfluencerProps> = ({ influencers, setInfluencers, gallery, setGallery }) => {
  const [step, setStep] = useState(0);
  const [prompt, setPrompt] = useState('');
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>(''); // Set default as empty string
  const [influencerName, setInfluencerName] = useState('');
  const [scenarioPrompt, setScenarioPrompt] = useState('');
  const [activeInfluencer, setActiveInfluencer] = useState<Influencer | null>(null);

  // Motion configuration for the fade effect
  const fadeInOut = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };

  // Define the steps of the influencer creation process
  const steps = [
    <PromptStep 
      prompt={prompt} 
      setPrompt={setPrompt} 
      setGeneratedImages={setGeneratedImages} 
      setStep={setStep} 
    />,
    <ImageSelectionStep 
      generatedImages={generatedImages} 
      setSelectedImage={setSelectedImage} 
      setStep={setStep} 
    />,
    <NamingStep 
      selectedImage={selectedImage} 
      influencerName={influencerName} 
      setInfluencerName={setInfluencerName} 
      setInfluencers={setInfluencers} 
      setActiveInfluencer={setActiveInfluencer} 
      setStep={setStep} 
    />,
    <InfluencerSavedStep 
      activeInfluencer={activeInfluencer} 
      setStep={setStep} 
      resetApp={() => setStep(0)} 
    />,
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
    />
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div key={`step${step}`} {...fadeInOut}>
        {steps[step]}
      </motion.div>
    </AnimatePresence>
  );
};

export default CreateInfluencer;
