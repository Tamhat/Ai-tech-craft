import React from 'react'
import Heading from '../helper/Heading/Heading';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { DigitalMarketting1, servicesData } from '../data/data';

const DigitalMarketting = () => {
    return (
        <div>
            <section>
                <div className="container ourmission__container snd">
                    <div className="mission__left img">
                        <img src="https://i.ibb.co/4tCMFmh/illuminated-thought-process.jpg" alt="" />
                    </div>
                    <div className="mission__right">
                        <h1 className="card__title">Help Small & Mid-Sized Businesses Grow Beyond What They Thought Possible </h1>
                        <h1 className="heading">Why Marketing is Essential for Your Business</h1>

                        <div className="mission__des">
                            <p className="card__des">Digital marketing is pivotal in driving your business growth by enhancing visibility and attracting more qualified leads. At AI Tech Craft, we focus on increasing the flow of high-quality leads and sales, boosting your brand awareness across current and potential customers, and strengthening brand loyalty. Whether you're looking to elevate an already successful enterprise or jump-start a struggling business, our comprehensive marketing services are designed to achieve your goals and ensure lasting financial health.

                            </p>
                            {/* <p className="card__des">Join us on this journey as we shape the future of AI, one innovative application at a time. At Ai Tech Craft, we don't just develop AI — we create intelligent solutions that make a difference.</p> */}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container marketing__container ">
                    <div className="mTeam__left">
                        <h1 className="heading">Tailored Omni-Channel Marketing Strategies</h1>
                        <p className="card__des">At AI Tech Craft, we delve deep into understanding your specific business needs, employing a holistic omni-channel approach to digital marketing. By optimizing your marketing strategy, we enhance your online presence through responsive web development and  design and dynamic marketing campaigns that captivate new customers and boost sales. Our team is dedicated to elevating your brand visibility, ensuring your business is discovered first—before the competition. Let’s start a conversation and ignite your business's full potential.</p>
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
                        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Why-get-certified-in-Artificial-Intelligence.jpg" alt="" />
                    </div>
                    <div className="mission__right">
                        {/* <h1 className="card__title">Help Small & Mid-Sized Businesses Grow Beyond What They Thought Possible </h1> */}
                        <h1 className="heading">Our  Digital Marketing Services</h1>

                        <div className="mission__des">
                            <h3 className='card__title'>Drive Growth and Increase Revenue with AI Tech Craft
                            </h3>
                            <p className="card__des">
                                At AI Tech Craft, we offer a broad spectrum of digital marketing services designed to significantly expand your client base and enhance your revenue. Our approach encompasses every facet of marketing, ensuring that your business not only grows online but also secures a substantial increase in revenue. From strategic planning to execution, our team is committed to delivering measurable results and ensuring the long-term success of your online presence.
                            </p>
                            {/* <p className="card__des">Join us on this journey as we shape the future of AI, one innovative application at a time. At Ai Tech Craft, we don't just develop AI — we create intelligent solutions that make a difference.</p> */}
                        </div>
                    </div>
                </div>
            </section>

            <section>
      <Heading icon={<MdOutlineMiscellaneousServices />} title="our services" />

      <div className="container services__container1">
        {DigitalMarketting1 &&
          DigitalMarketting1?.map(({ id, icon, title, des }) => {
              return (
                <div className="services__card" key={id}>
                  <div className="services__icon">{icon}</div>
                      <div className="card__title">{title}</div>
                      <h5 className="card__des">{ des }</h5>
                </div>
              );
          })}
      </div>
    </section>
        </div>
    )
}

export default DigitalMarketting