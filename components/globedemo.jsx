"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#191A1F",
    showAtmosphere: true,
    atmosphereColor: "#191A1F",
    atmosphereAltitude: 0.1,
    emissive: "#191A1F",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#DD233C", "#3694FF", "#31B646"];
  const sampleArcs = [
    {
      order: 1,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: -19.885592,
      endLng: -43.951191,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: -15.785493,
      endLng: -47.909029,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 21.3099,
      endLng: -157.8581,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: -6.2088,
      endLng: 106.8456,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 11.986597,
      endLng: 8.571831,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: -15.432563,
      endLng: 28.315853,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 37.5665,
      endLng: 126.978,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 18.520430,
      startLng: 73.856743,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },

  ]

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto  relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
       
        <div className="absolute w-full bottom-0 inset-x-0 h-40  pointer-events-none select-none  z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />;
        </div>
      </div>
    </div>
  );
}

export default GlobeDemo;