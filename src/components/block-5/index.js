import './style.css';
import block5img1 from '../../assets/img/block5img1.png';
import block5img2 from '../../assets/img/block5img2.png';
import block5img3 from '../../assets/img/block5img3.png';

const Block5 = () => {
    return (
        <div className="container block-5">
            <h2 className="block-5__title">The Magic of the Singapore Math<br/> Curriculum Three-Stage Learning Process:</h2>

            <div className="block-5__cards">
                <div className="block-5__card">
                    <div className="block-5__card-image-wrapper">
                        <img src={block5img1} alt="illustration" className="block-5__card-image" />
                    </div>
                    <h4 className="block-5__card-title">#1 CONCRETE:</h4>
                    <p className="block-5__card-text">
                        In early grades, kids learn using physical objects such as paper clips, toy blocks, etc. They learn addition or subtraction by physically lining those objects up in a row, or by removing from rows.
                    </p>
                </div>
                <div className="block-5__card">
                    <div className="block-5__card-image-wrapper">
                        <img src={block5img2} alt="illustration" className="block-5__card-image" />
                    </div>
                    <h4 className="block-5__card-title">#2 PICTORIAL:</h4>
                    <p className="block-5__card-text">
                        Then students learn by drawing diagrams as representations of mathematical concepts like ‘Bar model’ is used to teach addition, subtraction, multiplication, division, and fractions.
                    </p>
                </div>
                <div className="block-5__card">
                    <div className="block-5__card-image-wrapper">
                        <img src={block5img3} alt="illustration" className="block-5__card-image" />
                    </div>
                    <h4 className="block-5__card-title">#3 ABSTRACT:</h4>
                    <p className="block-5__card-text">
                        In addition to using bar modeling and diagrams, students also  solve mathematical problems with exclusively abstract tools: numbers, symbols, and equations.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Block5