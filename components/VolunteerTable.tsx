"use client";

import { useState } from "react";
import AddVolunteerModal from "./AddVolunteerModal";

type Volunteer = {
  id: number;
  name: string;
  role: string;
  phone: string;
};

const initialVolunteers: Volunteer[] = [
  {
    id: 1,
    name: "Ankit Sharma",
    role: "Teacher",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "Neha Singh",
    role: "Coordinator",
    phone: "9876501234",
  },
];

export default function VolunteerTable() {
  const [volunteers, setVolunteers] = useState(initialVolunteers);
  const [showModal, setShowModal] = useState(false);

  const deleteVolunteer = (id: number) => {
    setVolunteers(volunteers.filter((v) => v.id !== id));
  };

  const addVolunteer = (volunteer: {
    name: string;
    role: string;
    phone: string;
  }) => {
    const newVolunteer: Volunteer = {
      id: Date.now(),
      ...volunteer,
    };

    setVolunteers([...volunteers, newVolunteer]);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-gray-500">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          Volunteers
        </h2>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition"
        >
          + Add Volunteer
        </button>

      </div>

      <table className="w-full">

        <thead className="bg-green-700 text-white">

          <tr>
            <th className="p-3">Name</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody className="text-gray-900">

          {volunteers.map((v) => (

            <tr key={v.id} className="border-b text-center">

              <td className="p-3 font-medium">
                {v.name}
              </td>

              <td>{v.role}</td>

              <td>{v.phone}</td>

              <td>

                <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700">
                  Edit
                </button>

                <button
                  onClick={() => deleteVolunteer(v.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {showModal && (
        <AddVolunteerModal
          onClose={() => setShowModal(false)}
          onAdd={addVolunteer}
        />
      )}

    </div>
  );
}