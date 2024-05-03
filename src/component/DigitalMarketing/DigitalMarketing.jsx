import "./DigitalMarketing.css";

const DigitalMarketing = () => {
  return (
    <section>
      <div className="container dMarketing__container">
        <div className="dM__box__top">
          <h1 className="heading">
            Your Premier Partner in Digital Marketting
          </h1>

          <p className="card__des">
          At AI Tech Craft, we combine over a decade of expertise with innovative strategies to serve as your comprehensive digital marketing partner. Our team has successfully guided hundreds of businesses across the nation to achieve remarkable growth and enhanced revenue. We specialize in creating customized digital marketing solutions that not only meet your unique needs but also exceed your expectations in driving successful outcomes.
          </p>
        </div>

        <div className="dM__box">
          <div className="dMarketing__left">
            <h1 className="heading">
              Dive Growth with strategic digital marketting
            </h1>
            <p className="card__des">
            Maximize your online impact with our strategic digital marketing services. Our expert team excels in SEO, Facebook Ads, and Google Ads, each crafted to enhance your visibility and drive traffic. Through precise targeting and data-driven strategies, we ensure your campaigns are optimized for the highest conversions, helping you achieve a substantial ROI. Dive into the digital marketing landscape with us and watch your business flourish as we turn insights into action and potential customers into actual revenue. 
            </p>
          </div>
          <div className="dMarketing__right">
            <div className="dM__main">
              <img
                src="https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/shutterstock_521785930-1-1-906x1024.jpg.webp"
                alt=""
              />
            </div>

            <div className="mD__top">
              <img
                src="https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/small_reviews.png.webp"
                alt=""
              />
            </div>

            <div className="dM__right">
              <img
                src="https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/cart.png.webp"
                alt=""
              />
            </div>

            <div className="dM__left">
              <img
                src="https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/wave_with_percent.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
