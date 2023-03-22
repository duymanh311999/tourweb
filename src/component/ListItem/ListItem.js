import React from 'react';
import { Link } from 'react-router-dom';

function ListItem(props) {
  return (
    <>
      <li className='list-item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className="cards-name">
            <span><i className="fa-solid fa-location-dot"></i></span>
              {props.text}
             </div>
          
          <div className="text-travel">
              <span>
                  <i className="fa-regular fa-calendar-days"></i>
              </span>
          Thời gian: {props.time}
          </div>

          <div className="text-detail">
                <div className="description">{props.description}</div>
                <button className="price" >{props.price}</button>
          </div> 
        </Link>
      </li>
    </>
  );
}

export default ListItem;