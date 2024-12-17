"use client";

import { useState } from "react";
import Modal from "../components/Modal";

export default function ItsTooDarkHarder() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

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
      className="bg-black h-screen w-screen overflow-hidden relative flex flex-col justify-between items-center"
    >
      <div className="mt-6 text-3xl">
        <span>Click the button!</span>
      </div>
      <button
        style={{ top: `${randomPosition.y}px`, left: `${randomPosition.x}px` }}
        className="absolute p-4 w-28 h-14"
        onClick={onLevelComplete}
      >
        the button
      </button>
      
      {modalOpen && <Modal/>}
    </div>
  );
}