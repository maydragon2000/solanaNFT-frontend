import React from "react";
import MarketNft from "../../components/MarketNft/MarketNft";
import "./style.css"

const Marketplace = () => {
    return (
        <div className="marketplace">
            <div className="marketplace-inner">
                <h1>MARKETPLACE</h1>
                <div className="market-list">
                    <MarketNft image={1} name="DIAMOND HEAD " number={161} price={1500} />
                    <MarketNft image={2} name="MoneyBOy  " number={1564} price={50000} />
                    <MarketNft image={3} name="SOLGOD " number={1345} price={60000} />
                </div>
            </div>
        </div>
    )
}

export default Marketplace;