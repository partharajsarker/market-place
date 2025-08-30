import { VendorOnboardingForm } from "@/components/vendor/onboarding-form";

export default function VendorOnboardingPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to Marketplace!</h1>
          <p className="text-muted-foreground">
            Let's get your business set up and ready to sell
          </p>
        </div>

        <VendorOnboardingForm />
      </div>
    </div>
  );
}
