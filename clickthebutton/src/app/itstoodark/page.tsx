"use client";

import { useEffect, useState } from "react";
import Modal from "../components/Modal";

export default function ItsTooDark() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [randomPosition, setRandomPosition] = useState<{
    x: Number;
    y: Number;
  }>({ x: 0, y: 0 });

  useEffect(() => {
    const generateRandomPosition = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const buttonWidth = 112;
      const buttonHeight = 56;
      const randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
      const randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));

      return { x: randomX, y: randomY };
    };

    const randomPosition = generateRandomPosition();
    setRandomPosition(randomPosition);

    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      const root = document.documentElement;
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const onLevelComplete = () => {
    setModalOpen(true);
  };

  return (
    <div className="flashlight bg-black h-screen w-screen overflow-hidden relative flex flex-col justify-between items-center">
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

      {modalOpen && <Modal />}
    </div>
  );
}
