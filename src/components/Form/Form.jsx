// components/Form/Form.js
import styles from './Form.module.scss';
import Button from '../Button/Button';
import React from 'react';
import { useForm } from '../../hooks/AddUser';

export default function Form() {
    const { formData, handleChange, handleSubmit } = useForm();

    return (
        <div className={styles.formSection}>
            <div className="container">
                <div className={styles.formSection__size}>
                    <div className={styles.formSection__text}>
                        <h3 className={styles.formtion__title}>Contact us</h3>
                        <h1 className={styles.formtion__subtitle}>Let’s Start a Conversation</h1>
                        <p className={styles.formSection__info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input 
                            className={styles.form__input} 
                            name='userName' 
                            type="text" 
                            placeholder='Full Name' 
                            value={formData.userName} 
                            onChange={handleChange} 
                        />
                        <input 
                            className={styles.form__input} 
                            name='userMail' 
                            type="email" 
                            placeholder='Email' 
                            value={formData.userMail} 
                            onChange={handleChange} 
                        />
                        <input 
                            className={styles.form__input} 
                            name='userMessage' 
                            type="text" 
                            placeholder='Message' 
                            value={formData.userMessage} 
                            onChange={handleChange} 
                        />
                        <Button colorScheme='orange' sizeOfButton='100'>
                            send a message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
