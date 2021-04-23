import './style.css'
import clip from '../../assets/video/header.mp4'
import Poster from '../../assets/img/header-bg.webp'
import Summer from '../../assets/img/online-summer.png'
import logo from '../../assets/img/logo.svg'
import FormContainer from '../../containers/Form/index.js'

const Header = () => {
  return <>
    <div className="bg-video">
      <video autoPlay loop muted>
        <source src={clip} type='video/mp4' />
        <source src={clip} type="video/ogg" />
      </video>
      <div className='container bg-video__wrapper'>
        <div className="bg-video__columns">
          <div className="bg-video__column">
            <a href="https://www.monstereducation.com/" className="logo-link">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <div className="title">
              <h1>Singapore School of Math K-5</h1>
              <p>Learn problem-solving and develop mathematical thinking with the esteemed Singapore Math curriculum.</p>
            </div>
          </div>
          <div className="bg-video__column">
            <FormContainer id="form-header" />
          </div>
        </div>

      </div>
    </div>
  </>
}

export default Header
