import Sidebar from "../components/Slidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="ml-64 w-full bg-gray-100 min-h-screen">

        <Topbar />
<div className="mx-8 mt-8 bg-gradient-to-r from-green-700 to-emerald-600 rounded-2xl shadow-xl text-white p-8">

  <h1 className="text-4xl font-bold mb-3">
    🐄 Vatsalya Rudra Gaushala & Children Foundation
  </h1>

  <p className="text-lg mb-2">
    📍 Govindpuram, Ghaziabad, Uttar Pradesh
  </p>

  <p className="text-lg mb-2">
    📞 +91 72909 41562
  </p>

  <p className="text-lg italic mt-4">
    "Serving Children with Care, Protecting Cows with Compassion."
  </p>

</div>
        <div className="p-8">

          <h1 className="text-3xl font-bold text-gray-500">
            Welcome Admin 👋
          </h1>

          <div className="grid md:grid-cols-4 gap-6 mt-8">

            <StatCard title="Children" value={35} />

            <StatCard title="Volunteers" value={12} />

            <StatCard title="Today's Attendance" value={31} />

            <StatCard title="Events" value={6} />

          </div>

        </div>

      </main>

    </div>
  );
}