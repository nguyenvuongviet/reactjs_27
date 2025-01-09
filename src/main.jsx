// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import "flowbite/dist/flowbite.min.js";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
);
