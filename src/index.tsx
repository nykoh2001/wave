import React from "react";
import ReactDOM from "react-dom/client";
import MovingWave from "./Pages/MovingWave";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <MovingWave />
  </React.StrictMode>
);

reportWebVitals();
