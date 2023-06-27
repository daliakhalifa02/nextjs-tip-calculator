import React, { useState } from 'react';
import Form from './Form';

const Calculator = () => {
    const [state, setState] = useState({
        totalPerPerson : 0,
        nbOfPeople : 0,
        billAmount : 0,
        tipPerPerson : 0
    });
    
    const updateValues = (newState) => {
        console.log('Updating state with:', newState);
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