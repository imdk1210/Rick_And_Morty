import React from "react";
import "./Ticker.css";

function Ticker(){
    const text = "WUBBA LUBBA DUB DUB! Добро пожаловать на фанатский сайт Рика и Морти! Исследуй все эпизоды мультивселенной! 🚀 ";
    
    return(
        <div className="ticker-container">
            <div className="ticker-text">
                {text.repeat(3)}
            </div>
        </div>
    )
}

export default Ticker;