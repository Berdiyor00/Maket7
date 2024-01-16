import { useState,useEffect } from "react"
import {  NavLink } from "react-router-dom"
import { TbMenuDeep } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import {  IoSearch } from "react-icons/io5";
import Section from "./main1"
import Main from "../Components/main2";
import Footer from "./Footer";
import { SlBasketLoaded } from "react-icons/sl";
const Navbar = () => {
  let [x,setX]=useState(false)
  let y=()=>{
    if(x!==false){
      setX(false)
    }
    if(x!==true){
      setX(true)
    }
  }

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "-20px";
      } else {
        document.getElementById("navbar").style.top = "-150px";
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div>

   
    <header>
       <nav className="w-full pt-[44px] fixed top-0 left-0 right-0" id="navbar">
        <div className="container">
            <div className="flex justify-between items-center relative text-[#FFFFFF]  ">
              <NavLink to='/'>

              <h2 className="font-normal text-[26px] text-[#000] flex items-center gap-[12px] ">My<span>Book</span><span className="w-[1px] h-[24px] bg-[#DEDEDE]"></span> <SlBasketLoaded/> </h2>
              </NavLink>
           <div className="font-medium text-[16px] ">
                   <ul className=" hidden md:flex md:items-center  md:gap-10 ">
                     <li>
                       <NavLink to='/'>Explorer</NavLink>
                     </li>
                     <li>
                       <NavLink to='/shop'>Shop</NavLink>
                     </li>
                   
                     <li>
                       <NavLink to='/blog'>Blog</NavLink>
                     </li>
                     <li>
                      <NavLink to='/login'>
                      <button className="w-[189px] bg-white text-[#000000] font-medium text-[26px] h-[58px] rounded-[30px]">Login</button>
                      </NavLink>
                     </li>
                   </ul>
                   
                   <ul className={x? ' z-[10]  block md:hidden absolute left-[-15px] pt-[20px] pl-[50px] top-8  w-full h-lvh bg-[#FF971D]':'block md:hidden h-0 absolute left-[-400px] top-8 z-[10]  w-full'}>
                   <li>
                       <NavLink to='/'>Explorer</NavLink>
                     </li>
                     <li>
                       <NavLink to='/shop'>Shop</NavLink>
                     </li>
                   
                     <li>
                       <NavLink to='/blog'>Blog</NavLink>
                     </li>
                     <li>
                      <NavLink to="/profel">

                      <button className="w-[189px] bg-white text-[#000000] h-[58px] rounded-[30px] mt-4">Login</button>
                      </NavLink>
                     </li>
                   </ul>
                    
            </div>
            <button onClick={y} className="xbtn md:hidden ">
            {x?<AiOutlineClose/>:<TbMenuDeep/> }
            </button>
            </div>
        </div>
        </nav>
        <section>
          <main>
            <div className="container">
              <div className="text__wrapper  md:w-[770px]  pt-[170px]">

            <h1 className=" pl-[40px] md:pl-[0] text-[38px] font-bold uppercase md:font-bold md:uppercase md:text-[75px]" >read and add 
                  your insight
            </h1>
            <p className="pl-[40px] md:pl-[0] md:text-[25px] capitalize md:capitalize font-medium">find your favorite book and read it here for free
  </p>
          <div className={x?'hidden':'relative'}id="transition">
            <input type="text" name="" id="" className="pl-[36px] pt-[19px] pb-[19px] bg-[#F5F6F8] text-[black] md:w-[350px]  outline-none" placeholder="Search Book" />
              <button className="absolute top-[15px] left-[135px] md:top-[15px] md:left-[270px] h-[30px] w-[70px] rounded bg-[#FF971D] text-[#fff] hover:bg-white hover:text-[#FF971D]">Search</button>
              <IoSearch className="text-[#FF971D] absolute top-[24px] left-[10px]"/>
                </div>
              </div>
            </div>
          </main>
        </section>
       </header>
       <main>
           <section className="w-full bg-[#F5F6F8]">
               <div className="containers">
                <div className="flex  justify-center" >
                  <div className=" md:w-[200px] bg-[#F5F6F8] pt-[20px] pl-[0px]   h-[1000px] md:pt-[20px] md:pl-[30px] ">
                  <Section/>
                  </div>           
               <Main/>            
                </div>
                <div className=" absolute md:top-[3200px] top-[6150px] left-0 right-0  bg-[#FF971D] text-[#fff] w-full">

<Footer/>
</div>
               </div>
               
           </section>
           
       </main>
      
       </div>
  )
}

export default Navbar