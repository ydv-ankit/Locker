import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Card from "./Card";
import { getPayload, getCookieValue } from '../utils/getPayload.js'
// import AddData from './AddData'

import '../styles/Data.css'

const Data = ({ props }) => {
    const [userData, setUserData] = useState([]);

    const getData = async (id) => {
        try {
            const response = await fetch('http://localhost:8080/userdata', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userID: id
                })
            })
            const data = await response.json()
            return data
        } catch (err) {
            return err
        }
    }

    function handleClick(e) {
        window.location.replace('/add')
    }

    useEffect(() => {
        const userToken = getCookieValue('userToken')
        if (userToken) {
            const userID = getPayload(userToken).userID
            const fetchData = async () => {
                try {
                    const data = await getData(userID)
                    setUserData(data)
                }
                catch (err) {
                    console.log(err)
                }
            }
            fetchData()
        } else {
            window.location.replace("/");
        }
    }, [])


    if (userData.length === 0) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <div className="container-wide">
                {userData.map((data, index) => {
                    return (
                        <Card key={index} site={data.site} url={data.url} username={data.username} email={data.email} password={data.password} other_details={data.other_details} />
                    )
                })}
                <div className="add">
                    <button onClick={handleClick}>Add More</button>
                </div>
            </div>
        </>
    )
}

export default Data;