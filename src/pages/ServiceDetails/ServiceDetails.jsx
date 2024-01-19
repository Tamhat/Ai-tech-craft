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

const ServiceDetails = () => {
  return (
    <div className="about__page">
      <ServiceDetailsC title={'sad'} description1={'sadsad'} description2={'sadsadasdasd'} imgsrc={'https://i.ibb.co/S5r62dg/poster-for-channel-telegrams-on-the-topic-of-AI-s.jpg'} />
      <section>
        <div className="container ourmission__container snd">
          <div className="mission__left img">
            <img src="https://i.ibb.co/4tCMFmh/illuminated-thought-process.jpg" alt="" />
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
      <section>
        <div className="container marketing__container ">
          <div className="mTeam__left">
            <h1 className="heading">Architects of Intelligent Solutions  : Your AI Development Allies</h1>
            <p className="card__des">Driven by a passion for excellence, we strive to be at the forefront of AI development, fostering a culture of creativity, collaboration, and continuous learning</p>
            <p className="card__des">With a focus on ethical AI practices, transparency, and sustainability, we aim to build trust with our clients and partners. Through a commitment to responsible development, we seek to address challenges and opportunities with integrity, ensuring that our AI solutions contribute positively to the global community.</p>
          </div>
          <div className="mTeam__right img">
            <img src="https://i.ibb.co/2vM5Q3N/3d-Sign-Detailed-TEXT-AIA-fully-transparent-wi.jpg" alt="" />
          </div>
        </div>
      </section>
      {/* <LeadershipTeam /> */}
      <JoinOurTeam />
      {/* <LiveRules /> */}
      <RequestSubmit />
    </div>
  )
}

export default ServiceDetails;