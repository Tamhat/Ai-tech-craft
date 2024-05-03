import Heading from "../../helper/Heading/Heading";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { servicesData } from "../../data/data";
import "../OurServices/OurServices.css";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section>
      <Heading icon={<MdOutlineMiscellaneousServices />} title="our services" />

      <div className="container services__container">
        {servicesData &&
          servicesData?.map(({ id, icon, title, des, link }) => {
            return (
              <div className="services__card" key={id}>
                <Link to={`/services/service-details/${id}/${link}`} className="service-details link">
                  <div className="services__icon">{icon}</div>
                  <div className="card__title">{title}</div>
                  <h5 className="card__des">{des}</h5>
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Service;