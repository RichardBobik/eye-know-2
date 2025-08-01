import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./container/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
