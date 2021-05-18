import Home from '../Home/Home';
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
import Popup from './../Popup/Popup';
import { useState } from 'react';

function App() {

    const [showForm, setShowForm] = useState(false);
    overflowBody(showForm);
    return (
        <div className="App">
            {/* <Header setShowForm={setShowForm} /> */}
            <Home setShowForm={setShowForm} />
            <Tuition />
            <Teachers />
            <InsideClass />
            <ButtonApply text="Apply Now" />
            <About />
            <Reviews />
            <Contact setShowForm={setShowForm} />
            <Founder />
            <Footer />
            {showForm ? <Popup setShowForm={setShowForm} /> : null}
        </div>
    );
}

function overflowBody(showForm) {
    if (showForm) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = null;
    }
}

export default App;
