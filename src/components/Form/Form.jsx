import styles from './Form.module.scss';
import Button from '../Button/Button';
import React from 'react';
import { useForm } from "react-hook-form";

export default function Form() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={styles.formSection}>
            <div className="container">
                <div className={styles.formSection__size}>
                    <div className={styles.formSection__text}>
                        <h3 className={styles.formtion__title}>Contact us</h3>
                        <h1 className={styles.formtion__subtitle}>Let’s Start a Conversation</h1>
                        <p className={styles.formSection__info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <input 
                            className={styles.form__input} 
                            name='userName' 
                            type="text" 
                            placeholder='Full Nam' 
                            {...(register('name'), {required: true})}
                            
                        />
                        <input 
                            className={styles.form__input} 
                            name='userMail' 
                            type="email" 
                            placeholder='Email'
                            {...(register('mail'), {required: true})}
                        />
                        <input 
                            className={styles.form__input} 
                            name='userMessage' 
                            type="text" 
                            placeholder='Message'
                            {...(register('text'), {required: true})}
                        />
                        <Button 
                            colorScheme='primary' 
                            sizeOfButton='xs'
                            variant='link'
                            >
                            send a message
                        </Button> <br />
                        <Button 
                            colorScheme='danger' 
                            sizeOfButton='sm'
                            variant='ghost'
                            >
                            send a message
                        </Button> <br />
                        <Button 
                            colorScheme='primary' 
                            sizeOfButton='md'
                            variant='outline'
                            isDisabled
                            >
                            send a message
                        </Button> <br />
                        <Button 
                            colorScheme='whiteAlpha' 
                            sizeOfButton='lg'
                            >
                            send a message
                        </Button> <br />
                    </form>
                </div>
            </div>
        </div>
    );
}
