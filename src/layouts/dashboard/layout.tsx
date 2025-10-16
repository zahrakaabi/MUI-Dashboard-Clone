/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Lib Components
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// UI Local Components
import AppSidebar from "./sidebar";

/* -------------------------------------------------------------------------- */
/*                              LAYOUT COMPONENT                              */
/* -------------------------------------------------------------------------- */
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <main className="flex-1 overflow-auto p-4">
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
};

export default Layout;