"use client";

import { useState } from "react";

type Student = {
  id: number;
  name: string;
  age: number;
  status: "Present" | "Absent";
};

const initialStudents: Student[] = [
  { id: 1, name: "Rahul Sharma", age: 10, status: "Present" },
  { id: 2, name: "Priya Verma", age: 11, status: "Absent" },
  { id: 3, name: "Aman Kumar", age: 9, status: "Present" },
  { id: 4, name: "Riya Singh", age: 12, status: "Absent" },
];

export default function AttendanceTable() {
  const [students, setStudents] = useState(initialStudents);

  const changeStatus = (id: number, status: "Present" | "Absent") => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const saveAttendance = () => {
    console.log(students);
    alert("Attendance Saved Successfully!");
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 text-gray-900">

      <h2 className="text-2xl font-bold mb-6">
        Today's Attendance
      </h2>

      <table className="w-full border-collapse">

        <thead className="bg-green-700 text-white">

          <tr>
            <th className="p-3">Name</th>
            <th>Age</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {students.map((student) => (
            <tr
              key={student.id}
              className="border-b text-center"
            >
              <td className="p-3">{student.name}</td>

              <td>{student.age}</td>

              <td>

                <select
                  value={student.status}
                  onChange={(e) =>
                    changeStatus(
                      student.id,
                      e.target.value as "Present" | "Absent"
                    )
                  }
                  className="border rounded px-3 py-2"
                >
                  <option>Present</option>
                  <option>Absent</option>
                </select>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

      <button
        onClick={saveAttendance}
        className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg"
      >
        Save Attendance
      </button>

    </div>
  );
}