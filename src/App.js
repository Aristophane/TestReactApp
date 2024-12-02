import './App.css';
import Title from './Title';
import Counter from './Counter';
import { useState } from 'react';
import CounterContainer from './CounterContainer';
import InputComponent from './InputComponent';

function App() {
  const [limitValue, setLimitValue] = useState(5);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);

  const appInfo = {
    appName: 'mon app',
    message: 'Mon compteur'
  }

  const counterConstants = {
    limitValue: limitValue,
    maxValue: maxValue,
    minValue: minValue
  }

  return (
    <div className="App">
      <Title myMessage={appInfo.message}></Title>
      <div className='inputComponentsContainer'>
        <InputComponent title='Limit Value' onChangeHandler={setLimitValue} />
        <InputComponent title='Min Value' onChangeHandler={setMinValue} />
        <InputComponent title='Max Value' onChangeHandler={setMaxValue} />
      </div>
      <CounterContainer>
        <Counter {...counterConstants} />
      </CounterContainer>
    </div>
  );
}

export default App;
