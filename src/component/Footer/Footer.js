import React from "react";
import { Button } from "../Button/Button";
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Đăng ký để nhận được những ưu đãi hấp dẫn nhất đến từ chúng tôi
                </p>
                <p className="footer-subscription-text">
                    Bạn có thể hủy đăng ký bất cứ lúc nào
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Địa chỉ email của bạn"
                        className="footer-input"></input>
                        <Button buttonStyle="btn--outline" buttonSize="btn--medium">Đăng Ký</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Về chúng tôi</h2>
                        <Link to='/sighup'>Cách đăng ký</Link>
                        <Link to='/'>Dịch vụ</Link>
                        <Link to='/'>Thông tin</Link>
                        <Link to='/'>Đối tác</Link>
                        <Link to='/'>Các dịch vụ</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Câu hỏi</h2>
                        <Link to='/'>Cách để đặt vé</Link>
                        <Link to='/'>Các dịch vụ</Link>
                        <Link to='/'>Cổng thông tin</Link>
                        <Link to='/'>Các đối tác</Link>
                        <Link to='/'>Cách liên hệ</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Về chúng tôi</h2>
                        <Link to='/'>số điện thoại</Link>
                        <Link to='/'>website</Link>
                        <Link to='/'>Địa chỉ</Link>
                        <Link to='/'>Tài trợ</Link>
                        <Link to='/'>Cơ quan</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Mạng xã hội</h2>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>LinkedIn</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            LOGO <i className="fa fa-cube" />
                        </Link>
                    </div>
                    <small className="website-rights">LOGO 2023</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="social-icon-link instagram"
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Footer;