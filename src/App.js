import { useState } from 'react';
import './App.css';
import CalButtons from './components/CalButtons/CalButtons';
import Expression from './components/InputOutput/Expression';

function App() {
  let [expression, setExpression] = useState('');
  const [result, setResult] = useState();
  const [bgColor, setBgColor] = useState('black');
  const [color, setColor] = useState('white')


  const keys = [
    ['C', '(', ')', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]


  const evaluate = () => {
    const lastIndex = expression.slice(-1);
    if (lastIndex !== '+' && lastIndex !== '-' && lastIndex !== '*' && lastIndex !== '/' && lastIndex !== '(')
      setResult(eval(expression));
    // console.log('hello')

    // console.log(Math.parse(expression))
  }
  const getExpression = (resExpression) => {
    // alert('hi')
    setExpression(resExpression);
  }

  const resZero = () => {
    setResult();
  }

  const goToDarkMode = () => {
    const checkBox = document.getElementById('flexSwitchCheckChecked')
    if (checkBox.checked) {
      setBgColor('white');
      setColor('black');
    }
    else {
      setColor('white');
      setBgColor('black');
    }
  }

  return (
    <>
      <div className='App' style={{ backgroundColor: bgColor, color: color }}>
        <div className="toggle-mode" onClick={goToDarkMode}>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            <label class="form-check-label" for="flexSwitchCheckChecked">Light Mode</label>
          </div>
        </div>
        <div className="calculator flex-box">
          <div className="res-b">
            <Expression expression={expression} />
            <div className='result' style={{ backgroundColor: bgColor, color: color }}>{result}</div>
          </div>
          <CalButtons onSubmit={evaluate} resZero={resZero} keys={keys} getExpression={getExpression} />
        </div>
      </div>
    </>
  );
}

export default App;
