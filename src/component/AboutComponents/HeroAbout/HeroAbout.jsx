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
            Guiding Businesses on the Proven Path to Success
            </h1>

            <div className="heroAbout__des">
                <p className="card__des">At AI Tech Craft, we empower businesses with a suite of comprehensive services tailored for success. From advanced AI development to strategic web and app creation, from transformative digital marketing strategies to robust software development—each offering is designed to propel your business forward. Partner with us to leverage cutting-edge technology and innovative solutions that pave your way to achieving and surpassing your business goals.</p>
            </div>

            <a href="#" className='btn'>Get a Demo</a>
        </div>
    </div>
    </div>
  )
}

export default HeroAbout