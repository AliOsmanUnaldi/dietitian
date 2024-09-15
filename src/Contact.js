import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Form Data:', formData);
        setSubmitted(true); 
    };

    return (
        <div className="contact-form-container">
            {submitted ? (
                <p>Thank you for your message! We will get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                    <h2>Sağlıklı hayatının ilk adımını at</h2>
                        <label htmlFor="name">Ad Soyad:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mesaj:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                        ></textarea>
                    </div>
                    <button className="contact-btn" type="submit">Send</button>
                </form>
            )}
        </div>
    );
}

export default Contact;
