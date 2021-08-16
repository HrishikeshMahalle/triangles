import React, { useState } from 'react';

const Hypotenuse = () => {
    const [ text, setText ] = useState('');
    const [ sideOne, setSideOne ] = useState(0);
    const [ sideTwo, setSideTwo ] = useState(0);

    const handleBase = (e) => {
        setSideOne(e.target.value);
    }

    const handleHeight = (e) => {
        setSideTwo(e.target.value);
    }

    const handleClick = () => {
        if(sideOne <= 0 || sideTwo <= 0) {
            setText('Please provide valid inputs');
        } else {
            setText(`Hypotenuse is: ${Math.sqrt(Number(sideOne)*Number(sideOne) + Number(sideTwo)*Number(sideTwo))}`);
        }
    }

    return (
        <div className="hypotenuse" id="hypotenuse">
            <div className='container'>
                <h1>Calculate hypotenuse using other two sides</h1>
                <p>(Hypotenuse)<sup>2</sup> = (Side One)<sup>2</sup> + (Side Two)<sup>2</sup></p>
                <div className="inputs">
                    <label>Side One: </label>
                    <input type='number' min='0' onChange={handleBase} value={sideOne} />
                    <label>Side Two: </label>
                    <input type='number' min='0' onChange={handleHeight} value={sideTwo} />
                </div>
                <button onClick={handleClick}>Calculate</button>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Hypotenuse;
