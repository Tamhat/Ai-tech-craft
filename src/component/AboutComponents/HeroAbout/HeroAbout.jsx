import Logo from '../../../assets/heroImage1.jpg'

import './HeroAbout.css'

const HeroAbout = () => {
  return (
    <div className="heroAbout__bg">
        <div className="container heroAbout__container">
        <div className="heroAbout__left">
            <img src={Logo} alt="Logo" />
        </div>
        <div className="heroAbout__right">
            <h1 className="heading">
            Guiding Businesses on the proven path to success
            </h1>

            <div className="heroAbout__des">
                <p className="card__des">Welcome to Ai Tech Craft, where innovation meets craftsmanship in the realm of AI technology, web development, and app creation. We are a dynamic team of passionate technologists, dedicated to transforming ideas into intelligent solutions that redefine possibilities.</p>
            </div>

            <a href="#" className='btn'>Get a Demo</a>
        </div>
    </div>
    </div>
  )
}

export default HeroAbout