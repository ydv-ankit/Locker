import React from 'react'

import '../styles/Card.css'

const Details = ({ name, value, onclick }) => {
    return (
        <div className="card-details">
            <div className="name">{ name }</div>
            <div className="value name" onClick={onclick}> {{value} ? value : "Not provided"} </div>
        </div>
    )
}


const Card = (props) => {

    function clipy(e) {
        navigator.clipboard.writeText(e.target.innerText);
    }

    return (
        <div className="card">
            <div className="sitename">
                {(props.site) ? props.site : "Site"}
            </div>
            <Details name="Site URL" value={props.url} onclick={clipy} />
            <Details name="Username" value={props.username} onclick={clipy} />
            <Details name="Email ID" value={props.email} onclick={clipy} />
            <Details name="Password" value={props.password} onclick={clipy} />
            <Details name="Other Details" value={props.other_details} onclick={clipy} />
            <div className="delete-btn">Delete</div>
        </div>
    )
}

export default Card
