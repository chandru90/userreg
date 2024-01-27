import { links } from '../data';

const Navbar = () => {
  return (
    <nav className='bg-blue-800 '>
      <div className='align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
          KGE <span className='text-blue-600'>TECH</span>
        </h2>
     
      </div>
    </nav> 
   /* <nav className='bg-blue-500'>
      <div className='flex mt-10 align-element flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'> 
      <h2>web <span className='text-red-600'>dev</span></h2>
      <div className='flex gap-x-3'>
        {
          links.map((link)=>{
            const{id,href,text} =link;
            return(
            <a href={href} className='hover:text-emarld-600'>{text}</a>
            )
          })
        }
      </div>

      </div>

    </nav>*/
  );
};
export default Navbar;
