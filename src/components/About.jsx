import aboutSvg from '../assets/about.svg';
import Edu from './Edu';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    /*<section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </div>
    </section>*/
    <section className='bg-white-100 py-20 align-element '>
      <SectionTitle text='Educational qualification' className='ml-24' />
      <div className='grid md:grid-cols-2  items-center gap-16 align-element'>
      
        <img className='w-full h-64' src={aboutSvg }/>
    <Edu />
      </div>


    </section>
  );
};
export default About;
