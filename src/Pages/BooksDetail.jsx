import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Bookss from "../Books.json";
import { IoArrowBackOutline } from "react-icons/io5";
import Footer from '../Components/Footer';

const DetailsPage = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(2);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setError(error.message);
      }
    };
    fetchBookDetails();
  }, [id]);

  if (!bookDetails) {
    if (error) {
      return <p>Error: {error}</p>;
    }
    return (
      <div className="wrapp fixed top-[30%] left-[45%]">
        <svg className="pencil" viewBox="0 0 200 200" width="200px" height="200px" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="pencil-eraser">
              <rect rx="5" ry="5" width="30" height="30"></rect>
            </clipPath>
          </defs>
          <circle className="pencil__stroke" r="70" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="439.82 439.82" strokeDashoffset="439.82" strokeLinecap="round" transform="rotate(-113,100,100)" />

          <g className="pencil__rotate" transform="translate(100,100)">
            <g fill="none">
            <circle className="pencil__body1" r="64" stroke="hsl(223,90%,50%)" strokeWidth="30" strokeDasharray="402.12 402.12" strokeDashoffset="402" transform="rotate(-90)" />
<circle className="pencil__body2" r="74" stroke="hsl(223,90%,60%)" strokeWidth="10" strokeDasharray="464.96 464.96" strokeDashoffset="465" transform="rotate(-90)" />
<circle className="pencil__body3" r="54" stroke="hsl(223,90%,40%)" strokeWidth="10" strokeDasharray="339.29 339.29" strokeDashoffset="339" transform="rotate(-90)" />

            </g>
            <g className="pencil__eraser" transform="rotate(-90) translate(49,0)">
  <g className="pencil__eraser-skew">
    <rect fill="hsl(223,90%,70%)" rx="5" ry="5" width="30" height="30" />
    <rect fill="hsl(223,90%,60%)" width="5" height="30" clipPath="url(#pencil-eraser)" />
    <rect fill="hsl(223,10%,90%)" width="30" height="20" />
    <rect fill="hsl(223,10%,70%)" width="15" height="20" />
    <rect fill="hsl(223,10%,80%)" width="5" height="20" />
    <rect fill="hsla(223,10%,10%,0.2)" y="6" width="30" height="2" />
    <rect fill="hsla(223,10%,10%,0.2)" y="13" width="30" height="2" />
  </g>
</g>

<g className="pencil__point" transform="rotate(-90) translate(49,-30)">
  <polygon fill="hsl(33,90%,70%)" points="15 0,30 30,0 30" />
  <polygon fill="hsl(33,90%,50%)" points="15 0,6 30,0 30" />
  <polygon fill="hsl(223,10%,10%)" points="15 0,20 10,10 10" />
</g>

          </g>
        </svg>
      </div>
    );
  }

  const { title, volumeInfo } = bookDetails;

  return (
   
    <div className="bacgroundwrap">
      <NavLink to='/'>

      <h2 className='absolute md:mt-[60px] text-[48px] md:ml-[50px]'>
      <IoArrowBackOutline />
      </h2>
      </NavLink>
    <div className="container pl-[20px]">

    <div className="md:flex md:items-start md:justify-between md:gap-[100px] md:absolute md:top-[200px] md:bg-white">
    <div className=" w-[200px] md:w-[1129px] h-[1186px] md:bg-white">
    <div className="hidden  md:flex left-0 md:left-[38px] top-[532px] absolute flex-col  justify-center md:justify-start items-center">
        <div className="flex-col justify-start items-start gap-[54px] md:gap-0 md:flex">
            <div className="flex-col mt-[100%] md:mt-[0] justify-start items-start gap-[25px] md:flex">
                <div className="text-black text-[25px] font-normal font-['Rubik'] leading-[23px] tracking-tight">Sinopsis</div>
                <div className=" max-w-[200px] md:max-w-[654px] h-[179px] text-black text-opacity-60 text-base font-normal font-['Rambla'] leading-relaxed md:tracking-tight">  {volumeInfo.description.slice(0,200)}</div>
            </div>
            <div className=" md:flex justify-start items-start md:gap-[25px] hidden ">
                <div className="w-[108px] h-[39px] relative pt-[0px]">
                    <div className="w-[108px] h-[39px] left-0 top-0 absolute bg-neutral-200 rounded-[10px]" />
                    <div className="left-[25px] top-[8px] absolute text-black text-opacity-30 text-base font-normal font-['Rubik'] leading-[23px] tracking-tight">Biografi</div>
                </div>
                <div className="w-[108px] h-[39px] relative">
                    <div className="w-[108px] h-[39px] left-0 top-0 absolute bg-neutral-200 rounded-[10px] mt-[100px] md:mt-[0]" />
                    <div className="left-[8px] top-[8px] absolute text-black text-opacity-30 text-base font-normal font-['Rubik'] leading-[23px] md:mt-0 tracking-tight mt-[100px] ">AutoBiografi</div>
                </div>
                <div className="w-[108px] h-[39px] relative">
                    <div className="w-[108px] h-[39px] left-0 top-0 absolute bg-neutral-200 rounded-[10px]" />
                    <div className="left-[24px] top-[8px] absolute text-black text-opacity-30 text-base font-normal font-['Rubik'] leading-[23px] tracking-tight">Memoar</div>
                </div>
            </div>
         
        </div>
        <div className="w-[479px] h-[50px] relative">
          <button className="md:w-[479px] h-[50px] left-0 mt-[30px] absolute rounded-[10px] border bg-white border-amber-500 hidden md:block">
            <div className="left-[173.50px] top-[13px] absolute text-amber-500 text-xl font-normal font-['Rubik'] capitalize hidden md:block"> See comment    </div>

          </button>
        </div>
    </div>
    <div className="md:left-[237px] md:top-[47px] md:absolute md:flex-col md:justify-start items-start md:gap-11 md:inline-flex md:max-w-[600px] md:ml-[90px]">
        <div className="flex-col justify-start items-start gap-[5px] md:gap-[25px] flex">
            <div className="justify-start items-center gap-[15px] md:gap-[25px] inline-flex">
                <div className="text-black text-[57px] text-center ml-[0] md:ml-[40px] font-medium font-['Rubik'] capitalize text-wrap"><p>{volumeInfo.title.slice(0,10)}</p></div>
         
            </div>
            <div className="flex-col justify-start items-start md:gap-[15px] flex">
                <div className="justify-start items-start gap-[25px] inline-flex">
                    <div className="text-black text-opacity-60 text-base font-normal font-['Rambla'] capitalize">by Fiersa besari</div>
                    <div className="text-black text-opacity-60 text-base font-normal font-['Rambla'] capitalize">1 juli 2016</div>
                </div>
                <div className="w-[90.49px] h-[14.29px] relative">
                    <div className="w-[14.29px] h-[14.29px] left-0 top-0 absolute flex-col justify-start items-start inline-flex" />
                    <div className="w-[14.29px] h-[14.29px] left-[19.05px] top-[-0px] absolute flex-col justify-start items-start inline-flex" />
                    <div className="w-[14.29px] h-[14.29px] left-[38.10px] top-[-0px] absolute flex-col justify-start items-start inline-flex" />
                    <div className="w-[14.29px] h-[14.29px] left-[57.15px] top-[-0px] absolute flex-col justify-start items-start inline-flex" />
                    <div className="w-[14.29px] h-[14.29px] left-[76.20px] top-[-0px] absolute flex-col justify-start items-start inline-flex" />
                </div>
            </div>
            <div className="justify-start items-start gap-[25px] inline-flex">
                <div className="text-black text-opacity-60 text-base font-normal font-['Rambla'] capitalize">{volumeInfo.contentVersion && volumeInfo.contentVersion.slice(0, 4) + "M"}</div>
                <div className="text-black text-opacity-60 text-base font-normal font-['Rambla'] capitalize">{volumeInfo.contentVersion && volumeInfo.contentVersion.slice(13, 20) + "K"}</div>
            </div>
        </div>
        <div className="self-stretch justify-start items-start gap-5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
            <div className="bg-amber-500 btn  border-amber-500 border w-[176.50px] px-7 py-3 mt-[10px] md:bg-white rounded-[10px] justify-center items-center gap-1 inline-flex">
              <NavLink to='/login'>

    <button className="text-amber-500 text-lg btns font-medium font-['Rubik'] capitalize">Buy now</button>
              </NavLink>
</div>
            </div>
          
        </div>
    </div>
    <div className=" ml-[30px] mt-[50px] md:img w-[278px]">
               {volumeInfo && volumeInfo.imageLinks && (
                <img src={volumeInfo.imageLinks.thumbnail} alt="Book Cover" className=' max-w-[500px] w-full relative h-[435px] object-cover' />
              )}
            </div>
</div>
<div className="datawrapp mt-[-200px] md:absolute left-[1050px] pl-[10px] bg-white md:top-[200px] md:w-[300px] md:ml-[100px]">


{Bookss.map((book, index) => (
           <div key={index} className='column'>
           
             <img src={book.image} alt={book.title} className='w-[350px]'  />
             <h2>{book.title}</h2>
             <p className='text-[#a7acb5fa]'>{book.subtitle}...</p>
             
             <Rating
         name="simple-controlled"
         value={value}
         onChange={(event, newValue) => {
           setValue(newValue);
         }}/>
             <p>
             <a href={book.url} target="_blank" rel="noopener noreferrer" className='text-[green]'>
               More Info
           </a>
             </p>
            
          </div>
        ))}
        </div>

</div>
</div>
<div className=" absolute md:top-[5150px] top-[6150px] left-0 right-0  bg-[#FF971D] text-[#fff] w-full">

<Footer/>
</div>
            
    </div>

  );
};

export default DetailsPage;
