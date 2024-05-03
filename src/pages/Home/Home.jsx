import HeroSection from "../../component/HeroSection/HeroSection";
import OurServices from "../../component/OurServices/OurServices";
import ValuableClient from "../../component/ValuableClient/ValuableClient";
import ReviewSlider from "../../component/ReviewSlider/ReviewSlider";
import BannerVideo from "../../component/BannerVideo/BannerVideo";
import OurPromise from "../../component/OurPromise/OurPromise";
import DigitalMarketing from "../../component/DigitalMarketing/DigitalMarketing";
import SeoServices from "../../component/SeoServices/SeoServices";
import PPCServices from "../../component/PPCServices/PPCServices";
import MarketingBenefit from "../../component/MarketingBenefit/MarketingBenefit";
import CSuccessSlider from "../../component/CSuccessSlider/CSuccessSlider";
import MarketingAudit from "../../component/MarketingAudit/MarketingAudit";
import MarketingAgency from "../../component/MarketingAgency/MarketingAgency";
import Faq from "../../shared/Faq/Faq";
import { faqData } from "../../data/data";
import RequestSubmit from "../../shared/RequestSubmit/RequestSubmit";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ValuableClient />
      {/* <ReviewSlider /> */}
      <BannerVideo />
      <OurPromise /><SeoServices
        main={webMainImage}
        top={webTopImage}
        bottom={webBottomImage}
        title={webTitle}
        des={webDescription}
      />
      <DigitalMarketing />
      <SeoServices
        main={main}
        top={top}
        bottom={bottom}
        title={title}
        des={des}
      />
      <PPCServices />
      
      <MarketingBenefit />
      <CSuccessSlider />
      <MarketingAudit />
      <MarketingAgency />
      <Faq data={faqData} />
      <RequestSubmit />

      {/* <OurServices /> */}
    </div>
  );
};

export default Home;

// ----------seo services===========
const title = "Enhance Your Visibility with Expert SEO Services";
const des =
  "Elevate your brand to the top of search engine results with AI Tech Craft's expert SEO services. Recognizing that a significant portion of online users rely on search engines to find products and services, our approach is designed to maximize your visibility and capture that audience. Our extensive experience has generated substantial revenue for our clients by deploying tailored SEO strategies that are not only effective but also measurable. We are committed to excellence, ensuring our strategies yield top rankings and enhanced online presence. ";

const main =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/shutterstock_1520228513-1.jpg.webp";
const top =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/google_search.png.webp";
const bottom =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/table_with_results.png.webp";

// -------------web design------------
const webTitle =
  "Innovative Web Solutions Tailored for Success";
const webDescription =
  "Transform your online presence with AI Tech Craft, where we create more than just websites—we build your digital gateway to the world. Our bespoke web and web app development services are designed to make your brand stand out, showcasing your unique offerings and compelling visitors to engage. With a focus on aesthetic design and functional excellence, our solutions ensure your site not only attracts attention but also effectively converts visitors into loyal customers. Start your journey to a compelling online presence that drives results.";

const webMainImage =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/Mask-group-1.jpg.webp";

const webTopImage =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/pencil.png.webp";

const webBottomImage =
  "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/code_editor.png.webp";
