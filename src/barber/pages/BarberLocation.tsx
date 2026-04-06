const BarberLocation = () => {
    return (
        <div id="locaciones" className="w-full flex flex-col items-center justify-center py-12 bg-[#0B0B0B] scroll-mt-30">

            {/* Título */}
            <h2 className=" font-minimalist mb-3 text-white text-5xl md:text-8xl">Locaciones</h2>

            {/* Dirección real */}
            <p className="text-white mb-6 text-center max-w-md">
                Encuéntranos en nuestra ubicación oficial 
            </p>

            {/* Mapa */}
            <div className="relative w-[90%] max-w-2xl h-87.5 rounded-2xl overflow-hidden shadow-xl">

                <iframe
                    title="map"
                    className="w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d243.93633199586296!2d-77.00939010644537!3d-11.975794852482485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU4JzMyLjkiUyA3N8KwMDAnMzMuMiJX!5e0!3m2!1ses!2spe!4v1775417199655!5m2!1ses!2spe"
                    loading="lazy"



                />

            </div>

            {/* Botón opcional */}
            <a
                href="https://maps.app.goo.gl/RvPbeNvsDRUTD2Hu5"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-black text-white font-main px-6 py-3 rounded-xl hover:bg-gray-800 transition"
            >
                Ver en Google Maps
            </a>

        </div>
    );
};

export default BarberLocation;