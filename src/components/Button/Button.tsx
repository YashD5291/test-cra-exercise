import React, { FC } from "react"
import styles from "./Button.module.scss"
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    icon?: React.ReactNode;
    variant?: 'primary-filled' | 'primary-light' | 'primary-outlined'
    size?: 'sm' | 'md' | 'lg',
    styleOverrides?: {
        btnLabelWrap: string;
    }
}

const Button: FC<ButtonProps> = ({ label, icon, variant = 'primary-filled', size = 'sm', styleOverrides, ...props }) => {
    return (
        <button className={clsx(styles.button, styles[variant], styles[size])} {...props} type="button">
            <span className={clsx(styles.btnLabelWrap, styleOverrides?.btnLabelWrap)}>
                {icon && icon}
                <b className={styles.btnLabel}>{label}</b>
            </span>
        </button>
    );
}

export default Button;