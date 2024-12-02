import styles from "./InputComponent.module.css"

function InputComponent({ title, onChangeHandler }) {

    return (<>
        <div className={styles.inputContainer}>
            <p>{title}:</p>
            <input type='number' onChange={(e) => onChangeHandler(e.target.value)}></input>
        </div>
    </>)
}

export default InputComponent;