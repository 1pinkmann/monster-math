import './contact.css'
import Monster from '../../assets/img/monster.svg'
import FormContainer from '../../containers/Form'
import Countdown from 'react-countdown';
import Timer from '../Timer/Timer';


const Contact = ({setShowForm}) => {

    const renderer = ({ days, hours, minutes, seconds }) => {
        return <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
    };

    let date = new Date();

    return (
        <div id="form2" className="container contact">
            <div className="row">
                <div className="col-12 col-lg-6 monster-block">
                    <img className="monster-block__image" src={Monster} alt="Teacher" />
                    <p>Contact us now for a complimentary consultation with our education expert</p>
                    <h2>Limited Time Offer Ends in:</h2>
                    <Countdown
                        date={date.setDate(date.getDate() + 10)}
                        renderer={renderer}
                    />
                </div>
                <div className="col-12 col-lg-6">
                    <FormContainer setShowForm={setShowForm} id="form-contact" />
                </div>
            </div>
        </div>
    )
}

export default Contact
