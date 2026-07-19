import Sidebar from "@/components/Slidebar";
import Topbar from "@/components/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-slate-700">

      <Sidebar />

      <main className="ml-64 min-h-screen flex-1">

        <Topbar />

        <div className="p-8">
          {children}
        </div>

      </main>

    </div>
  );
}