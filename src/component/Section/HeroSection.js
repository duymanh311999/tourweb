import React from "react";
import { Button } from "../Button/Button";
import './heroSection.css'

function Herosection() {
    return ( 
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>HÀNH TRÌNH DU LỊCH</h1>
            <p>Hãy bắt đầu ngay hôm nay</p>
            <div className="hero-btns">
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--medium'
                >
                    BẮT ĐẦU NGAY
                </Button>
                <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--medium'
                >
                   XEM VIDEO <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
     );
}

export default Herosection;