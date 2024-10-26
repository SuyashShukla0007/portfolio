import img from '../assets/§.svg'
export const Navbar = () => {
  return (
    // <div className='flex md:justify-center  md:w-[50vw]'>
    //   <img src={img}width={15} alt="" />
      <ul className='list-none flex gap-10  text-textNav font-normal'>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    // </div>
  )
}
