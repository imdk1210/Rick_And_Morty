import React from "react";
import Ticker from "../components/Ticker";
import Slider from "../components/Slider";

function HomePage(){
    return(
        <div style={{ 
            width: '100%', 
            minHeight: '300px'
        }}>
            <Ticker/>
            <h1 style={{
                textAlign: 'center',
                color: '#A8E063',
                fontFamily: "'Comic Neue', sans-serif",
                fontSize: '48px',
                fontWeight: 'bold',
                textShadow: '0 0 8px rgba(168, 224, 99, 0.3)',
                margin: '30px 0',
                padding: '20px'
            }}>
                Портал в Мультивселенную Кино
            </h1>
            <Slider/>
        </div>
    );
}
export default HomePage;
