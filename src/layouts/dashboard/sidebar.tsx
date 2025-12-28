/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Lib Components
import { ScrollArea, Sidebar, SidebarContent } from "@/components/ui";

// UI Local Components
import Logo from "@/components/logo";
import { NavSectionVertical } from "@/components/nav-section";

// Utils
import { useNavData } from "./config-navigation";

/* -------------------------------------------------------------------------- */
/*                              SIDEBAR COMPONENT                             */
/* -------------------------------------------------------------------------- */
function AppSidebar() {
/* --------------------------------- CONSTS --------------------------------- */
  const navData = useNavData();

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Sidebar style={{ "--sidebar": "0 0% 100%" } as React.CSSProperties }>
      <ScrollArea>
        <SidebarContent>
          <Logo className="mt-3 ml-4 mb-1" />
          <NavSectionVertical data={navData} />
        </SidebarContent>
      </ScrollArea>
    </Sidebar>
  )
};

export default AppSidebar;