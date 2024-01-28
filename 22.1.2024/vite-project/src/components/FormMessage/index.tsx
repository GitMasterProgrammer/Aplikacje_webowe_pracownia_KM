import React, { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
    email: string;
    topic: string;
    agree: boolean;
    message: string;
}

const errors =  {
    email: "",
    topic: "",
    agree: "",
    message: "",
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        topic: '',
        agree: false,
        message: '',
    });


    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value } as FormData);
        validateField(e.target.name, e.target.value);
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked } as FormData);

        validateField(e.target.name, e.target.checked);
    };


    const isValidEmail = (email: string): boolean => {
        if(email.length === 0) return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let hasErrors = false;
        for (const [key, value] of Object.entries(formData)) {
            validateField(key, value);
        }

        Object.keys(errors).forEach(key => {
            // @ts-ignore
            if (errors[key] !== ''){
                hasErrors = true;
            }
        });
        console.log(errors);

        if (!hasErrors) {
            handleFormSubmit();
        } else {
            console.log('Formularz zawiera błędy:', errors);
        }
    };

    const validateField = (fieldName: string, value: string | boolean) => {
        let errorMessage = '';

        switch (fieldName) {
            case 'email':
                if(!isValidEmail(value.toString())){
                    errorMessage = 'Incorrect email input'
                }
                break;
            case 'topic':
                if(value.toString() == ""){
                    errorMessage = 'Please select topic'
                }
                break;
            case 'agree':
                if(!value){
                    errorMessage = 'You must agree to process your personal data'
                }
                break;
            case 'message':
                if(value.toString().length < 20){
                    errorMessage = 'Message must be at least 20 characters long'
                }
                break;
            default:
                alert("Giga niga cos nie dziala")
                break;
        }

        // @ts-ignore
        errors[fieldName] = errorMessage;
    };

    const handleFormSubmit = () => {
        console.log('Wysłano formularz:', formData);

        console.log('Your message has been sent');

        setFormData({
            email: '',
            topic: '',
            agree: false,
            message: '',
        });

        setIsFormSubmitted(true);

    };


    return isFormSubmitted ? (
            <h1>Formularz został wysłany</h1>
        ) : (
        <div>
            <h1>Strona Kontaktowa</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                    <span className="error">{errors.email}</span>
                </div>
                <div>
                    <label>Topic:</label>
                    <select name="topic" value={formData.topic} onChange={handleInputChange}>
                        <option value="">Select topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing</option>
                        <option value="other">Other</option>
                    </select>
                    <span className="error">{errors.topic}</span>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="agree" checked={formData.agree} onChange={handleCheckboxChange} />
                        I agree to process my personal data
                    </label>
                    <span className="error">{errors.agree}</span>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange}></textarea>
                    <span className="error">{errors.message}</span>
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
