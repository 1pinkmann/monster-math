import './style.css';
import block4img1 from '../../assets/img/Comedy_Stand.svg';
import block4img2 from '../../assets/img/Publik_Speaking.svg';
import block4img3 from '../../assets/img/Writing_1st_newcolor.svg';

const Block4 = () =>{
  return <>
  <div className="container block-4">
    <div className="row">
      <div className="col-10 offset-1 offset-md-0 col-md-6 block-4__card">
        <img src={block4img1} alt="illustration" />
      </div>
      <div className="col-10 offset-1 offset-md-0 col-md-6 block-4__card">
        <h2 className="block-4__card-title">Public Speaking Through Stand Up Comedy Course</h2>
        <p>Gain confidence in public speaking and have fun learning stand up comedy with an LA comedian and educator. Master story-telling, nonverbal communication, humor and overcome speech anxiety.<br/> <br/>
        Meeting <b>once a week for 40 minutes for the duration of 8 weeks</b> children will learn how to develop jokes (K-2nd grade) and a stand up comedy routine (3-5th grade) for their final showcase.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-10 offset-1 offset-md-0 col-md-6 section-1 block-4__card">
        <h2 className="block-4__card-title">Public Speaking <br/><b>“Toastmasters”</b> Style Course</h2>
        <p>Get your child to learn how to speak in front of his classmates, teachers, and adults sending a powerful message that captivates an audience. Have fun and boost confidence.<br/><br/>

        Our small group class in Public Speaking “Toastmasters” Style is a child-appropriate first step toward learning how to give speeches and debating. <b>Meeting once a week for 40 minutes for the duration of 8 weeks</b> children will learn how to give introductions, lead impromptu talks, and to prepare a speech for their final project. 
        </p>
      </div>
      <div className="col-10 offset-1 offset-md-0 col-md-6 section-2 block-4__card">
        <img src={block4img2} alt="illustration" />
      </div>
    </div>
    <div className="row">
      <div className="col-10 offset-1 offset-md-0 col-md-6 block-4__card">
        <img src={block4img3} alt="illustration" />
      </div>
      <div className="col-10 offset-1 offset-md-0 col-md-6 block-4__card">
        <h2 className="block-4__card-title">CEO of Your Life Coaching Course</h2>
        <p>Learn techniques to envision dreams, assess problems, understand emotions, and to take action. Boost confidence, emotional intelligence, and learn important life-skills. <br/> <br/>
        Small group (4-6 kids) coaching <b>sessions will take place once a week for 40 minutes for the duration of 8 weeks.</b> The class is led by certified life coach and children’s mindfulness instructor Evelina based in sunny Honolulu.
        </p>
      </div>
    </div>

  </div>
  </>
}

export default Block4