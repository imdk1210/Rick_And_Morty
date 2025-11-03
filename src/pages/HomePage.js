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
            <Slider/>
        </div>
    );
}
export default HomePage;
