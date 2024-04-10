// useCounter.js
import { useState } from "react";

export const useCounter = (value = 10) => {
    const [counter, setCounter] = useState(value);
    
    const increment = () => {
        setCounter(counter + 1);
    }

    const discrement = () => { // Elimina el parámetro i
       
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(value);
    }

    return {
        counter,
        setCounter,
        increment,
        discrement,
        reset
    };
}
