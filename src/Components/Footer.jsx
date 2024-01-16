import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[orange]'>
    <div className='container text-[#fff] '>
        <div className="flex items-center justify-between pt-[20px] pb-[20px]">
            <span className=' hidden md:block md:opacity-0 md:w-[30%]'>
hello
            </span>
                  <NavLink to='/'>
                <li className=' list-none'>
                2020 MYBOOK
                </li>
                    </NavLink>   
                    <NavLink to='/'>
                <li className='list-none'>
                Explorer
                </li>
                      </NavLink> 
                      <NavLink to='/shop'>
                <li className='list-none'>
                Shop
                </li>
                        </NavLink> 
                        <NavLink to='/blog'>
                <li className='list-none'>
                About
                </li>
                          </NavLink>  
         
        </div>
    </div>
    </footer>
  )
}

export default Footer