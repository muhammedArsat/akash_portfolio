import React from 'react';
import SkillCard from './SkillCard';
import{programmingLanguages,dataEngineering,devopsAndCloud,machineLearning} from "../constants/constants"
const Skills = () => {
    return (
        <div className="flex  pt-4 flex-col px-4  ">

            <h1 className="text-3xl font-medium text-center w-full mt-2 tracking-widest">
                Skills
            </h1>
            <p className='text-center w-full text-lg mt-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Debitis possimus maxime ullam perferendis consectetur vel.
            </p>
            <div className='mt-10 md:px-7 md:py-4 flex flex-col md:flex-row md:flex-wrap gap-2 md:justify-center md:items-center'>
                <SkillCard technologies={programmingLanguages} tech={"Programming Languages"}/>
                <SkillCard technologies={dataEngineering} tech={"Data Engineering"}/>
                <SkillCard technologies={devopsAndCloud} tech={"Devops And Cloud"}/>
                <SkillCard technologies={machineLearning} tech={"Machine Learning"}/>

            </div>
        </div>
    );
};

export default Skills;
