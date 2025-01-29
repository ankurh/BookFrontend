import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]
const TopSeller = () => {

    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("choose a genre");

    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then((data) => {
                setBooks(data);
            })
    }, []);
    const filteredBooks = selectedCategory==="choose a genre"? books:
    books.filter(book=>book.category===selectedCategory);
    return (
        <div className='py-10'>
            <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
            <div className='mb-8 flex items-center'>
                <select
                    name="category" id="category" onChange={(e) => setSelectedCategory((e.target.value).toLowerCase())} className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index) => (
                            <option value={category} key={index}  >{category}</option>
                        ))
                    }
                </select>
            </div>
            <Swiper
                 slidesPerView={1}
                 spaceBetween={30}
                 navigation={true}
                 breakpoints={{
                     640: {
                         slidesPerView: 1,
                         spaceBetween: 20,
                     },
                     768: {
                         slidesPerView: 2,
                         spaceBetween: 40,
                     },
                     1024: {
                         slidesPerView: 2,
                         spaceBetween: 50,
                     },
                     1180: {
                         slidesPerView: 3,
                         spaceBetween: 50,
                     }
                 }}
                 modules={[Pagination, Navigation]}
                 className="mySwiper"
            >
               {
                     filteredBooks.length > 0 && filteredBooks.map((book,i)=>(
                        <SwiperSlide key={i} >
                            <BookCard book={book}/>
                        </SwiperSlide>
                    ))
               }
                
            </Swiper>
            
        </div>

    )
}

export default TopSeller