import React from "react";
import "./style.css"

const BeerPong = () => {
    return (
        <div className="beerpong">
            <div className="beerpong-inner">
                <h1>BEER PONG!</h1>
                <div className="beerimage-wrap">
                    <img alt="" src="/image/beerpong.png" />
                </div>
            </div>
        </div>
    )
}

export default BeerPong;