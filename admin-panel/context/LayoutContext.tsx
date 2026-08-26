"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  useSyncExternalStore,
} from "react";
import { usePathname } from "next/navigation";

type LayoutContextType = {
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
  // Mobile-only: the sidebar renders as an overlay drawer opened from the
  // header's hamburger. Always false on desktop (the trigger is lg:hidden).
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);
const SIDEBAR_STORAGE_KEY = "anwar_sidebar_expanded";

// localStorage is an external store, so it's read through useSyncExternalStore
// rather than an effect: the server (and the hydrating render) sees the default,
// and React swaps in the stored value right after hydration without a mismatch.
const storeListeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  storeListeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    storeListeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(SIDEBAR_STORAGE_KEY) !== "false";
}

function getServerSnapshot() {
  return true;
}

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const sidebarExpanded = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Close the drawer on any route change (nav clicks, back button). Adjusting
  // state during render on a changed value is React's recommended alternative
  // to a route-watching effect — it re-renders before anything is painted.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    if (mobileNavOpen) setMobileNavOpen(false);
  }

  const setSidebarExpanded = useCallback((expanded: boolean) => {
    window.localStorage.setItem(SIDEBAR_STORAGE_KEY, String(expanded));
    // `storage` only fires in *other* tabs, so notify this one explicitly.
    storeListeners.forEach((listener) => listener());
  }, []);

  return (
    <LayoutContext.Provider
      value={{ sidebarExpanded, setSidebarExpanded, mobileNavOpen, setMobileNavOpen }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}
