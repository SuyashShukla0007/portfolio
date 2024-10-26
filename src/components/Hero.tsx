import img from '../assets/img2.png'
import { Contacts } from './Contacts';


export const Hero = () => {
  return (
    <div className="w-[100%] h-[30vh] md:h-[50vh] pl-4 md:pl-10 flex justify-between">
      <div className="md:flex items-center  md:mr-10">
        <p className="text-hero md:text-4xl mt-10">
          I'M
          <p className=" text-4xl  md:text-[55px] pl-4 md:pl-10 md:pt-5 text-Name">Suyash Shukla</p>
          <p className="mt-2 text-xl md:text-3xl md:mt-5 md:pt-5">
                     A Full Stack Developer 
          <div className='mt-4 text-black'></div>
          <Contacts/>

          </p>
          
        </p>
      </div>
      <img src={img} width={300}  alt="" className='border-customgray rounded-[100vw]' />
    </div>
  );
};
