export default function ReportCards() {
  return (
    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Children</h3>
        <h1 className="text-4xl font-bold mt-3">35</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Volunteers</h3>
        <h1 className="text-4xl font-bold mt-3">12</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Attendance</h3>
        <h1 className="text-4xl font-bold mt-3">91%</h1>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Events</h3>
        <h1 className="text-4xl font-bold mt-3">8</h1>
      </div>

    </div>
  );
}