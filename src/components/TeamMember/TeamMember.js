import React from "react";
import "./style.css"

const TeamMember = ({ image, name, role }) => {
    return (
        <div className="team-member">
            <img alt="" src={`/image/team${image}.png`} />
            <h5>{name}</h5>
            <p>{role}</p>
        </div>
    )
}

export default TeamMember;