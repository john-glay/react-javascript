import React from "react";
import { useState } from "react";

function Triangle() {
  const [input, setInput] = useState("");

  const generateIsoscelesTriangle = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return (
        <h1 className="col-12 w-100 text-primary">Please enter a number</h1>
      );
    }

    // input 3
    let total = "";
    // total = " *  * *"
    const rightTriangle = [];
    //triangle = [" *", " * *", " * * *"]
    for (let i = 1; i <= input; i++) {
        total = total.concat(" *");
        rightTriangle.push(total);
    }

    // const reverseRightTriangle = rightTriangle.slice().reverse().slice(1);
    const fullTriangle = [].concat(rightTriangle, rightTriangle.slice().reverse().slice(1));

    return fullTriangle.map((data) => (
        <h1 className="col-12 w-100 text-primary">{data}</h1>
    ));
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 w-50 pb-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="input"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </div>
        {generateIsoscelesTriangle()}
      </div>
    </div>
  );
}

export default Triangle;
