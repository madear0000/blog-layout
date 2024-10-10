import styles from './Button.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function Button({ children, colorScheme, onClick, sizeOfButton, variant, isDisabled }) {
    return (
        <button
            className={clsx(
                styles.baseButton, 
                colorScheme && styles[`baseButton--${colorScheme}`], 
                sizeOfButton && styles[`baseButton--${sizeOfButton}`],
                variant && styles[`baseButton--${variant}`],
            )}
            onClick={!isDisabled ? onClick : undefined} 
            disabled={isDisabled} 
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    colorScheme: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    sizeOfButton: PropTypes.string,
    variant: PropTypes.string,
    isDisabled: PropTypes.bool, 
};

Button.defaultProps = {
    onClick: () => {},
    sizeOfButton: 'md', 
    variant: 'default', 
    isDisabled: false, 
};