import React, { useState } from "react";
import './Hotel.css'
import HotelList from './HotelList'
import { Link } from "react-router-dom";

function Hotel(props) {

    const [items, setItems] = useState(HotelList)
    const filterItem = (headerItem) => {
        const updateItems = HotelList.filter((curElem) =>{
            return curElem.header === headerItem;
        });
        setItems(updateItems)
    };

    return (
        <div className="hotel-wrapper">         
            <div className="menu-tabs-container">
                <div className="menu-tabs">
                    <h1 className="menu-title">Tìm khách sạn</h1>
                    <button className="btn-tabs" onClick={() => setItems(HotelList)}>Tất cả</button><br/>
                    <button className="btn-tabs" onClick={() => filterItem('Vinoasis')}>Vinoasis</button><br/>
                    <button className="btn-tabs" onClick={() => filterItem('Vinpearl Resort')}>Vinpearl Resort</button><br/>
                    <button className="btn-tabs" onClick={() => filterItem('Amarin Resort')}>Amarin Resort</button><br/>
                </div>
            </div>    

             <div className="hotel-list-container">  
            {
                    items.map((elem) => {
                        const { id, image, header, location, sale, price } = elem;
                        return(
                            <>
                           
                                <Link to='/sighup' className="items-hotel">
                                        <img className="images-hotel" src={image} alt="" />
                                    <div className="items-detail-hotel">
                                        <h1 className="header-hotel">{header}<span> {location}</span></h1>
                                        <div className="location-hotel"><span><i className="fa-solid fa-location-dot"></i></span> {location}</div>
                                        <div className="sale-hotel"><span><i className="fa-solid fa-tag"></i></span> {sale}</div>
                                        <button className="price-hotel">{price}</button>
                                    </div>
                                </Link> 
                           
                            </>
                        )
                    })
            } 
            </div>       
        </div>
      );
}

export default Hotel;