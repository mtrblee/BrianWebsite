import * as React from "react";
import { createRoot } from "react-dom/client";
import HomePageDashboard from "../components/HomePageDashboard";

const container = document.getElementById("homePage");
const root = createRoot(container);
root.render(
    <HomePageDashboard />
);
