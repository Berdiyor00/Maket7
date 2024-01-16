import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import BlofApi from "../Blog.json";
import Footer from "../Components/Footer";
import { SlBasketLoaded } from "react-icons/sl";

const Blog = () => {
  const [x, setX] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlog, setFilteredBlog] = useState([]);

  const handleSearch = () => {
    const filteredBlog = BlofApi.filter((element) =>
      element.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlog(filteredBlog);
  };

  let y = () => {
    if (x !== false) {
      setX(false);
    }
    if (x !== true) {
      setX(true);
    }
  };

  return (
    <>
      <main className="main__blog__bg">
        <section className="w-full pt-[44px] md:pt-[20px]   md:bg-[#fff0] bg-[#ff961d]   ">
          <div className="container">
            <div className="flex justify-between items-center relative text-[#FFFFFF]" >
            <NavLink to='/'>
<h2 className="font-normal text-[26px] text-[#000] flex items-center gap-[12px]">My<span>Book</span><span className="w-[1px] h-[24px] bg-[#DEDEDE]"></span> <SlBasketLoaded/> </h2>
</NavLink>
              <div className="font-medium text-[16px] ">
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

                      <button className="w-[189px] bg-white text-[#000000] font-medium text-[26px] h-[58px] rounded-[30px]">
                        
                        Login
                        </button>
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
                      <NavLink to='/login'>

                      <button className="w-[189px] bg-white text-[#000000] h-[58px] rounded-[30px] mt-4">Login</button>
                      </NavLink>
                     </li>
                   </ul>
                    
            </div>
              </div>
              <button onClick={y} className=" xbtn md:hidden ">
                {x ? <AiOutlineClose /> : <TbMenuDeep />}
              </button>
            </div>
          </div>
        </section>
        <section>
          <main>
            <div className="container">
              <div className="text__wrapper md:w-[770px] pt-[170px]">
                <h1 className="pl-[40px] md:pl-[0] text-[38px] font-bold uppercase md:font-bold md:uppercase md:text-[75px]">
                  blog mybook
                </h1>
                
                <p className="pl-[40px] md:pl-[0] md:text-[25px] md:capitalize font-medium">
                  lightweight article where discussing matters relating to the
                  book
                </p>
                <div className="relative z-[]">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="pl-[36px] pt-[19px] pb-[19px] bg-[#F5F6F8] text-[black] md:w-[350px]  outline-none"
                    placeholder="Search Book"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute top-[15px] left-[135px] md:top-[15px] md:left-[270px] h-[30px] w-[70px] rounded bg-[#FF971D] text-[#fff] hover:bg-white hover:text-[#FF971D]"
                  >
                    Search
                  </button>
                  <IoSearch className="text-[#FF971D] absolute top-[24px] left-[10px]" />
                </div>
              </div>
            </div>
          </main>
        </section>
      </main>
      <main>
        <section>
          <div className="container">
            <div className="flex flex-wrap gap-[50px] mt-[40px] justify-center">
              {filteredBlog.length > 0
                ? filteredBlog.map((element, index) => (
                    <div key={index} className="flex">
                      <div>
                        <div className="flex">
                         
                          <img
                            src={element.imageLink}
                            alt=""
                            className="w-[350px] h-[450px]"/>
                          
                        </div>
                        {element.author}
                        <div>{element.language}</div>
                      </div>
                    </div>
                  ))
                : BlofApi.map((element, index) => (
                    <div key={index} className="flex">
                      <div>
                        <div className="flex">
                          <NavLink to='/login'>

                          <img
                            src={element.imageLink}
                            alt=""
                            className="w-[270px] h-[370px] rounded"
                            />
                            </NavLink>
                        </div>
                        <p className="text-center pt-[20px]" >

                        {element.author}
                        </p>
                        <div>
                          <p className="text-center    font-serif pt-[20px]">
                            {element.language}
                            
                            </p>
                            </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Blog;
