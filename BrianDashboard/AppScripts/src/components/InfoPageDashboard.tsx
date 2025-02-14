import * as React from "react"

export const infoPageDashboard = (): JSX.Element => {
    return (
        <React.Fragment>
            <div className="text-center">
                <h1 className="display-4">InfoPage</h1>
                <p>Learn about Brian InfoPage</p>
                <img src="images/driver_mystery.png" alt="image" width="150" height="200" />
            </div>
        </React.Fragment>
    );
};

export default infoPageDashboard;