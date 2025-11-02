import React from "react";
import "./Ticker.css";

function Ticker(){
    const text = "WUBBA LUBBA DUB DUB! Добро пожаловать в мультивселенную Portal Cinema IT-122! Готовы к приключениям? 🚀 ";
    
    return(
        <div className="ticker-container">
            <div className="ticker-text">
                {text.repeat(3)}
            </div>
        </div>
    )
}

export default Ticker;