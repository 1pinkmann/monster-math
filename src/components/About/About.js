import './about.css';
import block4img2 from '../../assets/img/revolutionary.webp';

const About = () => {
    return <>
        <div className="container about">
            <div className="row">
                <div className="col-10 offset-1 offset-md-0 col-md-6 section-1 about__card">
                    <h2 className="about__card-title">Why Singapore Math?</h2>
                    <p>
                        Singapore Math, first developed in Singapore, gained recognition globally for the high aptitude and math scores of their students.
                        <br />
                        <br />
                        It was subsequently adopted by elite private and public schools and among homeschool parents in the United States and around the world.
                        <br />
                        <br />
                        The Singapore Math framework was developed on the basis that mathematical problem solving is central to learning math.
                        <br />
                        <br />
                        It helps children to acquire and learn to apply math concepts and skills in a wide range of situations, including non-routine, open-ended, and real-world problems. It builds a strong math foundation and will prepare them for the future study of Algebra.
                    </p>
                </div>
                <div className="col-10 offset-1 offset-md-0 col-md-6 section-2 about__card">
                    <img src={block4img2} alt="illustration" />
                </div>
            </div>
        </div>
    </>
}

export default About