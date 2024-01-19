import Heading from "../../helper/Heading/Heading";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { servicesData } from "../../data/data";
import "../OurServices/OurServices.css";

const Service = () => {
  return (
    <section>
      <Heading icon={<MdOutlineMiscellaneousServices />} title="our services" />

      <div className="container services__container">
        {servicesData &&
          servicesData?.map(({ id, icon, title, des }) => {
            return (
              <div className="services__card" key={id}>
                <a href={`/services/service-details/${id}`} className="service-details link">
                  <div className="services__icon">{icon}</div>
                  <div className="card__title">{title}</div>
                  <h5 className="card__des">{des}</h5>
                </a>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Service;