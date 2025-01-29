import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Recomended = () => {
    const [book, getRecomended] = useState([]);
    useEffect(()=>{
        fetch("books.json")
        .then(res => res.json())
        .then((data) => {
            const recomended = [];
            data.map((d)=>{
                if(d.trending)
                    recomended.push(d);
            });

            getRecomended(recomended);
        })
    },[]);


    
  return (
    <div className='py-2'>
        <h2 className='text-3xl font-semibold mb-6'>Recomended</h2>
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
                     book.length > 0 && book.map((book,i)=>(
                        <SwiperSlide key={i} >
                            <BookCard book={book}/>
                        </SwiperSlide>
                    ))
               }
                
            </Swiper>

    </div>
  )
}

export default Recomended