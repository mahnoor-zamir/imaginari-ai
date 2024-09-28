import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the types for the gallery items
interface Influencer {
  name: string;
  image: string;
}

interface GalleryItem {
  influencer: Influencer;
  scenario: string;
  prompt: string;
}

interface GalleryProps {
  gallery: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl">Scenario Gallery</CardTitle>
        <CardDescription>Explore all painted scenarios</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full rounded-md border p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <img 
                    src={item.scenario} 
                    alt={`Scenario for ${item.influencer.name}`} 
                    className="w-full h-48 object-cover rounded-t-lg" 
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{item.influencer.name}</h3>
                    <p className="text-gray-400">{item.prompt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Gallery;
