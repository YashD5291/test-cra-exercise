import React, { FC } from "react"
import styles from "./TextInput.module.scss"
import clsx from 'clsx';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    styleOverrides?: {
        textInputWrap: string;
    }
}

const TextInput: FC<TextInputProps> = ({ label, className, styleOverrides, id = "input-default", ...inputAttrs }) => {
    return (
        <div className={clsx(styles.textInputWrap, styleOverrides?.textInputWrap)}>
            {label && <label className={styles.label} htmlFor={id}>
                {label}
            </label>}
            <input
                className={clsx(styles.textInput, className)}
                id={id}
                type="text"
                {...inputAttrs}
            />
        </div>
    );
}

export default TextInput;
