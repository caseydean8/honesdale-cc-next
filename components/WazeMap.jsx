import React from "react";

const WazeMap = () => {
  return (
    <div>
      <iframe
        title="Honesdale Community Church"
        src="https://embed.waze.com/iframe?zoom=16&lat=41.576614&lon=-75.256569&ct=livemap&pin=1"
        width="100%"
        height="450"
        allowFullScreen
      ></iframe>
      <div className="matthew-18-20 p-3">
        <p>
          For where two or three have gathered together in My name, I am there
          in their midst.<br></br>
          Matthew 18:20
        </p>
      </div>
    </div>
  );
};

export default WazeMap;
