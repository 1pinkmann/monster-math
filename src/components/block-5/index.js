import './style.css';
import block5img1 from '../../assets/img/block5img1.svg';
import block5img2 from '../../assets/img/block5img2.svg';
import block5img3 from '../../assets/img/block5img3.svg';
import block5img4 from '../../assets/img/block5img4.svg';

const Block5 = () => {
  return (
    <div className="container block-5">
      <h2>Why Public Speaking and Coaching?</h2>
      <p>Public speaking is the perfect opportunity to build your child’s  personal character and growth on several fronts, since developing communication skills is useful in nearly any aspect of life. It also helps them create rapport with others and become a high performer.</p>
      <div className="row">
        <div className="col-10 offset-1 offset-md-0 col-md-6 block-5-text">
          <img src={block5img1} alt="illustration" />
          <h4>Improves Academic Performance</h4>
          <p>Mastering public speaking is a competence already required in elementary education, and many children get exposure to public speaking through giving presentations at school. Studies show that good communicators are more successful in conveying their knowledge, ideas, and opinions both in educational and professional settings.</p>
        </div>
        <div className="col-10 offset-1 offset-md-0 col-md-6 block-5-text">
          <img src={block5img2} alt="illustration" />
          <h4>Enhances Communication Skills</h4>
          <p>Public speaking also enables your child to become a stronger listener, and more thoughtful and articulate communicator open to various viewpoints. It helps them to pay more attention to the topic under discussion. Solid communication skills enhance relationships with family, friends, and teachers.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 offset-md-0 col-md-6 block-5-text">
          <img src={block5img3} alt="illustration" />
          <h4>Empowers Children to Conquer Anxiety</h4>
          <p>When your child engages in a difficult or complicated activity, it can create a lot of stress and anxiety. Learning how to speak well in public provides them with the opportunity and courage to stand before their peers and speak well. Learning how to express your thoughts and feelings more effectively is important in decision-making.</p>
        </div>
        <div className="col-10 offset-1 offset-md-0 col-md-6 block-5-text">
          <img src={block5img4} alt="illustration" />
          <h4>Prepares Them for Success</h4>
          <p>Warren Buffet often noted that communication skills are crucial to success, having said: “A relatively modest improvement can make a major difference in your future earning power, as well as in many other aspects of your life.” Communication skills build self-confidence and analytical thought and are said to be the foundation for successful advancement into adulthood. </p>
        </div>
      </div>
    </div>
  )
}

export default Block5