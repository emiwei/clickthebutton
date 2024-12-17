import { useState } from "react";
import Modal from "./Modal";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div
      className={`relative flex flex-col h-screen items-center ${
        modalOpen ? "bg-gray-800 bg-opacity-60" : "bg-gray-100"
      } transition-colors`}
    >
      <div className="mt-6 text-3xl">
        <span>Click the button!</span>
      </div>
      {children}
    </div>
  );
}
