/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useId } from 'react';

// UI Lib Components
import { Box } from 'lucide-react';
import { Button, Tooltip } from '@/components/ui';

//import Iconify from '../../iconify';

// Utils
import type { NavItemProps } from '../types';

/* -------------------------------------------------------------------------- */
/*                             NAV ITEM COMPONENT                             */
/* -------------------------------------------------------------------------- */
function NavItem({
  title,
  //path,
  icon,
  info,
  disabled,
  caption,
  roles,
  open,
  depth = 1,
  active,
  hasChild,
  externalLink,
  currentRole = 'admin',
}: NavItemProps) {
/* --------------------------------- CONSTS --------------------------------- */
  const subItem = depth !== 1;
  const id = useId();

  // Hidden item by role
  if (roles && !roles.includes(`${currentRole}`)) return null;

  const content = (
    <Button
      variant="ghost"
      className={`w-full flex items-center justify-between rounded-lg text-sm ${
        active ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
      }`}
      disabled={disabled}
    >
      <Box className="flex items-center gap-2">
        {icon && <Box className="w-6 h-6">{icon}</Box>}

        <Box className="flex-1 min-w-0 truncate">
          <span className="capitalize">{title}</span>
          {caption && (
            <h1>tooltip</h1>/*<Tooltip content={caption}>
              <span className="text-xs text-muted-foreground ml-1">{caption}</span>
            </Tooltip>*/
          )}
        </Box>

        {info && <span className="ml-2">{info}</span>}
      </Box>

      {hasChild && (
        <h1>test</h1>/*<Iconify
          width={16}
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
        />*/
      )}
    </Button>
  );

  if (hasChild) return content;

  if (externalLink)
    return (
      <><h1>hrllos</h1>{/*<Link href={path} target="_blank" rel="noopener noreferrer" className="w-full block">
        {content}
      </Link>*/}</>
    );

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <><h1>hello</h1>{/*<Link href={path} className="w-full block">
      {content}
    </Link>*/}</>
  );
};

export default NavItem;