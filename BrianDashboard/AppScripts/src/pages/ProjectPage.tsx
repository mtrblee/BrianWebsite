import * as React from "react";
import { createRoot } from "react-dom/client";
import ProjectPageDashboard from "../components/ProjectPageDashboard";

const container = document.getElementById("projectPage");
const root = createRoot(container);
root.render(
    <ProjectPageDashboard />
);