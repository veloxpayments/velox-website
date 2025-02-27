import Services from "@/components/services";
import SendMoney from "@/components/send-money";
import Hero from "@/components/hero";
import GetStarted from "@/components/get-started";
import FAQSection from "@/components/faq";
import Reviews from "@/components/review";

const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Services />
      <SendMoney />
      <Reviews/>
      <GetStarted />
      <FAQSection/>
      
    </main>
  );
};

export default Home;
