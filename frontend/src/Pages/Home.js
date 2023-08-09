import Faq from '../components/Accordian/Faq';
import Hero from '../components/Hero/Hero';
import Sponsers from '../components/Spnonsers/Sponsers';
import Carousal from "../components/Carousal/Carousal"
import MultipleItems from '../components/DiscCarausel/DiscCarousel'
import img from "../assests/Screenshot (106).png"
import Vip from '../components/vip/Vip';
import HomeCarsousal from '../components/HomeCarausal/HomeCarusal';

const Home = () =>{
    return (
     <div>
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <Sponsers/>
      <Carousal/>
      <HomeCarsousal/>
      <Faq/>
      <img src={img} className='poster-image' alt="homeimage"/>
      <Vip/>
      <MultipleItems/>
    </div>
    );
}

export default Home