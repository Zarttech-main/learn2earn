import React from 'react'

import styles from '../styles/Common.module.css'

const Button = ({ onClick, title, style }) => {
    return (
        <button className={`${styles.button} ${style}`} onClick={onClick}>{title}</button>
    )
}

export default Button;