import React from "react/";

export const Toggle = () => {
  return (
    <div className="switchButton">
      <input className="switchButton-checkbox" type="checkbox"></input>
      <label className="switchButton-label" htmlFor="">
        <span className="switchButton-label-span">Photo</span>
      </label>
    </div>
  );
};
