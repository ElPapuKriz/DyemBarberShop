import { useRef } from "react"
import video1 from "@/assets/videos/v1.webm"

const PageMain = () => {
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleClickVideo = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted
        }
    };

    return (
        <div className="mt-30 min-h-svh">
            
            {/* CONTENEDOR RELATIVE */}
            <div className="relative w-full xl:h-[120svh] h-full"
            onClick={handleClickVideo}>

                {/* VIDEO */}
                <video
                    src={video1}
                    className="w-full h-full object-cover"
                    loop
                    autoPlay
                    muted
                    playsInline
                    ref={videoRef}
                />

                {/* DEGRADADO */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

                {/* TEXTO */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white/60 text-2xl md:text-7xl font-black tracking-wide text-center px-4">
                        No es solo un corte<br />Es identidad
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default PageMain