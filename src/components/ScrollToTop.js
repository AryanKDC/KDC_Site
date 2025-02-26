import React from "react";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,  
    threshold: 200,  
  });
 
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        size="medium"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 16,  
          right: 16,   
          zIndex: 1000, 
          backgroundColor: "#C8102E",
          color: "white",
          "&:hover": { backgroundColor: "#b30000" }, // Darker red on hover
          "&:active": { backgroundColor: "#C8102E" }, // Prevent color change on click
          "&:focus": { backgroundColor: "#C8102E" }, // Prevent color change after click
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
