import { useState } from 'react'
import { leaderShipData, boardMember } from '../../../data/data'
import LCard from '../../../helper/LCard/LCard'
import './LeadershipTeam.css'

const LeadershipTeam = () => {
  const [buttonActive, setButtonActive] = useState(false);

  const leadershipResult = leaderShipData?.map((curElem) => <LCard {...curElem} key={curElem.id} />);
  const BoardMemberResult = boardMember?.map((curElem) => <LCard {...curElem} key={curElem.id} />);


  return (
    <section>
      <div className="container leadershipteam__container">
        <h1 className="heading">Meet Your Dream Team at AI Tech Craft!</h1>
        <p className="card__des1">At AI Tech Craft, you gain access to a dream team of experts across a wide array of disciplines—AI development, software engineering, web development, and digital marketing. Our team members bring years of deep expertise in their respective fields, enriched by diverse cultural backgrounds and unique life experiences. This rich mosaic of perspectives allows us to deliver innovative and effective solutions tailored to each new project, ensuring that your business benefits from both creativity and precision.
        </p>

        <div className="LST__button">
          <button
            className={`LST__btn ${buttonActive ? "" : "active"}`}
            onClick={() => setButtonActive(false)}
          >
            Leadership
          </button>
          <button
            className={`LST__btn ${buttonActive ? "active" : ""}`}
            onClick={() => setButtonActive(true)}
          >
            Board Members
          </button>
        </div>

        <div className="tCard__data">
          {
            buttonActive ? BoardMemberResult : leadershipResult
          }
        </div>
      </div>
    </section>
  );
}

export default LeadershipTeam