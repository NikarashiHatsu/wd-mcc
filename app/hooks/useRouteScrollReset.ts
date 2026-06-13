import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router";
import type Lenis from "lenis";
import { refreshScrollTriggers, scrollToTop } from "./useLenis";

export function useRouteScrollReset(lenisRef: React.RefObject<Lenis | null>) {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    scrollToTop(lenisRef);
    refreshScrollTriggers();

    const timer = window.setTimeout(refreshScrollTriggers, 450);
    return () => window.clearTimeout(timer);
  }, [location.pathname, lenisRef]);
}
