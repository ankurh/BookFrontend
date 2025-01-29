import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineBars3 } from "react-icons/hi2";
import { CiSearch, CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import avatarImg from "../assets/avatar.png";
import { useSelector } from 'react-redux';

const navigation =[
    {name:"Dashboard", href:"/dashboard"},
    {name:"Orders", href:"/Orders"},
    {name:"Cart Page", href:"/cart"},
    {name:"Check Out", href:"/checkout"},

]
const Navbar = () => {
    const currentUser = false;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const count = useSelector((state) => state.cart.cartItems.length)
    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
            <nav className='flex justify-between items-center'>
                {/**left side */}
                <div className='flex items-center md:gap-16 gap-4'> 
                    <Link to="/"><HiOutlineBars3 className='size-6'/></Link>
                    <div className='relative sm:w-72 w-40 space-x-2'>
                    <CiSearch className='absolute inline-block left-3 inset-y-2 '/>
                    <input type="text" name="search" placeholder='what are you looking for?' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'  />

                    </div>
                </div>
                {/**right side */}
                <div className='relative flex items-center md:space-x-3 space-x-2'>
                    <div>
                        {
                           currentUser ? <>
                               <button onClick={()=>setIsDropdownOpen(!isDropdownOpen)}> <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500': ''}`}/></button>
                               {
                                isDropdownOpen&& (
                                    <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                        <ul className='py-2'>
                                            {
                                                navigation.map((item)=>(
                                                    <li key={item.name}>
                                                        <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>{item.name}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                               }
                           </>:<Link to="/Login"><CiUser className='size-6'/></Link> 
                        }
                        </div>
                        
                    <button className='hidden sm:block'>
                        <CiHeart className='size-6'/>
                    </button>
                    
                    <Link to="/cart" className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                        <CiShoppingCart className='size-6  '/>
                        <span className='text-sm font-semibold sm:ml-1'>{count}</span>
                    </Link>
                    
                        
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar;