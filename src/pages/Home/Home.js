import React from "react";
import TeamMember from "../../components/TeamMember/TeamMember";
import { NavLink } from "react-bootstrap";
import { FaDiscord, FaTwitter } from "react-icons/fa"
import "./style.css"

const Home = () => {
    return (
        <div className="home">
            <div className="welcome row">
                <div className="left col-6">
                    <h1>Welcome to SMU!</h1>
                    <p>Recapture the glory days of university! Enrol your student, send them to class, play some beer pong and hey, you just might graduate! You and 3,333 classmates in the class of 2022 are making history and turning up all across the SOlana Blockchain! </p>
                </div>
                <div className="right col-6">
                    <img alt="" src="/image/welcome-monkey.png" />
                </div>
            </div>
            <div id="roadmap" className="roadmap">
                <h1 className="title">ROADMAP V2</h1>
                <div className="roadmap-inner row">
                    <div className="col-6 left">
                        <div className="march">
                            <div className="march-inner">
                                <h1>MARCH <img alt="" className="sqare" src="/image/sqare-left.png" /></h1>
                                <h2>WEBSITE REFRESH & STAKING LAUNCH</h2>
                                <p>Now that we’re a mature collection, it was only right that we upgraded our website to house all the greatness that we’ve got planned for you! This refresh is also facilitating the launch of our staking feature (Finally!). Staking will live in the CAMPUS tab of the website and is where you can access all things SMU. We will be launching a LP to accompany staking which will trade in USDC/SMU. </p>
                            </div>
                        </div>
                        <div className="may">
                            <div className="may-inner">
                                <h1>MAY<img alt="" className="sqare" src="/image/sqare-left.png" /></h1>
                                <h2>GRADUATION (MUTATION)</h2>
                                <p>You’ve been sending your student to class, learning lots and now it’s time to graduate! Holding SMU Students and $SMU Tokens will allow you to pay your final tuition fee to graduate your student and let him start a career as a hard working career monkey. You earn more after your graduate right?</p>
                                <h2>MARKETPLACE</h2>
                                <p>A place to spend your hard earned $SMU tokens! We will be selling and auctioning off rare SMU’s and other blue chip project NFT’s to holders to bolster their NFT wallet with the best of the best!</p>
                                <h2>TURN KEY CONSULTING</h2>
                                <p>Are you a project that is looking to moon? Rebuild? Launch? Get in touch with our team and we will walk you through how we can help you acheive your goals as a project. Our talented consultants will work directly with your team to ensure best possible outcomes. Fees are negotiable depending on scope of work and can be paid in $SOL to the project or paid after a successful mint.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 right">
                        <div className="april">
                            <div className="april-inner">
                                <h1><img alt="" className="sqare" src="/image/sqare-right.png" />APRIL </h1>
                                <h2>PLACEMENT OFFICER</h2>
                                <p>Placement officer will be a place for projects to post roles for SMU Holders to apply to. Each application will come with an $SMU Token fee. The placement officer will also have an area for you to include your resume and expertise so projects can come and search on their own. </p>
                                <h2>BEER PONG</h2>
                                <p>Need we say more? A merch box with items voted on by the community will be available to purchase for $SMU token and sent directly to your door. Are you excited? We are...</p>
                                <h2>MERCHANDISE STORE</h2>
                                <p>Merchandise is here! You can head over to the merchandise store to buy your favourite hoodies, hats and more to rep SMU wherever you go!</p>
                            </div>
                        </div>
                        <div className="soon">
                            <div className="soon-inner">
                                <h1><img alt="" className="sqare" src="/image/sqare-right.png" />SOON</h1>
                                <h2>LEARN 2 EARN</h2>
                                <p>We are a university after all? Enrol yourself in our carefully curated classes and learn everything you need to know about the world of Web3, Cryptocurrency and NFTs! There will be classes for the biggest beginners and even some Advanced Placement courses for our more experienced students! You’ll earn $SMU as you learn and graduate with an NFT to prove you did it!</p>
                                <h2>TEACH 2 EARN</h2>
                                <p>Are you an expert in your field? Do you want to teach a class to SMU Students? You could earn a steady salary of $SMU Token by imparting your knowledge to the community! Get in touch with us, we look forward to working with you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="team" className="team">
                <h1>THE TEAM</h1>
                <div className="team-member-list">
                    <div className="top">
                        <TeamMember image={1} name="STAGE" role="CEO/COO" />
                        <TeamMember image={2} name="Pres" role="Founder/Dev" />
                        <TeamMember image={3} name="TAGZIE" role="CFo/CTO/CReative" />
                    </div>
                    <div className="second">
                        <TeamMember image={4} name="Unique" role="Business Manager" />
                        <TeamMember image={5} name="BEARVAULT" role="DAO FUND MANAGER" />
                        <TeamMember image={6} name="TRIXX" role="LOGISTICS LEAD" />
                        <TeamMember image={7} name="STICKY" role="COMMUNITY LEAD" />
                    </div>
                </div>
            </div>
            <div id="link" className="link">
                <h1>LINKS</h1>
                <div className="link-wrap">
                    <NavLink href="" className="discord"><FaDiscord /></NavLink>
                    <NavLink href="" className="me"><img alt="" src="/image/me.svg" /></NavLink>
                    <NavLink href="" className="twitter"><FaTwitter /></NavLink>
                </div>
            </div>
            <div className="footer-boder">

            </div>
            <div className="footer">
                <p>All Rights Reserved © 2022 - Privacy Policy | Terms of Service | Ownership</p>
            </div>
        </div>
    )
}

export default Home;