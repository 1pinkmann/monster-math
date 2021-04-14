import './style.css'
import Monster from '../../assets/img/monster.svg'
import FormContainer from '../../containers/Form'

const Block10 = () => {
  return (
    <div id="form2" className="container block-10">
      <div className="row">
        <div className="col-12 col-lg-6 monster-block">
          <img src={Monster} alt="Teacher" />
          <h2>Limited time offer</h2>
          <p>Contact us now and get enrollment fee waived</p>
          <h3>(value $199.00)</h3>
        </div>
        <div className="col-12 col-lg-6">
          <FormContainer id="form-contact" />
        </div>
      </div>
    </div>
  )
}

export default Block10
