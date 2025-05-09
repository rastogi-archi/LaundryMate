import { ChevronRight, Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-20">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    {/* <img src="logo.png" alt="logo" className="h-20 w-auto object-contain" /> */}
                    <span className='text-3xl font-bold text-[#032b56]'>LaundryMate</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
                    <Link to="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
                    <Link to="/about" className="hover:text-blue-600 transition-colors duration-200">About</Link>
                    <Link to="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact us</Link>
                </div>

                {/* Theme & Mobile Menu Toggle & Button */}
                <div className="flex items-center space-x-4">
                    <button
                        className="md:hidden hover:bg-gray-100 transition"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <Menu className="h-7 w-7" />
                    </button>

                    <div className="hidden sm:block">
                        <Link to={"/book-machine"}>
                            <Button className="flex items-center gap-2 bg-[#032b56] cursor-pointer">
                                Book machine <ChevronRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 text-md font-medium">
                    <Link
                        to="/"
                        className="block py-2 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="block py-2 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="block py-2 hover:text-blue-600 transition-colors duration-200"
                    >
                        Contact us
                    </Link>
                    <Link to={"/book-machine"}>
                        <Button className="flex justify-center items-center gap-2 mt-2 bg-[#032b56] cursor-pointer">
                            Book machine <ChevronRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
