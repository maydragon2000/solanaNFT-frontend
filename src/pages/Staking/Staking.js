import React from "react";
import "./style.css"

const Staking = () => {
    return (
        <div className="staking">
            <div className="staking-inner">
                <h1>STAKING</h1>
                <div className="back-wrap">
                    <img alt="" src="/image/arrowleft.svg" />
                    <div className="backline">
                    </div>
                    <a href="/campus" className="backbutton">BACK</a>
                </div>
                <div className="staking-wrap row" >
                    <div className="left col-6">
                        <h2>UNSTAKED STUDENTS</h2>
                        <div className="staking-box">
                            <div className="student-wrap">
                                <div>
                                    <img alt="" src="/image/staking1.png" />
                                    <p>SMU #2789</p>
                                </div>
                                <button className="stake-button">STAKE</button>
                            </div>
                        </div>
                    </div>
                    <div className="right col-6">
                        <h2>STAKED STUDENTS</h2>
                        <div className="staking-box">
                            <div className="student-wrap">
                                <div>
                                    <img alt="" src="/image/staking2.png" />
                                    <p>SMU #1903</p>
                                </div>
                                <h3>$SMU EARNED <br /> 0.0000</h3>
                                <button className="stake-button">UNSTAKE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staking;