import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar.jsx";
import Imagetext from "./utils/Imagetext.jsx";
import Imagedesign from "./utils/Imagedesign.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    <Imagetext />
    <Imagedesign />
  </StrictMode>
);
