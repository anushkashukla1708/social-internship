"use client";

import { useState } from "react";

type Props = {
  onClose: () => void;
  onAdd: (volunteer: {
    name: string;
    role: string;
    phone: string;
  }) => void;
};

export default function AddVolunteerModal({
  onClose,
  onAdd,
}: Props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!name || !role || !phone) {
      alert("Please fill all fields");
      return;
    }

    onAdd({
      name,
      role,
      phone,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-[420px] p-6">

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Add Volunteer
        </h2>

        <input
          type="text"
          placeholder="Volunteer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4 text-gray-900"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4 text-gray-900"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6 text-gray-900"
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}