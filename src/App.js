import React from 'react';
import './App.css';
import {CounterContextProvider} from './context';
import Counter from './counter'; 

const App = () => {
  return (
    <CounterContextProvider>
    <Counter />
    </CounterContextProvider>
  )
}

export default App;