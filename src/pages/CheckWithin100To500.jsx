import React from "react";
import { useState } from "react";

function CheckWithin100To500() {
  const [input, setInput] = useState("");

  const checkNumber = () => {
    // Check if letter or null
    if (isNaN(input) || !input) {
      return "Please enter a number";
    }
    
    /* My work 
    else if (input < 100 || input > 500) {
        return "false";
    } else {
        return "true";
    }
    */

    // let isWithin = "false";
    // for (let i = 100; i <= 500; i ++) {
    //     if (i === parseInt(input)) {
    //         isWithin = "true";
    //     }
    // }

    // let isWithin = "false";
    // if (100 <= parseInt(input) && parseInt(input) <= 500) {
    //     isWithin = "true";
    // }

    return `${100 <= parseInt(input) && parseInt(input) <= 500}`
    
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">
          <input
            type="text"
            className="w-100 lead"
            placeholder="Input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <textarea
            className="text-primary"
            name="text"
            id="text"
            cols="30"
            rows="10"
            readOnly={true}
            placeholder="Output"
            value={checkNumber(input)}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckWithin100To500;
