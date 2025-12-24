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
        subheader: 'Overview',
        items: [
          { title: 'App', path: paths.dashboard.root },
          { title: 'Ecommerce', path: paths.dashboard.eCommerce },
          { title: 'Analytics', path: paths.dashboard.analytics },
        ],
      },
      {
        subheader: 'MANAGMENT',
        items: [
          { title: 'User', path: paths.dashboard.user },
          { title: 'Product', path: paths.dashboard.product },
          { title: 'Blog', path: paths.dashboard.blog }
        ],
      }
    ],
    []
  );

  return data;
};