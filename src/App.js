
import { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Result from './resultComponent';

function App() {
  const dispatch = useDispatch();
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleNum1 = (e) => {
    const value = e.target.value;
    if(!isNaN(value)) {
      setNum1(Number(value));
      dispatch({type: 'num1', payload: Number(value)});
    }
  }

  const handleNum2 = (e) => {
    const value = e.target.value;
    if(!isNaN(value)) {
      setNum2(Number(value));
      dispatch({type: 'num2', payload: Number(value)});
    }
  }

  const handleAdd = () => {
    const r = num1  + num2;
    dispatch({type: 'result', payload: r});
  }

  return (
    <div className="App">
    <Result/>
    {/* <div>
      {`The sum of ${num1} & ${num2} is ${result}`}
    </div> */}
      <input placeholder='Enter Number 1' onChange={handleNum1}/>
      <input placeholder='Enter Number 2' onChange={handleNum2} />
      <div >
        <button onClick={handleAdd} >Add</button>
      </div>
    </div>
  );
}

export default App;
