import './style.css';
import block4img1 from '../../assets/img/math-class.svg';
import block4img2 from '../../assets/img/revolutionary.webp';

const Block4 = () => {
    return <>
        <div className="container block-4">
            <div className="row">
                <div className="col-10 offset-1 offset-md-0 col-md-6 block-4__card">
                    <img src={block4img1} alt="illustration" />
                </div>
                <div className="col-10 offset-1 offset-md-0 col-md-6 block-4__card">
                    <h2 className="block-4__card-title">Singapore Math Course</h2>
                    <p>
                        • Live video classes of 40 minutes<br />
                        <br />
                        • Taught by grade and ability level<br />
                        <br />
                        • Small groups of under 6 kids<br />
                        <br />
                        • Meeting once or twice a week for 8 weeks<br />
                        <br />
                        • Experienced & accredited Singapore Math teachers<br />
                        <br />
                        • Optional homework assigned for upper elementary<br />
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1 offset-md-0 col-md-6 section-1 block-4__card">
                    <h2 className="block-4__card-title">Why Singapore Math?</h2>
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
                <div className="col-10 offset-1 offset-md-0 col-md-6 section-2 block-4__card">
                    <img src={block4img2} alt="illustration" />
                </div>
            </div>
        </div>
    </>
}

export default Block4