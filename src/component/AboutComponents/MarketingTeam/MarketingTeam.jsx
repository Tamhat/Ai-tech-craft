
import './MarketingTeam.css'

const MarketingTeam = () => {
  return (
    <section>
        <div className="container marketing__container">
        <div className="mTeam__left">
            <h1 className="heading">Your External Team for Internal Success</h1>
            {/* <p className="card__des">Driven by a passion for excellence, we strive to be at the forefront of AI development, fostering a culture of creativity, collaboration, and continuous learning</p> */}
            <p className="card__des">At AI Tech Craft, we understand that small and mid-sized businesses often don't have the resources to sustain a full-scale internal marketing department. That's why we offer comprehensive services in AI development, web design and development, digital marketing, and custom software solutions—all at a fraction of the cost of in-house teams. With us, you gain access to dedicated experts in SEO, PPC, content strategy, and more, all coordinated by an account manager committed to expanding your business.</p>
          </div>
        <div className="mTeam__right">
            <img src="https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/06/IMG_3003-1-1-1024x719.jpg.webp" alt="" />
        </div>
        </div>
    </section>
  )
}

export default MarketingTeam