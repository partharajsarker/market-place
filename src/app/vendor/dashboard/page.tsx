import { VendorDashboard } from "@/components/vendor/dashboard";

export default function VendorDashboardPage() {
  return (
    <div className="py-8">
      <div className="container-responsive">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Vendor Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your products, orders, and business performance
          </p>
        </div>

        <VendorDashboard />
      </div>
    </div>
  );
}
