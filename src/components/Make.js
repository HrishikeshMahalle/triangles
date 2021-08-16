import React, { useState } from "react";

const Make = () => {
  const [text, setText] = useState("");
  const [texty, setTexty] = useState("");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const handleA = (e) => {
    setA(e.target.value);
  };

  const handleB = (e) => {
    setB(e.target.value);
  };

  const handleC = (e) => {
    setC(e.target.value);
  };

  const handleClick = () => {
    if (a <= 0 || b <= 0 || c <= 0) {
      setText("Please provide valid inputs");
    } else if (
      Number(a) + Number(b) + Number(c) < 180 ||
      Number(a) + Number(b) + Number(c) > 180
    ) {
      setText("Sorry these angles cannot form a triangle");
    } else if (Number(a) + Number(b) + Number(c) === 180) {
      setText("Yes ofcourse, this set of angles form a triangle");
      setTexty(
        "Any set of three angles that add upto 180 degrees can form a triangle except for zeros"
      );
    }
  };

  return (
    <div className="make" id="make">
      <div className="container">
        <h1>What angles (in degrees) form a triangle?</h1>
        <p>Well then time to find out.</p>
        <div className="inputs">
          <input type="number" min="0" onChange={handleA} value={a} />
          <input type="number" min="0" onChange={handleB} value={b} />
          <input type="number" min="0" onChange={handleC} value={c} />
        </div>
        <button onClick={handleClick}>Check</button>
        <p>{text}</p>
        <p>{texty}</p>
      </div>
    </div>
  );
};

export default Make;
