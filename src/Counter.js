import { useState } from "react";
import styles from "./Counter.module.css"

function Counter({ ...props }) {
    const { limitValue, maxValue, minValue } = { ...props };

    let [counter, setCounter] = useState(0);
    let [isOver, setIsOver] = useState(false);

    const isOverSetter = (actualCounter) => {
        if (actualCounter > limitValue) {
            setIsOver(true)
        }
        else {
            setIsOver(false);
        }
    }

    const increment = () => {
        const newValue = counter + 1;
        setCounter(newValue);
        isOverSetter(newValue);
    }

    const decrement = () => {
        const newValue = counter - 1;
        setCounter(newValue);
        isOverSetter(newValue);
    }

    return (<>
        <p>
            Valeur du compteur {counter} et valeur de la limitValue {limitValue}
        </p>
        <div className={styles.buttonContainer}>
            <button disabled={counter >= maxValue} onClick={increment}>Increment Counter</button>
            <button disabled={counter <= minValue} onClick={decrement}>Decrement Counter</button>
        </div>

        {
            counter !== Number(limitValue) && <>
                {
                    isOver ? <p>
                        Mon compteur est au dessus de {limitValue} et sa valeur est {counter}
                    </p> : <p>Mon compteur est inférieur à {limitValue}</p>
                }
            </>
        }
    </>);
}

export default Counter;