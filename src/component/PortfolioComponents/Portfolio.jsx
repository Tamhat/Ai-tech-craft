import { useState } from 'react'
import { portfolioData } from '../../data/data'
import { IoMdClose } from "react-icons/io";
import "../../helper/LCard/LCard.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { projectData } from "../../data/data";
import ClientSuccessCard from "../../shared/ClientSuccessCard/ClientSuccessCard";

import "./portfolio.css";

const Portfolio = () => {


  const [buttonActive, setButtonActive] = useState(false);
  // const { name, profile, title, description, linkedIn, twitter } = props;
  const [readBio, setReadBio] = useState(false);

  const handleBio = () => {
    setReadBio(true);
  };


  return (

    <>
      <section>
        <div className="container cS__container">
          <h1 className="text-7xl font-bold text-center">Our Portfolio</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"

            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {projectData &&
              projectData?.map((curElem) => {
                return (
                  <SwiperSlide key={curElem.id}>
                    <ClientSuccessCard {...curElem} />
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
      </section>
   
    </>

  );
};

export default Portfolio;














// const Portfoliosec = () => {


//     return (
//
//     )
// }

// export default Portfoliosec