import "./ListItem.css"
import ListItem from './ListItem'

function List() {
 
    return ( 
        <>      
            <div className='cards'>
            <h1>TOUR DU LỊCH</h1>
            <div className='cards__list__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <ListItem
                    src='images/hue.jpg'
                    text='Hà Nội - Huế'
                    time='T2: 25 - T3: 2, 3, 14, 28'
                    description='5 Ngày 4 Đêm'
                    price='35.000.000Đ'
                    label='Bán chạy nhất'
                    path='/sighup'
                    />
                    <ListItem
                    src='images/nhattrang.jpg'
                    text='Hà Nội - Nha Trang'
                    time='CN: 26 - T4: 1, 7, 26'
                    description='4 Ngày 3 Đêm'
                    price='20.000.000Đ'
                    label='Bán chạy nhất'
                    path='/sighup'
                    />
                </ul>
                <ul className='cards__items'>
                    <ListItem
                    src='images/Hcm.jpg'
                    text='Hà Nội - HCM'
                    time='T3: 25 - T4: 1, 7, 26, 28'
                    description='3 Ngày 2 Đêm'
                    price='15.000.000Đ'
                    label='Siêu khuyến mãi'
                    path='/sighup'
                    />
                    <ListItem
                    src='images/Da nang.jpg'
                    text='Hà Nội - Đà Đẵng'
                    time='T4: 28 - T8: 2, 4, 20, 28'
                    description='3 Ngày 2 Đêm'
                    price='12.000.000Đ'
                    label='Siêu khuyến mãi'
                    path='/sighup'
                    />
                    <ListItem
                    src='images/Phu quoc.jpg'
                    text='Hà Nội - Phú Quốc'
                    time='T3: 25 - T4: 1, 7, 26, 28'
                    description='5 Ngày 4 Đêm'
                    price='30.000.000Đ'
                    label='Giới hạn'
                    path='/sighup'
                    />
                </ul>
                <ul className='cards__items'>
                    <ListItem
                    src='images/halong.jpg'
                    text='Hà Nội - Hạ Long'
                    time='T3: 25 - T4: 1, 7, 26, 28'
                    description='3 Ngày 2 Đêm'
                    price='15.000.000Đ'
                    label='Siêu khuyến mãi'
                    path='/sighup'
                    />
                    <ListItem
                    src='images/Da lat.jpg'
                    text='Hà Nội - Đà Lạt'
                    time='T2: 25 - T3: 2, 3, 14, 28'
                    description='5 Ngày 4 Đêm'
                    price='18.000.000Đ'
                    label='Siêu khuyến mãi'
                    path='/sighup'
                    />
                    <ListItem
                    src='images/Ta xua.jpg'
                    text='Hà Nội - Sơn La'
                    time='T3: 25 - T4: 1, 7, 26, 28'
                    description='5 Ngày 4 Đêm'
                    price='13.000.000Đ'
                    label='Giới hạn'
                    path='/sighup'
                    />
                </ul>
                </div>
            </div>
            </div>
        </>
     );
}

export default List;