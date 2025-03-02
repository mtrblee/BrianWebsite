import About from "./personal/About";
import Hero from "./personal/Hero";
import * as React from "react";
import "../../styles/index.css";
import "../../styles/homePage.scss";

function homePageDashboard() {
    return (
        <div>
            <header className="bg-header-bg w-full mx-auto px-4 md:px-20 fixed top-0 z-50 ">
            </header>
            <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
                <Hero />
                <About />
            </main>
        </div>
    );
}
/*export const homePageDashboard = (): JSX.Element => {
    return (
        <React.Fragment>
            <div className="text-center">
                <h1 className="display-4">HomePage</h1>
                <p>Learn about Brian Lee Life</p>
            <img src="images/driver_mystery.png" alt="image" width="150" height="200"/>
            </div>
        </React.Fragment>
    );
};*/

export default homePageDashboard;