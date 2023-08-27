import { Fragment } from "react";

function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="base-circle" cx={50} cy={50} r={45}></circle>
        <circle
          className="dynamic-circle"
          cx={50}
          cy={50}
          r={45}
          strokeDasharray="300"
          strokeDashoffset={300 - 92 * progress}
        ></circle>
        <circle
          className="dashes"
          cx={50}
          cy={50}
          r={45}
          strokeDasharray="5 26"
          stroke="white"
          strokeWidth="9px"
        ></circle>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {progress ? (
          <Fragment>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </Fragment>
        ) : (
          <line x1="5" y1="14" x2="20" y2="14" />
        )}
      </svg>
    </div>
  );
}

export default ProgressBar;
