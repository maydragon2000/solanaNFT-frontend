import React from "react";
import "./style.css";

const MarketNft = ({ image, name, number, price }) => {
    return (
        <div className="market-nft">
            <img alt="" src={`/image/nft${image}.png`} />
            <p>{name} #{number}</p>
            <p>{price} $SMU</p>
            <button>BUY NOW</button>
        </div>
    )
}

export default MarketNft;