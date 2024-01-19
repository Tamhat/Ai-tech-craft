import React from 'react'
import { ServiceDetailsData } from '../../data/data'
import './ServiceDetailsC.css'
import { useParams } from 'react-router-dom'

const ServiceDetailsC = ({ title, description1, description2, imgsrc }) => {

  const pageId = useParams()
  return (
    <div>
      <div className="container heroAbout__container service-details">
        {ServiceDetailsData.map((item, index) => {
          if (item.id == pageId.id) {
            return (
              <React.Fragment key={index}>
                <div className="heroAbout__right details-right">
                  <h1 className="heading">
                    {item.title}
                  </h1>

                  <div className="heroAbout__des">
                    <p className="card__des">{item.description1}</p>
                    <p className="card__des">{item.description2}</p>
                  </div>

                  <a href="#" className='btn'>Get a Demo</a>
                </div>
                <div className="heroAbout__left">
                  <img src={item.img} alt="Logo" style={{ height: '52rem', width: 'auto', borderRadius: '31px' }} />
                </div>
              </React.Fragment>
            )
          }
        })}
      </div>

    </div>
  )
}

export default ServiceDetailsC



