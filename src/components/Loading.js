import React from "react";
import ProgressBar from "./ProgressBar/progressBar";

function Loading() {
  return (
    <div className="d-flex vh-100  justify-content-center align-items-center">
      <div className="">
        <div className="text-center m-2">
          <img src="/icon.svg" className="m-2" width="40" alt="" />
          <h3>
            <span className="text-primary">Chat</span>Gepeteco
          </h3>
        </div>
        <ProgressBar></ProgressBar>
      </div>
    </div>
  );
}

export default Loading;
