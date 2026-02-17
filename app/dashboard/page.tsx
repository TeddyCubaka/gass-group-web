import dynamic from "next/dynamic";

const DashboardClient = dynamic(() => import("./_components/dashboard-client"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
    </div>
  ),
});

export default function DashboardPage() {
  return <DashboardClient />;
}
