"use client";

import { useState } from "react";

type Child = {
  id: number;
  name: string;
  age: number;
  className: string;
};

type Props = {
  onClose: () => void;
  onAdd: (child: Child) => void;
};

export default function AddChildModal({ onClose, onAdd }: Props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [className, setClassName] = useState("");

  const handleSubmit = () => {
    if (!name || !age || !className) {
      alert("Please fill all fields.");
      return;
    }

    const newChild: Child = {
      id: Date.now(),
      name,
      age: Number(age),
      className,
    };

    onAdd(newChild);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white rounded-xl p-6 w-[420px]">

        <h2 className="text-2xl font-bold mb-5">
          Add Child
        </h2>

        <input
          className="w-full border rounded-lg p-3 mb-3 text-gray-900"
          placeholder="Child Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-3 mb-3 text-gray-900"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          className="w-full border rounded-lg p-3 mb-5 text-gray-900"
          placeholder="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}