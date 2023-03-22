import React from 'react'
import  '../../../App.css';
import List from '../../ListItem/List';

function Services() {
    return ( 
        <>
            <div className='services'>
                <h1 className='header-text'>Đặt vé máy bay giá rẻ</h1>  
                <h2 className='header-text--1'>Miễn phí taxi sân bay - Giảm tới <span className='text--1'>1,5 triệu đồng!</span></h2> 
            </div>
            <List/>
        </>
     );
}

export default Services;