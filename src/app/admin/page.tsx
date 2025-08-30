import AdminDashboard from "@/components/admin/dashboard";

export default function AdminPage() {
  return (
    <div className="py-8">
      <div className="container-responsive">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage the marketplace, vendors, and system settings
          </p>
        </div>

        <AdminDashboard />
      </div>
    </div>
  );
}
