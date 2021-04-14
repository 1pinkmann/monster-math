import Header from '../Header';
import Block2 from '../block-2';
import Block3 from '../block-3';
import Block4 from '../block-4';
import Block5 from '../block-5';
import Block6 from '../block-6';
import Block7 from '../block-7';
import Block8 from '../block-8';
import Block9 from '../block-9';
import Block10 from '../block-10';
import Block11 from '../block-11';
import Footer from '../Footer';
import ButtonApply from '../button-apply';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Block2 />
      <Block3 />
      <Block4 />
      <ButtonApply text="Apply" />
      <Block5 />
      <Block7 />
      <Block8 />
      <Block9 />
      <Block10 />
      <Block11 />
      <Footer />
    </div>
  );
}

export default App;
