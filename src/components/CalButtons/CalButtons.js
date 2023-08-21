import React, { useState } from 'react'
import './CalButton.css'

const CalButtons = ({ keys, getExpression, onSubmit, resZero }) => {

    const [expression, setExpression] = useState('');

    const getClickBtn = (key) => {
        if (key !== 'C' && key !== '=') {
            setExpression(expression + key)
        }
        if (key === 'C') {
            setExpression('');
            resZero();
        }
        if (key === '=') {
            onSubmit();
        }
    }

    getExpression(expression)

    const renderedKeys = keys.flat().map((key) => {
        return <button key={key}
            className={
                key === '0' ? 'zero normal' : 'normal' && key === 'C' ? 'clear normal' : 'normal' && key === '=' ? 'equal normal' : 'normal' && key === '/' || key === '*' || key === '+' || key === '-' ? 'operation normal' : 'normal' && key === '(' || key === ')' ? 'braces normal' : 'normal'
            }
            onClick={() => getClickBtn(key)}
        >
            {key}
        </button>
    })
    return (
        <div className='cal-btn-container'>
            {renderedKeys}
        </div>
    )
}

export default CalButtons
