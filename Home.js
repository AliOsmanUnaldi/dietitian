import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
                <button className='btn'><Link to="/contact">Yeni yaşam tarzına ilk adım</Link></button>
            </div>
        </div>
    )
}

export default Home;