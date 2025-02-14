import * as React from "react";
import { createRoot } from "react-dom/client";
import InfoPageDashboard from "../components/InfoPageDashboard";

const container = document.getElementById("infoPage");
const root = createRoot(container);
root.render(
    <InfoPageDashboard />
);