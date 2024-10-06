// components/home/steps/PromptStep.tsx
import React from 'react';
import { Search, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface PromptStepProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  setGeneratedImages: (images: string[]) => void;
  setStep: (step: number) => void;
}

const PromptStep: React.FC<PromptStepProps> = ({ prompt, setPrompt, setGeneratedImages, setStep }) => {
  const generateImages = () => {
    const fakeImages = [
      'https://via.placeholder.com/300x400',
      'https://via.placeholder.com/300x400',
      'https://via.placeholder.com/300x400',
      'https://via.placeholder.com/300x400'
    ];
    setGeneratedImages(fakeImages);
    setStep(1);
  };

  return (
    <section className="text-center mb-16 relative mt-20  py-24">
      <h2 className="text-6xl font-bold mb-4">Generate Virtual Infulencer</h2>
      <p className="text-xl mb-8 text-gray-400">Create realistic avatars using simple prompts.</p>
      <div className="flex max-w-xl mx-auto">
        <div className="flex-grow bg-zinc-900 rounded-l-full p-3 flex items-center">
          <Sparkles className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Try prompt like 'futuristic city'"
            className="bg-transparent w-full focus:outline-none text-sm"
          />
        </div>
        <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-r-full text-sm" onClick={generateImages}>
          Create
        </button>
      </div>
      <div className="absolute -top-4 left-16 rotate-12">
        <Image src="https://via.placeholder.com/300x300" alt="Interior design" width={300} height={300} className="w-24 h-24" />
      </div>
      <div className="absolute bottom-0 left-16 rotate-6">
        <Image src="https://via.placeholder.com/300x300" alt="Abstract" width={300} height={300} className="w-24 h-24" />
      </div>
      <div className="absolute bottom-32 left-15 ">
        <Image src="https://via.placeholder.com/400x300" alt="Abstract" width={400} height={300} className="w-32 h-24" />
      </div>
      <div className="absolute top-0 right-8 -rotate-12">
        <Image src="https://via.placeholder.com/400x300" alt="Landscape" width={400} height={300} className="w-32 h-24" />
      </div>
      <div className="absolute -bottom-8 right-24 -rotate-6">
        <Image src="https://via.placeholder.com/300x200" alt="Car" width={300} height={200} className="w-24 h-16" />
      </div>
      <div className="absolute top-1/2 right-0 rotate-12">
        <Image src="https://via.placeholder.com/300x300" alt="Architecture" width={300} height={300} className="w-24 h-24" />
      </div>
    </section>
  );
};

export default PromptStep;