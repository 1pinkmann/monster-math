import './video-section.css';
import Poster1 from '../../assets/img/poster1.jpg';
import ChoiWon from '../../assets/video/Choi-Won.mp4';
import Slider from "react-slick";
import checkVideoInViewport from '../../services/checkVideoPosition';
import { useEffect, useRef, useState } from 'react';
import useVideo from '../../hooks/useVideo';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const VideoSection = () => {

    let { handleVideoPlay, handleVideoPause } = useVideo();

    let videoRefs = useRef([]);

    useEffect(() => {
        let videoElements = videoRefs.current;

        checkVideoInViewport(videoElements);
    }, []);

    function stopVideo(i) {
        let videoElements = videoRefs.current;
        videoElements[i + 1].pause();
    }

    return (
        <div className="container">
            <h2 className="title-video-section">A great fit for your child, if:</h2>
            <div className="row video-section">
                <div className="col-10 col-lg-6 section-1 video-section__wrapper">
                    <Slider beforeChange={stopVideo} {...settings}>
                        <div>
                            <div className="video" onPlay={handleVideoPlay} onPause={handleVideoPause}>
                                <video ref={el => videoRefs.current.push(el)} preload="metadata" controls="controls" playsInline poster={Poster1}>
                                    <source src={ChoiWon} type='video/mp4' />
                                </video>
                            </div>
                        </div>                  
                    </Slider>
                </div>
                <div className="col-12 col-lg-6 section-2">
                    <div className="text">
                        <p>✅ You seek personalized small group learning (up to 6 students per class)</p>
                        <p>✅ Your child is in grade K through 5</p>
                        <p>✅ You want your child to build a strong foundation in mathematics and problem solving</p>
                        <p>✅ You’re new to Singapore Math or are already using the curriculum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection