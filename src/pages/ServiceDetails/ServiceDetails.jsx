import React from 'react'
import HeroAbout from "../../component/AboutComponents/HeroAbout/HeroAbout";
import OurMission from "../../component/AboutComponents/OurMission/OurMission";
import MarketingTeam from "../../component/AboutComponents/MarketingTeam/MarketingTeam";
import LeadershipTeam from "../../component/AboutComponents/LeadershipTeam/LeadershipTeam";
import JoinOurTeam from "../../component/AboutComponents/JoinOurTeam/JoinOurTeam";
import LiveRules from "../../component/AboutComponents/LiveRules/LiveRules";
import RequestSubmit from "../../shared/RequestSubmit/RequestSubmit";
import ServiceDetailsC from '../../component/ServiceDetailsC/ServiceDetailsC';
import './ServiceDetails.css';
import { ServiceDetailsData } from '../../data/data'
import { useParams } from 'react-router-dom';

const ServiceDetails = ({ title, description1, description2, imgsrc }) => {

  const pageId = useParams()
  return (
    <div className="about__page">
      <ServiceDetailsC title={'sad'} description1={'sadsad'} description2={'sadsadasdasd'} imgsrc={'https://i.ibb.co/S5r62dg/poster-for-channel-telegrams-on-the-topic-of-AI-s.jpg'} />


      {ServiceDetailsData.map((item, index) => {
        if (item.id == pageId.id) {
          return (
            <React.Fragment key={index}>
              {item.component}
            </React.Fragment>
          )
        }
      })}

      {/* <LeadershipTeam /> */}
      {/* <JoinOurTeam /> */}
      {/* <LiveRules /> */}
      <RequestSubmit />
    </div>
  )
}

export default ServiceDetails;