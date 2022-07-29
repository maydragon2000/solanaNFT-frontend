import React from "react";
import { NavLink } from "react-bootstrap";
import "./style.css"

const Campus = () => {
    return (
        <div className="campus">
            <div className="campus-inner">
                <h1>CAMPUS ACTIVITIES</h1>
                <div className="row">
                    <div className="col-6">
                        <NavLink href="/staking" className="stakingbutton">STAKING</NavLink>
                        <NavLink href="" className="storebutton">MERCH STORE</NavLink>
                    </div>
                    <div className="col-6">
                        <NavLink href="/marketplace" className="marketplacebutton">MARKETPLACE</NavLink>
                        <NavLink href="/beerpong" className="beerpongbutton">BEER PONG</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campus;