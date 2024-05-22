
import './OurMission.css'

const OurMission = () => {
  return (
    <section>
        <div className="container ourmission__container">
            <div className="mission__left">
                <img src="https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/06/IMG_2920-1-1.jpg.webp" alt="" />
            </div>
            <div className="mission__right">
            <h1 className="card__title">OUR MISSION</h1>
            <h1 className="heading">Empowering Small and Mid-Sized Businesses to Reach New Heights</h1>

            <div className="mission__des">
              <p className="card__des">We are committed to propelling small and mid-sized businesses to levels of success they never thought possible. While many agencies prioritize large corporations, we focus on the true backbone of the economy—smaller enterprises. Our suite of services, including AI development, customized web solutions, digital marketing, and bespoke software development, is specially designed to help these businesses expand their market share and thrive in competitive environments. Every day, our motivation is fueled by the real impact our solutions have on these vital organizations and their communities.

              </p>
              {/* <p className="card__des">The end result? Big corporations continue to grow and maximize profits while smaller businesses struggle to retain and grow their market share. We’re not like that.</p> */}
              {/* <p className="card__des">Join us on this journey as we shape the future of AI, one innovative application at a time. At Ai Tech Craft, we don't just develop AI — we create intelligent solutions that make a difference.</p> */}
            </div>
          </div>
        </div>
    </section>
  )
}

export default OurMission