import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Profile from './Profile'
import Project from './Project'
import Sosmed from './Sosmed'
import { FaUser, FaFolderOpen, FaShareAlt } from 'react-icons/fa'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="font-bold text-4xl text-cyan-700 text-center p-10">
                  Welcome To My Portfolio, choose one of these three options below. Thanks!
                </div>

                <div className="flex flex-wrap justify-center gap-10 p-10 mb-10">
                  {/* PROFILE */}
                  <Link to="/profile">
                    <div className="flex flex-col items-center justify-center text-2xl font-medium border border-white text-white rounded-xl px-8 py-6 w-48 hover:bg-cyan-700 hover:text-black transition">
                      <FaUser className="text-4xl mb-2" />
                      PROFILE
                    </div>
                  </Link>

                  {/* PROJECT */}
                  <Link to="/project">
                    <div className="flex flex-col items-center justify-center text-2xl font-medium border border-white text-white rounded-xl px-8 py-6 w-48 hover:bg-cyan-700 hover:text-black transition">
                      <FaFolderOpen className="text-4xl mb-2" />
                      PROJECT
                    </div>
                  </Link>

                  {/* SOSMED */}
                  <Link to="/sosmed">
                    <div className="flex flex-col items-center justify-center text-2xl font-medium border border-white text-white rounded-xl px-8 py-6 w-48 hover:bg-cyan-700 hover:text-black transition">
                      <FaShareAlt className="text-4xl mb-2" />
                      SOSMED
                    </div>
                  </Link>
                </div>
              </>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project" element={<Project />} />
          <Route path="/sosmed" element={<Sosmed />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
