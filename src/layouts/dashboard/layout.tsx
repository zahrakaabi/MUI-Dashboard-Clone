/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useOutlet } from "react-router";
import nProgress from 'nprogress';

// UI Lib Components
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// UI Local Components
import AppSidebar from "./sidebar";
import ProgressBar from "@/components/progress-bar/progress-bar";

/* -------------------------------------------------------------------------- */
/*                              LAYOUT COMPONENT                              */
/* -------------------------------------------------------------------------- */
function Layout() {
/* ---------------------------------- HOOKS --------------------------------- */
  const location = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    nProgress.configure({ parent: "#main-content", showSpinner: false });
  }, [])

  useEffect(() => {
    nProgress.start();
    const timer = setTimeout(() => {
      nProgress.done();
    }, 150);

    return () => {
      clearTimeout(timer);
      nProgress.done();
    };
  }, [location.pathname]);

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <SidebarProvider>
      <div className="flex h-dvh w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center p-2 shrink-0">
            <SidebarTrigger />
          </header>
          <main id="main-content" className="relative flex-1 overflow-auto p-4">
            <AnimatePresence mode="wait" initial={false}>
              <ProgressBar key={location.pathname}>{outlet}</ProgressBar>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
};

export default Layout;