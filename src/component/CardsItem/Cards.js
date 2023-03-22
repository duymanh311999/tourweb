import React from "react";
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return ( 
        <div className='cards'>
      <h1>TOUR DU LỊCH NỔI BẬT</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/hue.jpg'
              text='Tour Huế Rẻ Review Kinh Nghiệm Du Lịch 2023'
              label='Bán chạy nhất'
              path='/sighup'
            />
            <CardItem
              src='images/nhattrang.jpg'
              text='Tour Nha Trang Rẻ Review Kinh Nghiệm Du Lịch 2023'
              label='Bán chạy nhất'
              path='/sighup'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Da nang.jpg'
              text='Tour Đà Nẵng Rẻ Review Kinh Nghiệm Du Lịch 2023'
              label='Siêu khuyến mãi'
              path='/sighup'
            />
            <CardItem
              src='images/Hcm.jpg'
              text='Tour HCM Rẻ Review Kinh Nghiệm Du Lịch 2023'
              label='Siêu khuyến mãi'
              path='/sighup'
            />
            <CardItem
              src='images/Phu quoc.jpg'
              text='Tour Phú Quốc Rẻ Review Kinh Nghiệm Du Lịch 2023'
              label='Siêu khuyến mãi'
              path='/sighup'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;