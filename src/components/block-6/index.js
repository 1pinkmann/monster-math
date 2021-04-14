import './style.css';
import star from '../../assets/img/star.svg';

const Block6 = () =>{
  return <>
  <div className="container block-6">
    <div className="row ">
      <div className="col-12 col-md-4">
        <h3>#Have Fun</h3>
      </div>
      <div className="col-12 col-md-4 dark-primery">
        <h3>#Connect</h3>
      </div>
      <div className="col-12 col-md-4 text acent">
        <h3>#Speak Up</h3>
      </div>
    </div>
    <img className="star" src={star} alt="illustration" />
  </div>
  </>
}

export default Block6