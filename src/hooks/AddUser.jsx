import { useState } from 'react';

export const useForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userMail: '',
        userMessage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const addUser = () => {
        console.log(formData);
    };

    const validationNotPass = () => {
        alert("Введите все поля");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { userName, userMail, userMessage } = formData;

        if (userMail && userMessage && userName) {
            addUser();
        } else {
            validationNotPass();
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit
    };
};
