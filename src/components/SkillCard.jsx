import React from 'react';

const SkillCard = ({technologies, tech}) => {
  
   
    return (
        <div className="flex flex-col  md:w-1/4 md:items-center md:justify-center  bg-violet-950 gap-5 p-4 shadow-[0_0_30px_#8b5cf6] rounded-lg lg:max-w-xl">
            <h4 className="w-full text-center ">{tech}</h4>
            <div className='flex flex-col gap-4 md:flex-row flex-wrap justify-center items-center '>
                {technologies.map((technology, index) => {
                    return (
                        <div
                                className="flex  flex-row  border border-gray-500 justify-evenly items-center overflow-hidden p-3 rounded-md md:w-[100px] "
                            key={index}
                        >
                            <img
                                src={technology.image}
                                alt="Tech stack"
                                className="w-5 h-5"
                            />
                            <p>{technology.language}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillCard;
