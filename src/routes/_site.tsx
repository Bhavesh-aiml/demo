import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
