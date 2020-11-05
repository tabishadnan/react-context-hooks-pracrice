import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Counter = () => {

    const {counter, dispatch} = useContext(ThemeContext);

    return ( 
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={() => dispatch({type: "ADD_ONE"})} >Add One</button>
            <button onClick={() => dispatch({type: "MINUS_ONE"})} >Minus One</button>
        </div>
     );
}
 
export default Counter;