import React from "react";
import { useState } from "react";

function GetTheLargest() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");

  const getTheLargestNumber = () => {
    // Not working
    // if (
    //   parseFloat(firstInput) > parseFloat(secondInput) &&
    //   parseFloat(firstInput) > parseFloat(thirdInput)
    // ) {
    //   return firstInput;
    // } else if (
    //   parseFloat(secondInput) > parseFloat(thirdInput) &&
    //   parseFloat(secondInput) > parseFloat(firstInput)
    // ) {
    //   return secondInput;
    // } else {
    //   return thirdInput;
    // }

    return Math.max(firstInput, secondInput, thirdInput);
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 w-50 pb-5">
          <input
            type="text"
            className="col-4 lead"
            placeholder="input"
            value={firstInput}
            onChange={(event) => {
              setFirstInput(event.target.value);
            }}
          />
          <input
            type="text"
            className="col-4 lead"
            placeholder="input"
            value={secondInput}
            onChange={(event) => {
              setSecondInput(event.target.value);
            }}
          />
          <input
            type="text"
            className="col-4 lead"
            placeholder="input"
            value={thirdInput}
            onChange={(event) => {
              setThirdInput(event.target.value);
            }}
          />
        </div>
        <h1 className="col-12 w-100 text-primary">{getTheLargestNumber()}</h1>
      </div>
    </div>
  );
}

export default GetTheLargest;
