import React, { useContext } from 'react';
import { CounterContext } from './context';

const Counter = () => {
    const [state, dispatch] = useContext(CounterContext)
    
    return (
        <div>
            <h2>Count{state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>Count</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    )
}

export default Counter;