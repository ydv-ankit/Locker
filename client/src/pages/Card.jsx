import React, { useRef, useState } from 'react'
import { getPayload, getCookieValue } from '../utils/getPayload.js'

import '../styles/Card.css'

const Details = ({ name, value, onclick }) => {
    return (
        <div className="card-details">
            <div className="name">{name}</div>
            <div className="value name" onClick={onclick}> {{ value } ? value : "Not provided"} </div>
        </div>
    )
}


const Card = (props) => {

    const site = useRef(props.site)
    const username = useRef(props.username)
    const email = useRef(props.email)
    const password = useRef(props.password)

    const [error, setError] = useState('')

    async function deleteme(e) {
        const userToken = getCookieValue('userToken')
        if (userToken) {
            const userID = getPayload(userToken).userID
            const req = {
                userID,
                site: site.current,
                username: username.current,
                email: email.current,
                password: password.current
            }
            try {
                const res = await fetch(`${process.env.REACT_APP_SERVER_HOST}/delete`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(req)
                })
                const data = await res.json()
                data.error ? setError('Cannot delete') : console.log(e.target.parentNode.parentNode.remove())
            } catch (err) {
                console.log(err)
            }

        }
    }

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
            <div className="details error">{error}</div>
            <div className="delete-btn" onClick={deleteme}><button>Delete</button></div>
        </div>
    )
}

export default Card
