import Sidebar from "../../components/Slidebar";
import Topbar from "../../components/Topbar";
import AttendanceTable from "../../components/AttendanceTable";

export default function AttendancePage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 flex-1 bg-gray-700 min-h-screen">
        <Topbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">
            Attendance
          </h1>

          <AttendanceTable />
        </div>
      </main>
    </div>
  );
}