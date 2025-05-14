import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Save the current scroll position for the previous page
    const previousPath = sessionStorage.getItem("currentPath");
    if (previousPath) {
      sessionStorage.setItem(`scrollPosition-${previousPath}`, window.scrollY);
    }

    // Scroll to the saved position for the current page or reset to the top
    const savedPosition = sessionStorage.getItem(`scrollPosition-${pathname}`);
    window.scrollTo(0, savedPosition ? parseInt(savedPosition, 10) : 0);

    // Update the current path in sessionStorage
    sessionStorage.setItem("currentPath", pathname);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
