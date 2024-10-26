import { About } from "../components/About"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { Skills } from "../components/Skills"
import {ContainerScroll} from '../../@/components/ui/container-scroll-animation'
export  const Home=()=>{
  return(
    <>
    
    <div className="w-[100vw] h-[100vh] md:w-[50vw] grid-background  min-h-[200vh] md:mt-[10vh] pt-4  bg-customgray md:border md:border-homeBorder m-auto">
      <div className="flex justify-center mb-10 md:mt-10" >
      <Navbar/>
      </div>
      <Hero/>
      <About/>

      <div className="block md:hidden">
        <Skills/>
      </div>
      <div className="hidden md:block">
      <ContainerScroll titleComponent={""} children={<Skills/>} />
    </div>
    </div>
 
    </>
  )
}