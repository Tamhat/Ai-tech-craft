import { heroCardData } from "../../data/data";
import AILogo from "../../assets/heroImage1.jpg";
import Circle from "../../assets/circle.png";
import { GoTrophy } from "react-icons/go";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero__bg">
      <div className="container hero__container ">
        {/* =======hero left section========== */}
        <div className="hero__left">
          <h1 className="hero__heading">
            <h3>AI Tech Crafts - Pioneering Your Digital Future</h3>
            </h1>
          <p className="hero__text text-[2px]">
          Elevate your business with AI Tech Craft, your full-service partner in AI, web development, and digital marketing. We harness the power of advanced AI and innovative digital strategies to create solutions that drive results. From crafting responsive websites to deploying cutting-edge AI applications and executing impactful digital marketing campaigns, our expertise is your advantage. Let's build the future together.
            </p>
          <div className="hero__btn">
            <button className="btn">Get Started</button>
            <button>Learn More</button>
          </div>

          <div className="hero__card-container text-">
            <h5>Our Services: </h5>
            <div className="hero__card">
              {heroCardData &&
                heroCardData?.map(({ id, icon, firstTitle, lastTitle }) => {
                  return (
                    <div className="card" key={id}>
                      <span>{icon}</span>
                      <div className="card__text">
                        <h4>{firstTitle}</h4>
                        <h4>{lastTitle}</h4>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* =========hero right section========= */}
        <div className="hero__right">
          <div className="bg__img">
            <img src={AILogo} alt="Circle" />
          </div>
          <div className="circle__bg"></div>
          <div className="circle__bg2"></div>
          <div className="prize">
            <div className="icon">
              <GoTrophy />
            </div>
            <div className="content">
              <h1>35k+</h1>
              <p>Case Solved</p>
              <p>with Satisfaction</p>
            </div>
          </div>
          
          <div className="round__circle">
            <div className="circle__bg3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
