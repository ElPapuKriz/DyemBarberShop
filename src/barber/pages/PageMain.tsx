import { useRef } from "react"
import video1 from "@/assets/videos/v1.mp4"

const PageMain = () => {
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleClickVideo = ()=>{
        if(videoRef.current){videoRef.current.muted = !videoRef.current.muted}
    };

    return (
        <div className="min-h-svh mt-25  ">
            <video 
            src={video1}
            className="w-full xl:h-[120svh] h-full"
            loop
            autoPlay
            muted
            playsInline
            
            ref={videoRef}
            onClick={handleClickVideo}
            />
            <h1 className="text-5xl">Esta sera la pagina principal</h1>
        </div>
    )
}

export default PageMain
