// src/app/home/layout.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabProvider, useTabContext } from "../../context/TabContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { activeTab, setActiveTab } = useTabContext();

  const handleLogout = () => {
    // Here you would typically handle logout logic
    router.push("/");
  };

  return (
    <div className="min-h-screen text-gray-100">
      <nav className="flex justify-between items-center py-4 mb-8">
        <div className="text-2xl font-bold text-white ml-8">Imaginari</div>
        <Tabs defaultValue={activeTab} className="flex space-x-4">
          <TabsList>
            <TabsTrigger
              value="create"
              className="text-lg sm:text-xl"
              onClick={() => setActiveTab("create")}
            >
              Create
            </TabsTrigger>
            <TabsTrigger
              value="influencers"
              className="text-lg sm:text-xl"
              onClick={() => setActiveTab("influencers")}
            >
              Influencers
            </TabsTrigger>
            <TabsTrigger
              value="gallery"
              className="text-lg sm:text-xl"
              onClick={() => setActiveTab("gallery")}
            >
              Gallery
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Button onClick={handleLogout} variant="outline" className="mr-8">
          Logout
        </Button>
      </nav>
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
}
