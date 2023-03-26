import React from "react";
import "./Spinner.css";

export default function Spinner() {
    return(
        <div>
            {/* get a loading icon like div */}
            <div className="custom-loader"></div>
            <h1>Loading</h1>
        </div>
    )
}