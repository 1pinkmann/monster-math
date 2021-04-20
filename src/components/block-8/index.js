import './style.css';
import moneyBack from '../../assets/img/icon-money-back-guarantee.svg';

const Block8 = () =>{
  return <>
  <div className="container block-8">
    <h2>Course Tuition</h2>
    <div className="row">
    <img className="money-back" src={moneyBack} alt="" />
    <div className="col-12 col-md-6 col-lg-4">
        <div className="card card-1">
          <h4>Single lesson <br/> (up to 6 kids per class)</h4>
          <h3>$39.00</h3>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card card-2">
          <h4>Average course length <br/>(meeting once or twice a week)</h4>
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
        <p className="block-8__info">*100% Satisfaction Guaranteed: full refund for the remaining classes at the time of cancellation </p>
      </div>
    </div>
  </div>
  </>
}

export default Block8