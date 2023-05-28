import Faq from '../components/Accordian/Faq';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Sponsers from '../components/Spnonsers/Sponsers';
import Carousal from "../components/Carousal/Carousal"

const Home = () =>{
    return (
     <>
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <Sponsers/>
      <Carousal/>
      <Faq/>
     </>
    );
}

export default Home