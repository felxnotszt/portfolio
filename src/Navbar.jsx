import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { path: '/', label: 'Homepage' },
        { path: '/profile', label: 'Profile' },
        { path: '/project', label: 'Project' },
        { path: '/sosmed', label: 'Sosmed' },
    ];

    const filteredMenu = menuItems.filter(item => item.path !== currentPath);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-white px-6 py-5 shadow-md">
        <div className="flex justify-between items-center">
            {/* Logo Kiri */}
            <h1 className="text-3xl font-bold text-cyan-500">PORTFOLIO</h1>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-6 text-lg">
            {filteredMenu.map(item => (
                <Link
                key={item.path}
                to={item.path}
                className="hover:text-cyan-500 transition"
                >
                {item.label}
                </Link>
            ))}
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            </div>
        </div>

        {/* Dropdown Menu Mobile */}
        {menuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 text-lg">
            {filteredMenu.map(item => (
                <Link
                key={item.path}
                to={item.path}
                className="hover:text-cyan-500 transition"
                onClick={() => setMenuOpen(false)} // Tutup menu setelah klik
                >
                {item.label}
                </Link>
            ))}
            </div>
        )}
        </div>
    );
}

export default Navbar;
