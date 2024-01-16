import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../reducer/reducersa';
import { NavLink } from 'react-router-dom';
import Swipdata from './../Books.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Tilt } from 'react-tilt';
import { Autoplay,  Navigation } from 'swiper/modules';

const Main2 = () => {
  const dispatch = useDispatch();
  const userss = useSelector((state) => state.user.userss);
  const [value, setValue] = useState(2);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const defaultOptions = {
    reverse: false,
    max: 75,
    perspective: 1000,
    scale: 1.1,
    speed: 2000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.05,.98,.52,.99)",
  };

  return (
    <>
      <Box
        sx={{ '& > legend': { mt: 2 } }}
      ></Box>

   
      <h1 className="absolute left-[70px] md:left-[330px] mt-[10px]  text-black text-[40px] font-medium font-['Rubik'] tracking-tight">Recommended</h1>

      
      <div className="md:w-[2000px] mt-0 bg-[#ffffff] pt-[40px] md:pt-[90px] grid gap-4 grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-[380px] md:gap-4 md:grid-row-gap-[90px] md:pl-[200px] pl-[20px]">
        {userss.slice(0, 8).map((user, index) => (
          <div key={index} className=" w-[300px] md:w-[386px] md:mb-[80px] mb-0 md:h-[360px] pt-[60px]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:flex gap-[10px] md:pt-[0px]">
            <Tilt options={defaultOptions} style={{ height: 150, width: 300 }}>
              <img
                src={user.volumeInfo.imageLinks.thumbnail}
                alt="img"
                className="md:w-[207px] md:h-[225px] md:ml-[-68px] object-cover shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              />
            </Tilt>
            <div className=" ml-[10px] md:ml-[-50px]">
              <p className="text-[#000000] mt-[50px] capitalize">{user.volumeInfo.title.slice(0, 9)}</p>
              <p className="text-[#00000077]">
                by {user.volumeInfo.authors && user.volumeInfo.authors.length > 0
                  ? user.volumeInfo.authors.slice(0, 50).join(', ')
                  : 'N/A'}
              </p>
              <div className="flex text-[#000] gap-[20px] items-center ">
                <div className="flex ">
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
                <p className="text-nowrap">1,988,288 voters</p>
              </div>
              <p className="text-[#504f4f] mt-[20px]">{user.volumeInfo.description.slice && user.volumeInfo.description.slice(0, 60)}...</p>
              <NavLink to={{ pathname: `/details/${user.id}`, state: user }}>
                <button className="mt-[10px] ml-[10px] border mb-[100px] pl-[50px] pr-[50px] pt-[7px] pb-[7px] self-stretch rounded-[10px] border-solid border-[#FF971D] bg-[#ff97203d] text-[#FF971D] capitalize font-medium hover:bg-[#fff] hover:text-[#FF971D]">
                  Buy now
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>

 
      <div className="absolute left-[-20px] md:left-[0]  right-0 top-[2700px] md:top-[-150px]">
        <div className="absolute left-[330px] right-0 top-[3207px] md:top-[2650px]  ">
          <h1 className=" mt-[-200px] md:mt-[70px]  text-black ml-[-200px] md:ml-[0px] text-[40px] font-medium font-['Rubik'] tracking-tight">Popular</h1>
          
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={-85}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true, 
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
                loop: true, 
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
                loop: true, 
              },
            }}
          >
            {/* Swiper slides for Popular Books */}
            {Swipdata.map((book, index) => (
              <SwiperSlide key={index}>
                <div className=' text-left '>
                  <NavLink to='/login'>
                    <img src={book.image} alt={book.title} className="md:w-[350px]" />
                  </NavLink>
                  <h2 className='ml-[55px] mt-[-20px] md:mt-[-25px]'>{book.title.slice(0, 17)}...</h2>
                  <div className="flex ml-[50px] ">
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Main2;
