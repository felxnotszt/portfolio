import { FaReact, FaPhp } from 'react-icons/fa';
import { SiJavascript, SiLaravel, SiCanva, SiCoreldraw } from 'react-icons/si';

function Profile() {
    return (
        <>
            <div>
                {/* About Me */}
                <div className="m-10 min-h-screen">
                    <div className="px-4">
                        {/* Judul */}
                        <h1 className="text-3xl font-bold text-center text-zinc-500">
                            About Me
                        </h1>

                        {/* Konten Utama */}
                        <div className="flex flex-col md:flex-row items-center mt-10 max-w-5xl mx-auto">
                            {/* Paragraf */}
                            <div className="md:w-1/2 p-5">
                                <p className="text-justify text-white">
                                    Hello, my name is Novalden Petra. I am an Informatics Engineering student who is passionate about technology, web development, and design. I enjoy learning new things and aim to grow through real-world experiences such as internships and projects. I have experience in building websites using React JS and Laravel, and I am also skilled in using design tools such as CorelDRAW and Canva.
                                </p>
                            </div>

                            {/* Foto */}
                            <div className="md:w-1/2 flex justify-center p-5">
                                <img
                                    src="/Assets/petra-almet.jpg"
                                    alt="Foto Saya"
                                    className="rounded-lg max-h-[300px] object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <h1 className="text-3xl font-bold text-center mt-32 text-zinc-500">Skills</h1>

                    <div className="mt-10 flex justify-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {[
                                { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
                                { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-300" /> },
                                { name: "Laravel", icon: <SiLaravel size={40} className="text-red-500" /> },
                                { name: "PHP", icon: <FaPhp size={40} className="text-indigo-400" /> },
                                { name: "Canva", icon: <SiCanva size={40} className="text-blue-400" /> },
                                { name: "CorelDraw", icon: <SiCoreldraw size={40} className="text-green-500" /> },
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 border border-white w-40 h-20 rounded-lg p-2 shadow-md bg-white/10 hover:bg-white/20 transition duration-200"
                                >
                                    {skill.icon}
                                    <span className="text-white text-sm sm:text-base">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Campus Experiences */}
                    <h1 className="font-bold text-3xl text-center mt-32 text-zinc-500">
                        Campus Experiences
                    </h1>
                    <div className="mt-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* BEM Staff */}
                            <div className="border border-gray-700 p-4 rounded-lg shadow-md">
                                <h2 className="text-center font-bold text-lg sm:text-xl">
                                    Student Executive Board, Soegijapranata Catholic University
                                </h2>
                                <div className="mt-2 flex flex-col items-center text-center text-sm sm:text-base">
                                    <p>Staff of UKM Management Division | Talent and Interest Department</p>
                                    <p>Awarded "Staff of the Month" | June 2025</p>
                                </div>
                            </div>

                            {/* BEM Koordinator */}
                            <div className="border border-gray-700 p-4 rounded-lg shadow-md">
                                <h2 className="text-center font-bold text-lg sm:text-xl">
                                    BEM Soegijapranata Catholic University
                                </h2>
                                <div className="mt-2 flex flex-col items-center text-center text-sm sm:text-base">
                                    <p>Locgistic Coordinator Rector Cup 2025</p>
                                </div>
                            </div>

                            {/* PTMB */}
                            <div className="border border-gray-700 p-4 rounded-lg shadow-md md:col-span-2">
                                <h2 className="text-center font-bold text-lg sm:text-xl">
                                    PTMB Soegijapranata Catholic University 2024
                                </h2>
                                <div className="mt-2 flex flex-col items-center text-center text-sm sm:text-base">
                                    <p>Fasilitator PTMB SCU 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="text-center mt-32 text-zinc-500">
                        <h1 className="text-3xl font-bold">Education</h1>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 px-4">
                        <div className="border border-gray-700 px-4 py-2 rounded-lg shadow-md">
                            Soegijapranata Catholic University | Teknik Informatika
                        </div>
                        <div className="border border-gray-700 px-4 py-2 rounded-lg shadow-md">
                            SMA N 7 Semarang | Social Sciences
                        </div>
                        <div className="border border-gray-700 px-4 py-2 rounded-lg shadow-md">
                            SMP N 30 Semarang
                        </div>
                    </div>

                    {/* Hobbies */}
                    <div className="text-center mt-32 text-zinc-500">
                        <h1 className="text-3xl font-bold">Hobbies</h1>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 px-4">
                        <div className="border border-gray-700 px-4 py-2 rounded-lg shadow-md">
                            Listening to music
                        </div>
                        <div className="border border-gray-700 px-4 py-2 rounded-lg shadow-md">
                            Playing musical instrument
                        </div>
                        <div className="border border-gray-700 px-4 py-2 rounded-lg shadow-md">
                            Code
                        </div>
                        <div className="border border-gray-700 px-4 py-2 rounded-lg shadow-md">
                            Read a novel
                        </div>
                        <div className="border border-gray-700 px-4 py-2 rounded-lg shadow-md">
                            Make a desain
                        </div>
                        <div className="border border-gray-700 px-4 py-2 rounded-lg shadow-md">
                            Travelling
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
