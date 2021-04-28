import Header from '../Header';
import VideoSection from '../VideoSection/VideoSection';
import Tuition from './../Tuition/Tuition';
import InsideClass from '../InsideClass/InsideClass';
import About from '../About/About';
import Teachers from './../Teachers/Teachers';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';
import Founder from '../Founder/Founder';
import Footer from '../Footer';
import ButtonApply from '../button-apply';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <VideoSection />
      <Tuition />
      <Teachers />
      <InsideClass />
      <ButtonApply text="Apply Now" />
      <About />
      <Reviews />
      <Contact />
      <Founder />
      <Footer />
    </div>
  );
}

export default App;
