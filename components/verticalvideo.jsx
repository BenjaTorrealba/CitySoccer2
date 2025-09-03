import { useRef } from "react";

const VerticalVideo = ({ videoSrc }) => {

    const videoRef = useRef(null);

    const handleFullscreen = () => {
      const videoElement = videoRef.current;
      if (videoElement) {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen(); // Safari
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen(); // IE/Edge
        }
      }
    };

    return (
        <div className={` aspect-[9/16] relative shadow-md shadow-[rgba(0,0,0,0.3)] rounded-sm overflow-hidden `} >

            <video ref={videoRef} className={` w-full h-full relative `} preload="auto" autoPlay="autoplay" muted loop playsInline controls >
                <source src={videoSrc} type="video/mp4" />
            </video>


        </div>
    );
};

export default VerticalVideo;