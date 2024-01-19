
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
            <h1 className="heading">Help Small & Mid-Sized Businesses Grow Beyond What They Thought Possible</h1>

            <div className="mission__des">
              <p className="card__des">At Ai Tech Craft, our mission is to revolutionize the landscape of artificial intelligence applications by leveraging cutting-edge technology to solve real-world problems. We are committed to pushing the boundaries of innovation, creating intelligent solutions that enhance efficiency, improve user experiences, and drive positive societal impact.

              </p>
              {/* <p className="card__des">The end result? Big corporations continue to grow and maximize profits while smaller businesses struggle to retain and grow their market share. We’re not like that.</p> */}
              <p className="card__des">Join us on this journey as we shape the future of AI, one innovative application at a time. At Ai Tech Craft, we don't just develop AI — we create intelligent solutions that make a difference.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default OurMission