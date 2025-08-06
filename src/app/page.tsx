// import Services from "../components/services";
import SendMoney from "../components/send-money";
import Hero from "../components/hero";
// import GetStarted from "../components/get-started";
import FAQSection from "../components/faq";
// import Reviews from "../components/review";
import Testimonial from "../components/testimonial";
import Howitworks from "../components/howitworks";
import FeatureSection from "../components/feature";
const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      {/* <Services /> */}
      <Howitworks />
      <SendMoney />
      {/* <Reviews /> */}
      <FeatureSection />
      <Testimonial />
      {/* <GetStarted /> */}
      <FAQSection />
    </main>
  );
};

export default Home;

