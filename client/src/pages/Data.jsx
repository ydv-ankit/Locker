import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Card from "./Card";
import { getPayload, getCookieValue } from '../utils/getPayload.js'
import { useNavigate } from 'react-router-dom'
import '../styles/Data.css'

const Data = () => {
    const navigate = useNavigate()

    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    const getData = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_HOST}/userdata`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userID: id
                })
            })
            console.log(response)
            const data = await response.json()
            if (data.error) {
                setError("ERROR!! Try again later ...")
                return null
            }
            return data
        } catch (err) {
                setError("Server unreachable !!")
                return null
        }
    }

    function handleClick(e) {
        navigate('/add')
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
            navigate('/')
        }
        setTimeout(() =>
            setIsLoading(false), 1000)
    }, [navigate])


    if (isLoading) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <div className="container-wide">
                {userData !== null && userData.map((data, index) => {
                    return (
                        <Card key={index} site={data.site} url={data.url} username={data.username} email={data.email} password={data.password} other_details={data.other_details} />
                    )
                })}
                <div className="add">
                    <div className="text">{error != null ? error : (userData.length === 0 ? "No Data available" : "")}</div>
                    <button onClick={handleClick}>Add More</button>
                </div>
            </div>
        </>
    )
}

export default Data;