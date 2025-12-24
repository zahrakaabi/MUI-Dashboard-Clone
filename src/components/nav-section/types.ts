export type CrudPath = {
  list: string;
  edit: (id: number) => string;
  create: string;
};

export type NavItemStateProps = {
  depth?: number;
  open?: boolean;
  active?: boolean;
  hasChild?: boolean;
  currentRole?: string;
  externalLink?: boolean;
};

export type NavItemProps = NavItemStateProps & NavItemBaseProps;

export type NavItemBaseProps = {
  title: string;
  path: string | CrudPath;
  icon?: React.ReactElement;
  info?: React.ReactElement;
  caption?: string;
  disabled?: boolean;
  roles?: string[];
  children?: any;
};

export type NavProps = {
  data: {
    subheader: string;
    items: NavItemBaseProps[];
  }[];
};