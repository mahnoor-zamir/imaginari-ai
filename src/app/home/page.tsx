// src/app/home/page.tsx
'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import CreateInfluencer from '@/components/home/create-influencer';
import InfluencerList from '@/components/home/influencer-list';
import Gallery from '@/components/home/gallery';
import { useTabContext } from '@/context/TabContext';

// Define the Influencer type
interface Influencer {
  name: string;
  image: string;
}

export default function HomePage() {
  const router = useRouter();
  const { activeTab } = useTabContext();
  // Initialize influencers state with the correct type
  const [influencers, setInfluencers] = React.useState<Influencer[]>([]);
  const [gallery, setGallery] = React.useState<{ influencer: Influencer; scenario: string; prompt: string }[]>([]);
  const [activeInfluencer, setActiveInfluencer] = React.useState<Influencer | null>(null); // Add state for active influencer

  const handleLogout = () => {
    // Here you would typically handle logout logic
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center pt-4 mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            AI Influencer Generator
          </h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <Tabs value={activeTab} className="w-full mb-6">
          <TabsContent value="create">
            <CreateInfluencer 
              influencers={influencers} 
              setInfluencers={setInfluencers}
              gallery={gallery}
              setGallery={setGallery}
            />
          </TabsContent>

          <TabsContent value="influencers">
            <InfluencerList 
              influencers={influencers} 
              setActiveInfluencer={setActiveInfluencer} // Pass setActiveInfluencer instead of setGallery
            />
          </TabsContent>

          <TabsContent value="gallery">
            <Gallery gallery={gallery} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}