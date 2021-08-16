import React, { useState } from 'react';

const Areas = () => {
    const [ text, setText ] = useState('');
    const [ base, setBase ] = useState(0);
    const [ height, setHeight ] = useState(0);

    const handleBase = (e) => {
        setBase(e.target.value);
    }

    const handleHeight = (e) => {
        setHeight(e.target.value);
    }

    const handleClick = () => {
        if(base <= 0 || height <= 0) {
            setText('Please provide valid inputs');
        } else {
            setText(`Resultant Area is: ${(1/2)*Number(base)*Number(height)}`);
        }
    }

    return (
        <div className="areas" id="areas">
            <div className='container'>
                <h1>Calculate area of a triangle</h1>
                <p>Area = 1/2 * base * height</p>
                <div className="inputs">
                    <label>Base: </label>
                    <input type='number' min='0' onChange={handleBase} value={base} />
                    <label>Height: </label>
                    <input type='number' min='0' onChange={handleHeight} value={height} />
                </div>
                <button onClick={handleClick}>Calculate</button>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Areas;
