import './ClientSuccessCard.css'

const ClientSuccessCard = ({ img, rate, category, categoryTitle }) => {
    return (
        <div className="cS__card">
            <div className="cs__top">
                <img src={img} alt="" />
                <div className="rate__container text-center grid place-items`-center grid-flow-col">
                    <div className="rate__box text-center">
                        <h1 className="text-2xl font-bold text-center">{rate.percent1}</h1>
                        <p className="text-2xl font-bold text-center">{rate.title1}</p>
                    </div>
                    <div className="rate__box text-center">
                        <h1 className="text-2xl font-bold text-center">{rate.percent2}</h1>
                        <p className="text-2xl font-bold text-center">{rate.title2}</p>
                    </div>
                    <div className="rate__box text-center">
                        <h1 className="text-2xl font-bold text-center">{rate.percent3}</h1>
                        <p className="text-2xl font-bold text-center">{rate.title3}</p>
                    </div>
                </div>
            </div>
            <div className="cs__bottom">
                <h3 className="card__title">{category}</h3>
                <h1 className="heading">{categoryTitle}</h1>
            </div>
        </div>
    )
}

export default ClientSuccessCard;