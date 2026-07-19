import StatCard from "@/components/StatCard";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-7xl font-bold text-gray-500">
        Welcome Admin 👋
      </h1>

      <p className="text-gray-800 mt-2 text-gray-500">
        Here's today's summary.
      </p>

      <div className="grid gap-6 mt-8 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Children"
          value={35}
        />

        <StatCard
          title="Volunteers"
          value={12}
        />

        <StatCard
          title="Attendance"
          value={31}
        />

        <StatCard
          title="Events"
          value={6}
        />

      </div>
    </>
  );
}