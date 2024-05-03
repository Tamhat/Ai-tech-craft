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
            <h1 className="card__title">Help Small & Mid-Sized Businesses Grow Beyond What They Thought Possible </h1>
            <h1 className="heading">Explore Cutting-Edge Generative AI </h1>

            <div className="mission__des">
              <p className="card__des">AI Tech Craft is at the forefront of Generative AI technology, crafting solutions that drive innovation in brand recognition, data analysis, and business intelligence. Our expertise spans advanced models like GPT-4, GPT-3, and GPT-3.5, as well as visual content powerhouses Midjourney and DALL-E. We harness these technologies to provide you with robust tools for visualization and strategic insights, ensuring your business stays ahead in a rapidly evolving digital landscape.
              </p>
              {/* <p className="card__des">Join us on this journey as we shape the future of AI, one innovative application at a time. At Ai Tech Craft, we don't just develop AI — we create intelligent solutions that make a difference.</p> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container marketing__container ">
          <div className="mTeam__left">
            <h1 className="heading">Elevate Customer Engagement with Smart AI Assistants and Chatbots</h1>
            <p className="card__des">We excel in creating AI-powered conversational agents that streamline customer interactions and enhance user experiences. Our bespoke chatbots are seamlessly integrated across platforms, websites, and applications, ensuring they become a natural extension of your customer service team. As leaders in AI solutions, we provide smart assistants tailored to meet the specific needs of your business, driving efficiency and satisfaction in every interaction.</p>
            {/* <p className="card__des">With a focus on ethical AI practices, transparency, and sustainability, we aim to build trust with our clients and partners. Through a commitment to responsible development, we seek to address challenges and opportunities with integrity, ensuring that our AI solutions contribute positively to the global community.</p> */}
          </div>
          <div className="mTeam__right img">
            <img src="https://i.ibb.co/2vM5Q3N/3d-Sign-Detailed-TEXT-AIA-fully-transparent-wi.jpg" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container ourmission__container snd">
          <div className="mission__left img">
            <img src="https://i.ibb.co/4tCMFmh/illuminated-thought-process.jpg" alt="" />
          </div>
          <div className="mission__right">
            <h1 className="card__title">Help Small & Mid-Sized Businesses Grow Beyond What They Thought Possible </h1>
            <h1 className="heading">Innovate and Scale with Custom AI Product Development</h1>

            <div className="mission__des">
              <p className="card__des">At AI Tech Craft, we're at the cutting edge of AI product development, utilizing advanced algorithms and innovative techniques to deliver solutions that not only innovate but also enhance operational efficiency. Our expertise ranges from building recommendation engines and natural language processing apps to developing sophisticated predictive analysis tools. Our AI solutions are designed to be user-friendly, scalable, reliable, and perfectly integrated with your existing systems, ensuring seamless functionality and continued growth.

              </p>
              {/* <p className="card__des">Join us on this journey as we shape the future of AI, one innovative application at a time. At Ai Tech Craft, we don't just develop AI — we create intelligent solutions that make a difference.</p> */}
            </div>
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