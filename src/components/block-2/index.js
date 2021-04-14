import './style.css';
import mrPaul from '../../assets/video/Mr-Paul-1.mp4';
import Poster1 from '../../assets/img/poster1.jpg'
import Poster2 from '../../assets/img/poster2.jpg'
import mrPaul2 from '../../assets/video/Mr-Paul-2.mp4';
import Slider from "react-slick";
import checkVideoInViewport from './../../services/checkVideoPosition';
import { useEffect, useRef } from 'react';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Block2 = () => {

    let videoRefs = useRef([]);

    useEffect(() => {
        let videoElements = videoRefs.current;

        checkVideoInViewport(videoElements);
    }, []);

    function stopVideo(i) {
        let videoElements = videoRefs.current;
        videoElements[i+1].pause();
    }

    return (
        <div className="container">
            <h2 className="title-block-2">A great fit for your child, if:</h2>
            <div className="row block-2">
                <div className="col-10 col-lg-6 section-1 block-2__wrapper">
                    <Slider beforeChange={stopVideo} {...settings}>
                        <div>
                            <div className="video">
                                <video ref={el => videoRefs.current.push(el)} preload="metadata" controls="controls" poster={Poster1} playsInline>
                                    <source src={mrPaul} type='video/mp4' />
                                </video>
                            </div>
                        </div>
                        <div>
                            <div className="video">
                                <video ref={el => videoRefs.current.push(el)} controls="controls" poster={Poster2} playsInline>
                                    <source src={mrPaul2} type='video/mp4' />
                                </video>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="col-12 col-lg-6 section-2">
                    <div className="text">
                        <p>✅ Your child is in grade K through 5</p>
                        <p>✅ Your child wants to gain confidence in public speaking & self-expression </p>
                        <p>✅ You’re interested in Stand Up Comedy, Toastmasters, or life skills coaching</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block2
