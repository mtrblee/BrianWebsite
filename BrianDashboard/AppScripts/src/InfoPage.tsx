import * as React from "react";
import { createRoot } from "react-dom/client";
import InfoPageDashboard from "./components/infoPageDashboard";

const container = document.getElementById("infoPage");
const root = createRoot(container);
root.render(
    <InfoPageDashboard />
);