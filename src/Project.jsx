function Project() {
    return (
        <div className="px-4 md:px-10">
            {/* CV */}
            <h1 className="font-bold text-3xl text-center text-zinc-500 mt-10">
                Curiculum Vitae
            </h1>
            <div className="w-full flex justify-center p-5">
                <img
                    src="/Assets/Organisasi.png"
                    alt="Foto Saya"
                    className="rounded-lg object-cover max-h-[650px] max-w-full"
                />
            </div>

            {/* Project Laravel */}
            <h1 className="font-bold text-3xl mt-32 text-center text-zinc-500">
                Project Laravel
            </h1>
            <div className="w-full flex justify-center pt-5">
                <img
                    src="/Assets/project laravel.png"
                    alt="Foto Project Laravel"
                    className="rounded-lg object-cover max-h-[250px] max-w-full"
                />
            </div>
            <div className="text-center font-bold text-xl text-zinc-200 mt-3">CRUD Data Mahasiswa</div>

            {/* Project React */}
            <h1 className="font-bold text-3xl mt-32 text-center text-zinc-500">
                Project React & Next JS
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
                <div className="w-full md:w-1/3 text-center">
                    <img
                        src="/Assets/Portfolionew.png"
                        alt="Foto Project Portfolio"
                        className="rounded-lg max-h-[300px] object-cover mx-auto max-w-full"
                    />
                    <p className="text-xl font-bold text-zinc-200 mt-3 block">Project React JS</p>
                </div>

                <div className="w-full md:w-1/3 text-center">
                    <img
                        src="/Assets/Beliin.png"
                        alt="Foto Project Beliin"
                        className="rounded-lg max-h-[300px] object-cover mx-auto max-w-full"
                    />
                    <a
                        href="https://beliin-pi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-zinc-200 mt-3 block"
                    >
                        Project Next JS
                    </a>
                </div>
            </div>

            {/* Project AI */}
            <h1 className="font-bold text-3xl mt-32 text-center text-zinc-500">
                Project AI | Hand Sign Language Translator Using Neural Network
            </h1>
            <div className="flex justify-center mt-10">
                <div className="w-full md:w-1/3 text-center">
                    <a
                        href="https://youtu.be/I58FZDKqyYc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-zinc-200 block"
                    >
                        Project AI YouTube Video
                    </a>
                </div>
            </div>

            {/* Project Canva */}
            <h1 className="font-bold text-3xl mt-32 text-center text-zinc-500">
                Project Canva
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
                <div className="w-full md:w-1/3 text-center">
                    <img
                        src="/Assets/Cosmos no Kioku.png"
                        alt="Foto Project Desain Kaos"
                        className="rounded-lg object-cover max-h-[300px] mx-auto max-w-full"
                    />
                    <p className="text-xl font-bold text-zinc-200 mt-3 block">Project T-shirt Design</p>
                </div>

                <div className="w-full md:w-1/3 text-center">
                    <img
                        src="/Assets/Ebangkitan.png"
                        alt="Foto Project Poster KKR"
                        className="rounded-lg object-cover max-h-[300px] mx-auto max-w-full"
                    />
                    <a
                        href="https://beliin-pi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-zinc-200 mt-3 block"
                    >
                        KKR Poster Project
                    </a>
                </div>
            </div>

            {/* Project Corel */}
        </div>
    );
}

export default Project;
