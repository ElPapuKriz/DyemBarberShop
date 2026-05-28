import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const videos = [
  {
    webm: "me/visitanos.webm"
  },
  {
    mp4: "me/video1.mp4",
    webm: "me/video1.webm"
  },
  {
    mp4: "me/video2.mp4",
    webm: "me/video2.webm"
  },
  {
    mp4: "me/video3.mp4",
    webm: "me/video3.webm"
  },
  {
    mp4: "me/video4.mp4",
    webm: "me/video4.webm"
  },
];

const Tiktok = () => {
  const [indexVideo, setIndexVideo] = useState(0)

  const nextVideo = () => {
    setIndexVideo((prev) =>
      prev === videos.length - 1 ? 0 : prev + 1
    )
  }

  const prevVideo = () => {
    setIndexVideo((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    )
  }

  return (
    <div className="flex flex-col 2xl:flex-row items-center justify-center bg-[#0B0B0B] p-10 scroll-mt-30">

      <section 
        id="tiktok" 
        className="flex justify-center w-full 2xl:w-1/3">
        <blockquote
          className="tiktok-embed rounded-2xl w-full max-w-xl"
          cite="https://www.tiktok.com/@usuariojeyson"
          data-unique-id="usuariojeyson"
          data-embed-type="creator"
        >
          <section>
            <a target="_blank" href="https://www.tiktok.com/@usuariojeyson?refer=creator_embed">
              @usuariojeyson
            </a>
          </section>
        </blockquote>
      </section>

      <section className="flex justify-center w-full 2xl:w-1/3">
        <div className="flex flex-col items-center gap-6 w-full max-w-100 md:w-120">
          <div className="relative w-full max-w-100 md:w-120">
            <AnimatePresence mode="wait">
              <motion.video
                key={videos[indexVideo].mp4}
                className="w-full rounded-2xl shadow-lg"
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
              >
                <source src={videos[indexVideo].mp4} type="video/mp4" />
                <source src={videos[indexVideo].webm} type="video/webm" />
                Tu navegador no soporta video.
              </motion.video>
            </AnimatePresence>

            <button
              onClick={prevVideo}
              className="cursor-pointer absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white px-4 py-4 rounded-full"
            >
              <img src="tijera.png" className="w-5 rotate-180 invert brightness-0" alt="<-" />
            </button>

            <button
              onClick={nextVideo}
              className="cursor-pointer absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white px-4 py-4 rounded-full"
            >
              <img src="tijera.png" className="w-5 invert brightness-0" alt="->" />
            </button>
          </div>
        </div>
      </section>

      <section className="self-center flex justify-center w-full 2xl:w-1/3">
        <blockquote
          className="tiktok-embed rounded-2xl w-full max-w-xl"
          cite="https://www.tiktok.com/@lab.dyem.barbershop"
          data-unique-id="lab.dyem.barbershop"
          data-embed-type="creator"
        >
          <section>
            <a target="_blank" href="https://www.tiktok.com/@lab.dyem.barbershop?refer=creator_embed">
              @lab.dyem.barbershop
            </a>
          </section>
        </blockquote>
      </section>

    </div>
  );
};

export default Tiktok;