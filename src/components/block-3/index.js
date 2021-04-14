import './style.css';
import titleBlock3 from '../../assets/img/block-3-title.svg';
import block3img1 from '../../assets/img/block3img1.svg';
import block3img2 from '../../assets/img/block3img2.svg';
import block3img3 from '../../assets/img/block3img3.svg';



const Block3 = () =>{
  return <>
  <div className="container block-3">
    <img className="block-3-title" src={titleBlock3} alt="" />
    <div className="row">
      <div className="col-12 col-md-4">
        <img src={block3img1} alt="" />
        <h4>No more than 6  students per live video class</h4>
      </div>
      <div className="col-12 col-md-4">
        <img src={block3img2} alt="" />
        <h4>Accredited & experienced Singapore Math teachers</h4>
      </div>
      <div className="col-12 col-md-4">
        <img src={block3img3} alt="" />
        <h4>An interactive & fun approach</h4>
      </div>
    </div>
  </div>
  </>
}

export default Block3