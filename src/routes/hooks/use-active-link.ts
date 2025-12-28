/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useLocation } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                          USEACTIVELINK CUSTOM HOOK                         */
/* -------------------------------------------------------------------------- */
type ReturnType = boolean;

function useActiveLink(path: string, deep = true): ReturnType {
/* ---------------------------------- HOOKS --------------------------------- */
  const { pathname } = useLocation();

  const isAnchor = path.startsWith('#');

  const currentPath = path === '/' ? '/' : `${path}/`;

  const normalActive = !isAnchor && pathname === currentPath;

  const deepActive = !isAnchor && pathname.includes(currentPath);

/* -------------------------------- RENDERING ------------------------------- */
  return deep ? deepActive : normalActive;
};

export default useActiveLink;