/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { memo, useCallback, useState } from "react";

// UI Lib Components
import {  
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui";

// Utils
import type { NavProps } from "../types";

/* -------------------------------------------------------------------------- */
/*                       NAV SECTION VERTICAL COMPONENT                       */
/* -------------------------------------------------------------------------- */
function NavSectionVertical({ data }: NavProps) {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <nav>
        {data.map((group) => (
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
    </nav>
  )
};

export default memo(NavSectionVertical);

/* -------------------------------------------------------------------------- */
/*                               GROUP COMPONENT                              */
/* -------------------------------------------------------------------------- */
function Group({ subheader, items, slotProps }: NavGroupProps) {
/* ---------------------------------- HOOKS --------------------------------- */
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

/* --------------------------------- CONSTS --------------------------------- */
  const renderContent = items.map((list) => (
    <>
    <div>NAV LIST</div>
    {/*<NavList key={list.title} data={list} depth={1} slotProps={slotProps} />*/}
    </>
  ));

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Stack sx={{ px: 2 }}>
      {subheader ? (
        <>
          <ListSubheader
            disableGutters
            disableSticky
            onClick={handleToggle}
            sx={{
              fontSize: 11,
              cursor: 'pointer',
              typography: 'overline',
              display: 'inline-flex',
              color: 'text.disabled',
              mb: `${slotProps?.gap || 4}px`,
              p: (theme) => theme.spacing(2, 1, 1, 1.5),
              transition: (theme) =>
                theme.transitions.create(['color'], {
                  duration: theme.transitions.duration.shortest,
                }),
              '&:hover': {
                color: 'text.primary',
              },
              ...slotProps?.subheader,
            }}
          >
            {subheader}
          </ListSubheader>

          <Collapse in={open}>{renderContent}</Collapse>
        </>
      ) : (
        renderContent
      )}
    </Stack>
  );
};