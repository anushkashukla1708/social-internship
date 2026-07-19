import Sidebar from "../../components/Slidebar";
import Topbar from "../../components/Topbar";
import VolunteerTable from "../../components/VolunteerTable";

export default function VolunteersPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 flex-1 bg-gray-700 min-h-screen">
        <Topbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">
            Volunteer Management
          </h1>

          <VolunteerTable />
        </div>
      </main>
    </div>
  );
}