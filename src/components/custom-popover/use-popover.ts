/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useState, useCallback } from 'react';

/* -------------------------------------------------------------------------- */
/*                           USEPOPOVER CUSTOM HOOK                           */
/* -------------------------------------------------------------------------- */
type ReturnType = {
  onClose: VoidFunction;
  open: HTMLElement | null;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  setOpen: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

function usePopover(): ReturnType {
/* ---------------------------------- HOOKS --------------------------------- */
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const onOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  }, []);

  const onClose = useCallback(() => {
    setOpen(null);
  }, []);

/* -------------------------------- RENDERING ------------------------------- */
  return {
    open,
    onOpen,
    onClose,
    setOpen,
  };
};

export default usePopover;