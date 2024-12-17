"use client";

import Modal from "../components/Modal";
import PageWrapper from "../components/PageWrapper";
import { useState } from "react";
export default function ClickTheButton() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onLevelComplete = () => {
    setModalOpen(true);
  };

  return (
    <PageWrapper>
      <div className="flex flex-grow justify-center items-center">
        <button
          onClick={onLevelComplete}
          className="border p-4 bg-white hover:shadow-sm"
        >
          the button
        </button>
        {modalOpen && <Modal />}
      </div>
    </PageWrapper>
  );
}
