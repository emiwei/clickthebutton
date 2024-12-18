"use client";

import PageWrapper from "../components/PageWrapper";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

export default function Permutations() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [remainingPermutations, setRemainingPermutations] = useState<
    Set<string>
  >(new Set());
  const [correctPermutation, setCorrectPermutation] = useState<string[]>([]);
  const [userSequence, setUserSequence] = useState<string[]>([]);
  const [correctSequence, setCorrectSequence] = useState<boolean>(false);
  const [currPermutation, setCurrPermutation] = useState<string[]>([]);

  const colors = [
    { key: "r", tailwindColor: "bg-red-600" },
    { key: "b", tailwindColor: "bg-blue-600" },
    { key: "p", tailwindColor: "bg-purple-600" },
    { key: "g", tailwindColor: "bg-green-600" },
    { key: "o", tailwindColor: "bg-orange-500" },
  ];

  useEffect(() => {
    const calculateAllPermutations = (items: string[]): string[][] => {
      if (items.length === 1) return [items];

      const result: string[][] = [];
      items.forEach((item: string, index) => {
        const remaining = [...items.slice(0, index), ...items.slice(index + 1)];
        const perms: string[][] = calculateAllPermutations(remaining);
        perms.forEach((perm: string[]) => result.push([item, ...perm]));
      });
      return result;
    };
    const allPermutations = calculateAllPermutations(colors.map((c) => c.key));
    setRemainingPermutations(
      new Set(allPermutations.map((perm) => perm.join("")))
    );

    const permutationIndex = Math.floor(Math.random() * 120);
    const permutationOrder = allPermutations[permutationIndex];
    setCorrectPermutation(permutationOrder);
  }, []);

  const onLevelComplete = () => {
    setModalOpen(true);
  };

  const handleButtonClick = (colorKey: string) => {
    let newUserSequence: string[] = [];
    if (
      JSON.stringify([...userSequence, colorKey]) ==
      JSON.stringify(correctPermutation.slice(0, userSequence.length + 1))
    ) {
      newUserSequence = [...userSequence, colorKey];
    }
    setUserSequence(newUserSequence);
    if (newUserSequence.length == 5) {
      setCorrectSequence(true);
    }
    checkPermutationsRemaining(colorKey);
  };

  const checkPermutationsRemaining = (colorKey: string) => {
    const newPermutation = [...currPermutation];
    if (currPermutation.length == 4) {
      newPermutation.push(colorKey);
      const newPermutationStr: string = newPermutation.join("");
      const oldSet = remainingPermutations;
      oldSet.delete(newPermutationStr);
      setRemainingPermutations(oldSet);
      setCurrPermutation([]);
    } else {
      newPermutation.push(colorKey);
      setCurrPermutation(newPermutation);
    }
  };

  return (
    <PageWrapper>
      <div className="w-3/5 h-full flex flex-col justify-center items-center">
        <div className="w-3/5 grid grid-cols-5 gap-7">
          {colors.map((color, _) => (
            <button
              className={`h-24 w-24 ${color.tailwindColor}`}
              onClick={() => handleButtonClick(color.key)}
              key={color.key}
            ></button>
          ))}
        </div>
        <span className="text-2xl pt-10 pb-5">
          {remainingPermutations.size} permutations left
        </span>
        {correctSequence && (
          <button
            onClick={onLevelComplete}
            className="border p-4 bg-white hover:shadow-sm hover:bg-slate-50"
          >
            the button
          </button>
        )}
        {modalOpen && <Modal />}
      </div>
    </PageWrapper>
  );
}
