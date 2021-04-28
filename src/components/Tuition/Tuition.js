import './tuition.css';
import moneyBack from '../../assets/img/icon-money-back-guarantee.svg';
import sunIcon from '../../assets/img/sun.svg';

const Tuition = () => {
  return <>
    <div className="container tuition">
      <h2>Course Tuition</h2>
      <div className="row">
        <img className="money-back" src={moneyBack} alt="" />
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-1">
            <h4>Single lesson <br /> (up to 6 kids per class)</h4>
            <h3>$39.00</h3>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-2">
            <img src={sunIcon} className="card-2__icon" />
            <h4>Average course length <br />(meeting once or twice a week)</h4>
            <h3>8 to 12 weeks</h3>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card card-3">
            <h4>Live online <br /> class duration</h4>
            <h3>40min</h3>
          </div>
        </div>
        <div className="col-12">
          <p className="tuition__info">*100% Satisfaction Guaranteed: full refund for the remaining classes at the time of cancellation </p>
        </div>
      </div>
    </div>
  </>
}

export default Tuition