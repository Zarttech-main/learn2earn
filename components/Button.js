import React from 'react'

import styles from '../styles/Common.module.css'

const Button = ({ onClick, title, style, disabled }) => {
    const disabledButton = disabled ? "disabled" : ""
    return (
        <button {...disabledButton} className={`${styles.button} ${style} ${disabled && styles.disabled}`} onClick={onClick}>{title}</button>
    )
}

export default Button;