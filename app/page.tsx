import React from "react";
import Header from "@/components/Headed";
import HeroSection from "@/components/HeroSection";

export default function Home(){
  return(
    <div
    className="min-h-sreen bg-white">
     <Header />
     <HeroSection />
    </div>
  )
}