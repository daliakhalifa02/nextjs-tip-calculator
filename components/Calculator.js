import React, { useState } from 'react';
import Form from './Form';

const Calculator = () => {
    const [state, setState] = useState({
        billAmount: 0,
        tipPercentage: 0,
        nbOfPeople: 0,
    });
    
    const updateValues = (newState) => {
        setState({
            ...state,
            ...newState,
        })
    }
    return (
       <div>
            <Form state={state} updateValues={updateValues} />
       </div> 
    );
};

export default Calculator;