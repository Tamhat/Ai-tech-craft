// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { marketingAgencyData } from "../../data/data";
import MarketingAgencyCard from "../../shared/MarketingAgencyCard/MarketingAgencyCard";

import "./MarketingAgency.css";

const MarketingAgency = () => {
  return (
    <section>
      <div className="container mAgency__container">
        <div className="mAgency__left">
          <h1 className="heading">
            Why AI Tech Craft is Your Ideal Partner for Digital Transformation
          </h1>
          <div className="plan">
            <p className="card__des">
            Experience Comprehensive Digital Excellence with AI Tech Craft
            </p>
            <p className="card__des">
              AI Tech Craft stands out as your premier choice for integrating
              AI, web development, and digital marketing solutions. Our unique
              approach guarantees your success through a few key principles:
            </p>

            <ul>
              <li className="card__des">
              Strategic Planning: We commit to new projects only with a robust, results-oriented plan in place.

              </li>
              <li className="card__des">
              Data-Driven Analysis: Our team meticulously analyzes your data to tailor our AI and web solutions, ensuring they perfectly align with your growth objectives.
              </li>
              <li className="card__des">
              Guaranteed Results: Unlike other agencies, we stand behind our promise to deliver measurable outcomes.
              </li>
              <li className="card__des">
              Long-Term Partnership: Consider us your ally in navigating the complexities of digital transformation, committed to your long-term success through innovative strategies and cutting-edge technology.
              </li>
            </ul>
          </div>

          <div className="mAgency__details">
            <div className="mAgency__card">
              <h1 className="heading">12+</h1>
              <p className="card__title">YEARS IN BUSINESS</p>
            </div>
            <div className="mAgency__card">
              <h1 className="heading">15+</h1>
              <p className="card__title">TEAM MEMBERS</p>
            </div>
            <div className="mAgency__card">
              <h1 className="heading">300+</h1>
              <p className="card__title">DESIGN AND MARKETING PROJECTS</p>
            </div>
          </div>
        </div>

        <div className="mAgency__right">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {marketingAgencyData &&
              marketingAgencyData?.map((curElem) => {
                return (
                  <SwiperSlide key={curElem.id}>
                    <MarketingAgencyCard {...curElem} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MarketingAgency;
