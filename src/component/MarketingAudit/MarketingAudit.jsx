
import './MarketingAudit.css'

const MarketingAudit = () => {
  return (
    <section className='mAudit__bg'>
        <div className="container mAudit__container">
            <div className="mAudit__left">
                <h1 className="heading">Get a Complimentary Marketing Audit</h1>

                <div>
                    <p className="card__des">Enhance your marketing strategy with a complimentary audit from AI Tech Craft. Our team of experts, skilled in managing numerous successful campaigns, will help increase your qualified leads, phone calls, traffic, and crucially—revenue. Begin with a no-cost digital strategy proposal and gain invaluable insights through:
</p>


                    <ul>
                        <li className='card__des'>Website review focusing on content and conversion rate optimization (CRO)
</li>
                        <li className='card__des'>Detailed SEO Audit with a 20-point performance check</li>
                        <li className='card__des'>Tailored digital marketing strategy to maximize your results</li>
                    </ul>
                </div>

                <div className="btn">REQUEST FREE AUDIT</div>
            </div>

            <div className="mAudit__right">
                <img src="https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/Free-audit-request.-1.jpg.webp" alt="" />
            </div>
        </div>
    </section>
  )
}

export default MarketingAudit