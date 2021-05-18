import './style.css'
import clip from '../../assets/video/header.mp4'
import FormContainer from '../../containers/Form/index.js'

const Home = ({ setShowForm }) => {
    return <>
        <div className="home">
            <video autoPlay loop muted>
                <source src={clip} type='video/mp4' />
                <source src={clip} type="video/ogg" />
            </video>
            <div className='container home__wrapper'>
                
                <div className="home__columns">
                    <div className="home__column">

                    </div>
                    <div className="home__column">
                        <FormContainer setShowForm={setShowForm} id="form-header" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Home
