import React from 'react';
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-form-container">
            <div className="info">
                <p>Sosyal medyadan veya mailden şimdi iletişime geçin.</p>
                <div className="social-icons">
                    <a href="mailto:aliunaldizcb@gmail.com" aria-label="Email">
                        <FaEnvelope size={24} />
                    </a>
                    <a href="https://wa.me/+905546529862" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={24} />
                    </a>
                    <a href="https://www.instagram.com/eminhealth" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
