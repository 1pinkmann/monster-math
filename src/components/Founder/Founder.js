import './founder.css';
import Poster3 from '../../assets/img/poster3.jpg'
import lapki from '../../assets/img/lapki.svg';
import mrPaul from '../../assets/video/Agnia.mp4';
import { useEffect, useRef } from 'react';
import checkVideoInViewport from '../../services/checkVideoPosition';
import useVideo from '../../hooks/useVideo';

const Founder = () => {

    let videoRefs = useRef([]);

    let {handleVideoPlay, handleVideoPause} = useVideo();

    useEffect(() => {
        let videoElements = videoRefs.current;

        checkVideoInViewport(videoElements);
    }, []);

    return <>
        <div className="container founder">
            <div className="row founder__row">
                <div className="col-1 col-md-1 founder__lapki-wrapper">
                    <img className="lapki" src={lapki} alt="" />
                </div>
                <div className="col-11 col-lg-5 founder__text-wrapper">
                    <p className="founder__text">
                        <span className="founder__text-inner">
                            It’s the teacher that makes a whole world of difference to a student....not the textbook, worksheet, or the instructional video. Having studied with extraordinary professors and lectured at leading universities, I put a lot of stock in teachers who I personally handpick for Monster Education looking for inspired and inspiring individuals. Fortunately, technology eliminates the distance between the teacher and the students.
                        </span>
                    </p>
                    <p className="dark-primery founder__name">Dr. Agnia Grigas</p>
                    <p className="founder__prof">Founder of Monster Education</p>
                </div>
                <div className="col-12 col-lg-6 founder__video-wrapper">
                    <div className="video" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                        <video ref={el => videoRefs.current.push(el)} controls="controls" poster={Poster3} playsInline>
                            <source src={mrPaul} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Founder