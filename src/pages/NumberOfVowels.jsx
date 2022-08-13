import React from "react";
import { useState } from "react";

function NumberOfVowels() {
  const [input, setInput] = useState("");

  const getTheNumberOFVowels = (vowel) => {
    let total = 0;

    // input.split("").map((data) => {
    //   if (
    //     character.toLowerCase() === "a" ||
    //     character.toLowerCase() === "e" ||
    //     character.toLowerCase() === "i" ||
    //     character.toLowerCase() === "o" ||
    //     character.toLowerCase() === "u"
    //   ) {
    //     total = total + 1;
    //   }
    // });

    input.split("").forEach((character) => {
      if (character.toLowerCase().match(/[a,e,i,o,u]/)) {
        total = total + 1;
      }
    });

    return total;
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
        <h1 className="col-12 w-100 text-primary">{getTheNumberOFVowels()}</h1>
      </div>
    </div>
  );
}

export default NumberOfVowels;
