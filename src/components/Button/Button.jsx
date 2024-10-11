import styles from './Button.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Button({ children, colorScheme, onClick, sizeOfButton, variant, isDisabled, leftIcon, rightIcon }) {
    const renderIcon = (icon) => {
        if (icon === 'string') {
            switch (icon) {
                case 'settings':
                    return <FontAwesomeIcon icon={faCog} />;
                case 'email':
                    return <FontAwesomeIcon icon={faEnvelope} />;
                case 'phone':
                    return <FontAwesomeIcon icon={faPhone} />;
                default:
                    return null;
            }
        }
        return icon;
    };

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
            {leftIcon && <span className={styles.icon}>{renderIcon(leftIcon)}</span>}
            {children}
            {rightIcon && <span className={styles.icon}>{renderIcon(rightIcon)}</span>}
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
    leftIcon: PropTypes.string,  
    rightIcon: PropTypes.string, 
};

Button.defaultProps = {
    onClick: () => {},
    sizeOfButton: 'md',
    variant: 'default',
    isDisabled: false,
    leftIcon: null,  
    rightIcon: null, 
};
