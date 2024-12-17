"use client";

import { useEffect, useState } from "react";
import Modal from "../components/Modal";

export default function ItsTooDark() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      const root = document.documentElement;
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateRandomPosition = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const buttonWidth = 112;
    const buttonHeight = 56;
    const randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));

    return { x: randomX, y: randomY };
  };

  const onLevelComplete = () => {
    setModalOpen(true);
  }

  const randomPosition = generateRandomPosition();
  return (
    <div
      className="flashlight bg-black h-screen w-screen overflow-hidden relative flex flex-col justify-between items-center"
    >
      <div className="mt-6 text-3xl">
        <span>Click the button!</span>
      </div>
      <button
        style={{ top: `${randomPosition.y}px`, left: `${randomPosition.x}px` }}
        className="absolute border p-4 bg-white hover:shadow-sm w-28 h-14"
        onClick={onLevelComplete}
      >
        the button
      </button>
      
      {modalOpen && <Modal/>}
    </div>
  );
}
