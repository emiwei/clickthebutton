"use client";

import Modal from "../components/Modal";
import { useState } from "react";
export default function ClickTheButton() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onLevelComplete = () => {
    setModalOpen(true);
  };

  return (
    <div
      className={`relative flex flex-col h-screen justify-between items-center ${
        modalOpen ? "bg-gray-800 bg-opacity-60" : "bg-gray-100"
      } transition-colors`}
    >
      <div className="mt-6 text-3xl">
        <span>Click the button!</span>
      </div>
      <div className="flex flex-grow justify-center items-center">
        <button
          onClick={onLevelComplete}
          className="border p-4 bg-white hover:shadow-sm"
        >
          the button
        </button>
        {modalOpen && <Modal />}
      </div>
    </div>
  );
}
