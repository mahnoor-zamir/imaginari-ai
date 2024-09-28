import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface Influencer {
  name: string;
  image: string;
}

interface InfluencerListProps {
  influencers: Influencer[];
  setActiveInfluencer: (influencer: Influencer) => void; // Update to accept active influencer
}

const InfluencerList: React.FC<InfluencerListProps> = ({ influencers, setActiveInfluencer }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl">Saved Influencers</CardTitle>
        <CardDescription>Your collection of AI influencers</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {influencers.map((influencer, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <img src={influencer.image} alt={influencer.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{influencer.name}</h3>
                    <Button onClick={() => setActiveInfluencer(influencer)} className="w-full">
                      Select Influencer
                    </Button>
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

export default InfluencerList;
