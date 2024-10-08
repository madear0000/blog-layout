import styles from './Button.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function Button({ children, colorScheme, onClick, sizeOfButton }) {
    return (
        <button 
            className={clsx(
                styles.baseButton, 
                colorScheme && styles[`baseButton--${colorScheme}`], 
                sizeOfButton && styles[`baseButton--${sizeOfButton}`] 
            )}
            onClick={onClick}

        >
            {children}
        </button>
    );
}

Button.PropTypes = {
    children: PropTypes.node,
    colorScheme: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    width: PropTypes.string.isRequired
}
