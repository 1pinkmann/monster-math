import './style.css';
import Poster3 from '../../assets/img/poster3.jpg'
import lapki from '../../assets/img/lapki.svg';
import mrPaul from '../../assets/video/Agnia.mp4';
import { useEffect, useRef } from 'react';
import checkVideoInViewport from '../../services/checkVideoPosition';

const Block11 = () => {

    let videoRefs = useRef([]);

    useEffect(() => {
        let videoElements = videoRefs.current;

        checkVideoInViewport(videoElements);
    }, []);

    return <>
        <div className="container block-11">
            <div className="row block-11__row">
                <div className="col-1 col-md-1 block-11__lapki-wrapper">
                    <img className="lapki" src={lapki} alt="" />
                </div>
                <div className="col-11 col-lg-5 block-11__text-wrapper">
                    <p className="block-11__text">
                        <span className="block-11__text-inner">
                            Supporting the development of a child’s character and personality is too often overlooked in many academic environments. Yet it is often these soft skills such as emotional emotional intelligence, self-expression, and life skills that end up being the most important in the formation of an individual and their future success.
                        </span>
                    </p>
                    <p className="dark-primery block-11__name">Dr. Agnia Grigas</p>
                    <p className="block-11__prof">Founder of Monster Education</p>
                </div>
                <div className="col-12 col-lg-6 block-11__video-wrapper">
                    <div className="video">
                        <video ref={el => videoRefs.current.push(el)} controls="controls" poster={Poster3} playsInline>
                            <source src={mrPaul} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Block11