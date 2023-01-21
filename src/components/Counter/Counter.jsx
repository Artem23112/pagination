import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);

    function decrement() {
        setNumber(number - 1);
    }

    function increment() {
        setNumber(number + 1);
    }

    return (
        <div className="counter">
            <p className="counter-number">{number}</p>
            <button className="counter-bth coutert-bth-decrement" onClick={() => {decrement()}}>-</button>
            <button className="counter-bth coutert-bth-increment" onClick={() => (increment())}>+</button>
        </div>
    )
}

export default Counter;