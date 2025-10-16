/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useMemo } from "react";

// Utils
import { paths } from "@/routes/paths";

/* -------------------------------------------------------------------------- */
/*                                USE NAV DATA                                */
/* -------------------------------------------------------------------------- */
export function useNavData() {
  const data = useMemo(
    () => [
      {
        subheader: 'MANAGMENT',
        items: [
          { title: 'Product', path: paths.dashboard.product },
          { title: 'Blog', path: paths.dashboard.blog }
        ],
      }
    ],
    []
  );

  return data;
};