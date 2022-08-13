import React from "react";
import { useState } from "react";

function NumberRightTriangle() {
  const [input, setInput] = useState("");

  const generateNumberRightTriangle = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
        return <h1 className="col-12 w-100 text-primary">Please enter a number</h1>;
    } 

    // input 3
    let total = "";
    // total = " *  * *"
    const triangle = [];
    //triangle = [" *", " * *", " * * *"]
    for (let i = 1; i <= input; i++) {
        total = total.concat(" ", i);
        triangle.push(total);
    }

    return triangle.map((data) => (
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
        {generateNumberRightTriangle()}
      </div>
    </div>
  );
}

export default NumberRightTriangle;
