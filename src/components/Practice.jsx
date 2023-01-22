import React, { useReducer } from 'react';

const Practice = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'remove':
                return state - 1;
            default: state;
        }
    }
    const [val, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>
                <h1>Counter = {val}</h1>
                <button type="button" onClick={() => dispatch("add")}>Increment</button>
                <button type="button" onClick={() => dispatch("remove")}>Decrement</button>
            </div>
        </>
    )
}

export default Practice
