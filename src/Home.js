import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Hayatınızın kontrolünü elinize alın</h1>
                <p>Diyetisyen ile görüşmek için zaman bulmak zor olabileceğini anlıyoruz.
                     İlk sağlık değerlendirmenizi sanal ortamda gerçekleştirebilir, 
                     böylece uzman bir diyetisyenden klinik değerlendirmeyi kendi evinizin rahatlığında alabilirsiniz.
                      Bugün sanal danışmanlık randevunuzu talep edin.
                </p>
                <button className='btn'>
                    <Link to="/dietitian/contact">Yeni yaşam tarzına ilk adım</Link>
                </button>
                <div className='social-icons'>
                    <a href="mailto:dyt.emintatlilioglu@gmail.com " aria-label="Email">
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

export default Home;