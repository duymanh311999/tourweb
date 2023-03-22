import React from 'react'
import  '../../../App.css';
import Hotel from '../../Hotel/Hotel'

function Product() {
    return ( 
        <>
            <h1 className='products'>
                Tìm khách sạn giá tốt
                    <span>Cơ hội đặt phòng khách sạn với giá tốt nhất.</span>
            </h1>
            <Hotel />
        </>
     );
}

export default Product;