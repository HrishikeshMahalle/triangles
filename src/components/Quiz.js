import React, { useState } from 'react';
import questions from '../questions';

const Quiz = () => {
    const [ text, setText ] = useState('');
    const [ arr, setArr ] = useState(['scalene', 'equilateral', '35sqcm', 'scalene', 'scalene', 'scalene', 'scalene', 'area', 'altitude', '3']);

    const turn = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };

    const ans = ['equilateral', 'both', '35sqcm', 'obtuse', 'acute', 'isosceles', 'right', 'perimeter', 'hypotenuse', '5'];

    let score = 0;

    const handleChange = (e) => {
        let x = arr;
        x[turn[e.target.id]] = e.target.value;
        setArr(arr => ([...x]));
    }

    const handleSubmit = (e) => {
        let result = 0;
        let x = document.querySelectorAll('select');
        for(let i = 0; i < 10; i++) {
            if(arr[i] === ans[i]) {
                x[i].className = 'correct';
                result += 1;
            } else {
                x[i].className = 'incorrect';
            }
        }
        score = result;
        setText(`Your score is ${score} out of 10`);
    }

    return (
        <div className="quiz" id="quiz">
            <div className='container'>
                <h1>Exactly how much do know about triangles ?</h1>
                <p>Get set go ...</p>
                    {
                        questions.map(question => {
                            return <div key={question.id} className="questions">
                                <label className="question">{question.question}</label>
                                    <select id={question.id} value={arr[turn[question.id]]} onChange={handleChange}>
                                        <option value={question.answers[0]}>{question.answers[0]}</option>
                                        <option value={question.answers[1]}>{question.answers[1]}</option>
                                        <option value={question.answers[2]}>{question.answers[2]}</option>
                                        <option value={question.answers[3]}>{question.answers[3]}</option>
                                    </select>
                            </div>
                        })
                    }
                    <button onClick={handleSubmit}>Submit</button>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Quiz;
