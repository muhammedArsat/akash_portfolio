import React from 'react';
import ProfileImg from '../assets/Profile_img.png';

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-0.10rem)] pt-24 md:pt-28 px-4 md:px-24 md:flex-row">
            <div className="">
                <h1 className="text-2xl font-medium tracking-widest mb-2">
                    Hi, <br></br>I am Akash,
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aperiam fuga cum, illo quisquam iste consequatur ratione
                    porro et quo temporibus aspernatur minima. Non tempora et
                    minima fuga ullam enim, ducimus alias natus quae deleniti,
                    illo iusto libero impedit praesentium beatae minus provident
                    quod! Velit, nulla!
                </p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full mt-5 hover:scale-105 transition-all  justify-center items-center gap-4 ">
                    Download Resume
                </button>
            </div>
            <div></div>
                <img
                    src={ProfileImg}
                    alt="profile"
                    className="w-52 h-52 object-cover rounded-full mt-5  border-solid border-purple-700  border-4 shadow-[0_0_30px_#8b5cf6] "
                />
           
        </div>
    );
};

export default About;
