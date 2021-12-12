import React from "react";
import HashLoader from "react-spinners/HashLoader";

import "./Loading.css";

function Loading({ isLoading, loadingText }) {
  return (
    <div id="loadingScr">
      <HashLoader
        speedMultiplier={2}
        loading={isLoading}
        color="#ffc107"
        size={50}
      />
      <div id="loadingText">
        <h6 className="text-center text-warning mt-3">{loadingText}</h6>
      </div>
    </div>
  );
}

export default Loading;
