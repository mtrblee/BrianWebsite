import * as React from "react";
import { createRoot } from "react-dom/client";
import ContactPageDashboard from "./components/contactPageDashboard";

const container = document.getElementById("contactPage");
const root = createRoot(container);
root.render(
    <ContactPageDashboard />
);