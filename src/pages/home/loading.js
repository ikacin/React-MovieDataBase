import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
    return (
      <div className={"loader-wrap"}>
          <span className="loader"></span>
      </div>

    );
}