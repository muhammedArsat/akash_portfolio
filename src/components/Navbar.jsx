import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { FaGithubAlt } from 'react-icons/fa6';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   


    const handleGithub = () => {
        window.open("https://github.com/", "_blank");
      };

    const handleMenuBar = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#2b2d42] to-[#1a1a40] text-white">
            <nav className="flex justify-between items-center px-5 py-5">
                <div className="bg-black p-2 w-15 h-15 rounded-full flex justify-center items-center ">
                    <h1 className="font-medium">AK</h1>
                </div>

                <div className="hidden md:block">
                    <ul className="flex justify-center items-center cursor-pointer">
                       <a href='#about'><li className="p-2">About</li></a>
                       <a href="#skill"><li className="p-2">Skills</li></a> 
                        <li className="p-2">Certificates</li>
                        <li className="p-2">Projects</li>
                        <li className="p-2">Education</li>
                        <li className="p-2">Contact</li>
                    </ul>{' '}
                </div>
                
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full mt-5 hover:scale-105 transition-all md:flex justify-center items-center gap-4 hidden ">
                    Github Profile <FaGithubAlt/>
                </button>
                
                {!isMobile && (
                    <>
                        <HiOutlineMenuAlt1
                            size={25}
                            className="cursor-pointer block md:hidden"
                            onClick={handleMenuBar}
                        />{' '}
                    </>
                )}
            </nav>

            {isMenuOpen && (
                <>
                    <div>
                        <ul className="flex justify-center items-center flex-col cursor-pointer">
                            <li className="p-2">About</li>
                            <li className="p-2">Skills</li>
                            <li className="p-2">Certificates</li>
                            <li className="p-2">Projects</li>
                            <li className="p-2">Education</li>
                            <li className="p-2">Contact</li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
