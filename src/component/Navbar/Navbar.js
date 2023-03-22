import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from '../Button/Button';
import {ButtonLogin} from '../Button/ButtonLogin'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 1090) {
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(() =>{
        showButton();
    }, []);
    window.addEventListener('resize', showButton)
    

    const [token, setToken] = useState('');
    useEffect(() => {
        var run = localStorage.getItem("token");
        setToken(run);
    },[])
    

    return (  
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        LOGO
                        <i className="fa fa-cube"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Trang chủ                     
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                               Tour du lịch                    
                            </Link>                         
                        </li>
                        <li className='nav-item'>
                            <Link to='/product' className='nav-links' onClick={closeMobileMenu}>
                               Khách sạn                 
                            </Link>  
                        </li>
                        <li className='nav-item-button'>
                            <Link to='/sighup' className='nav-links-mobile' onClick={closeMobileMenu}>
                           Đăng ký
                           </Link>
                          
                           <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                           Đăng nhập
                           </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' buttonSize='btn--small'>Đăng ký</Button>}
                    <ButtonLogin buttonStyle='btn--outline' buttonSize='btn-none'>Đăng nhập</ButtonLogin>
                </div>  
            </nav>

        </>
    );
}

export default Navbar;