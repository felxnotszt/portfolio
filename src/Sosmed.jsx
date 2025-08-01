import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Sosmed() {
    return (
        <>
        <div className="px-4 md:px-10 flex-grow">
            <h1 className="font-bold text-3xl text-center text-zinc-500 mt-10">
                Social Media
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-20 lg:gap-32 p-6 sm:p-10 mb-10">
                {/* WhatsApp */}
                <div className="w-full sm:w-auto border border-white px-6 py-4 rounded-xl hover:bg-green-600 transition text-center">
                    <a
                        href="https://wa.me/62895386173900"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-2xl text-white flex justify-center items-center gap-3"
                    >
                        <FaWhatsapp />
                        WhatsApp
                    </a>
                </div>

                {/* Instagram */}
                <div className="w-full sm:w-auto border border-white px-6 py-4 rounded-xl hover:bg-pink-600 transition text-center">
                    <a
                        href="https://www.instagram.com/novaldenpetraaa_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-2xl text-white flex justify-center items-center gap-3"
                    >
                        <FaInstagram />
                        Instagram
                    </a>
                </div>

            </div>
        </div>
        </>
    );
}

export default Sosmed;
