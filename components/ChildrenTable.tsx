"use client";

import { useState } from "react";
import AddChildModal from "./AddChilModal";
import AddChilModal from "./AddChilModal";

type Child = {
  id: number;
  name: string;
  age: number;
  className: string;
};

const initialChildren: Child[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 10,
    className: "5th",
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 11,
    className: "6th",
  },
];

export default function ChildrenTable() {
  const [children, setChildren] = useState(initialChildren);

  const [showModal, setShowModal] = useState(false);
const addChild = (child: Child) => {
  setChildren((prev) => [...prev, child]);
};
  const deleteChild = (id: number) => {
    setChildren(children.filter((child) => child.id !== id));
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow p-6 text-gray-500">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-gray-900">
            Children List
          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
          >
            + Add Child
          </button>

        </div>

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>
              <th className="p-3">Name</th>
              <th>Age</th>
              <th>Class</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {children.map((child) => (

              <tr
                key={child.id}
                className="border-b text-center"
              >

                <td className="p-3">
                  {child.name}
                </td>

                <td>{child.age}</td>

                <td>{child.className}</td>

                <td>

                  <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>

                  <button
                    onClick={() => deleteChild(child.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {showModal && (
        <AddChilModal
          onClose={() => setShowModal(false)}
            onAdd={addChild}
        />
      )}
    </>
  );
}
