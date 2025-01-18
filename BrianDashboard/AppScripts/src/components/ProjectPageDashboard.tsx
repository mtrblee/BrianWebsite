import * as React from "react"

export const projectPageDashboard = (): JSX.Element => {
    return (
        <React.Fragment>
            <div className="text-center">
                <h1 className="display-4">ProjectPage</h1>
                <p>Learn about Brian Project</p>
                <img src="images/driver_mystery.png" alt="image" width="150" height="200" />
            </div>
        </React.Fragment>
    );
};

export default projectPageDashboard;