import React from "react";
import './Button.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--small','btn--medium', 'btn--large', 'btn-none'];

export const ButtonLogin = ({children, type, onClick, buttonSize, buttonStyle}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: STYLES[0];

    return (
            <Link to='/login' className="btn-login">
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link> 
    )
}