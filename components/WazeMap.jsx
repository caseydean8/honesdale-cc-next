import React from "react";

const WazeMap = () => {
  return (
    <div className="waze-map">
      <iframe
        title="Honesdale Community Church"
        src="https://embed.waze.com/iframe?zoom=16&lat=41.576614&lon=-75.256569&ct=livemap&pin=1"
        width="100%"
        height="450"
        className="rounded"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WazeMap;
