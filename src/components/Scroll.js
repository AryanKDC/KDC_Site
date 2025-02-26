import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scroll = () => {
  const { pathname } = useLocation(); // Get current route path

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
  }, [pathname]); // Run effect when the pathname changes

  return null; // No UI needed
};

export default Scroll;
