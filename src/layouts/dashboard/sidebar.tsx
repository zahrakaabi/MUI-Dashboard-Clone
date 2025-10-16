/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Lib Components
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

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
    <Sidebar>
      <SidebarContent>
        {navData.map((group) => (
          <SidebarGroup key={group.subheader}>
            <SidebarGroupLabel>{group.subheader}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar;