import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import React, { Fragment, useState } from 'react';
import SectionTitle from './SectionTitle';
import heroImg from '../assets/hero.svg';
import aboutSvg from '../assets/about.svg';

const Projects = () => {
  
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleCardClick = () => {
      setIsFlipped(!isFlipped);
    };
  return (
    <section className='py-15 align-element' id='projects'>
      <SectionTitle text='Internship Option' />
      <div className='mt-12'>
        <h1>Internship option :</h1>
     <div className='ml-24 gap-5 align-elements mt-8'>
     <label className='mr-7' >
        <input
          type="radio"
          value="option1"
          
          
        />
         {"  "}Option 1
      </label>

      <label className='ml-24'>
        <input
          type="radio"
          value="option2"
         
        />{"  "}
        Option 2
      </label>
      </div>
      <div className='flex mt-12 align-items '>
        <h1>Duration:</h1>
     <div className=' flex ml-12  align-element sm:flex-row'>
     <label >
        <input
          type="radio"
          value="option1"
          
        />{"  "}
        1 Month
      </label>

      <label className='ml-24'>
        <input
          type="radio"
          value="option2"
         
        />{"  "}
        3 Month
      </label>
      <label className='ml-24'>
        <input
          type="radio"
          value="option2"
         
        />{"  "}
       6 Month
      </label>
      </div>
     </div>
     
     <div className='mt-12'>
      <label htmlFor="dateInput">Internship date:</label>
      <input
        type="date"
        id="dateInput"
        className='ml-6'
      />
      
     </div>


      <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded  justify-end ml-96 mb-9 mt-4 ">
 submit
</button>
</div>
    </section>
  );
};
export default Projects;
