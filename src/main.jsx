import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./components/routers/AppRouter";
import "./components/Styling/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
