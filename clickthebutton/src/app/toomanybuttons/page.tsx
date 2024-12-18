"use client";
import PageWrapper from "../components/PageWrapper";
import { useState, useEffect, JSX } from "react";
import Modal from "../components/Modal";

export default function TooManyButtons() {
  const [clickCounter, setClickCounter] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [buttons, setButtons] = useState<JSX.Element[]>([]);

  const onLevelComplete = () => {
    setModalOpen(true);
  };

  const onWrongClick = () => {
    setClickCounter((prev) => prev + 1);
  };

  useEffect(() => {
    const newButtons: JSX.Element[] = [];
    const selectedButton = Math.floor(Math.random() * 108);
    for (let i = 0; i < 108; i++) {
      if (i == selectedButton) {
        newButtons.push(
          <button
            onClick={onLevelComplete}
            className="border p-4 bg-white hover:shadow-sm hover:bg-slate-50"
          >
            the button
          </button>
        );
      } else {
        newButtons.push(
          <button
            onClick={onWrongClick}
            className="border p-4 bg-white hover:shadow-sm hover:bg-slate-50"
          >
            the button
          </button>
        );
      }
    }
    setButtons(newButtons);
  }, []);
  return (
    <PageWrapper>
      <span className="mb-3 text-xl">Attempt {clickCounter}</span>
      <div className="grid grid-cols-12 gap-1">
        {buttons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
      </div>
      {modalOpen && <Modal />}
    </PageWrapper>
  );
}
