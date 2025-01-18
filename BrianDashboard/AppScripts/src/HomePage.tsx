import * as React from "react";
import { createRoot } from "react-dom/client";
import HomePageDashboard from "./components/homePageDashboard";

const container = document.getElementById("homePage");
const root = createRoot(container);
root.render(
    <HomePageDashboard />
);
