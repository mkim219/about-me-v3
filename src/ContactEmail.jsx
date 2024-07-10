import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactEmail = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'message') setMessage(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            message
        };
        emailjs.send(
            process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_PUBLIC_KEY
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');

            emailjs.send(
                process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
                process.env.REACT_APP_AUTO_REPLY,
                { name, email },
                process.env.REACT_APP_PUBLIC_KEY
            ).then((response) => {
                console.log('Auto-reply SUCCESS!', response.status, response.text);
            }).catch((err) => {
                console.log('Auto-reply FAILED...', err);
            });

            setName('');
            setEmail('');
            setMessage('');
        }).catch((err) => {
            console.log('FAILED...', err);
            alert('Failed to send the message, please try again.');
        });
    };

    return (
        <div className="container my-4" id="contact">
            <div className="row d-flex justify-content-center">
                <h1 className="d-flex justify-content-center title-h1">Contact</h1>
                <div className="col-12 col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                value={message}
                                onChange={handleChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-secondary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactEmail;