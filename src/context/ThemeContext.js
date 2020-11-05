import React, { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const counterReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ONE":
            return state + 1;
        case "MINUS_ONE":
            return state - 1
        default:
            return state;
    }
};

const ThemeContextProvider = (props) => {

    const [counter, dispatch] = useReducer(counterReducer, 0);

    return (
        <ThemeContext.Provider value={{ counter, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;