import React, { useEffect, useState } from "react";
import '../styles/Data.css'
import Loader from "./Loader";
import Card from "./Card";
import { getPayload, getCookieValue } from '../utils/getPayload.js'
import { getData } from "../utils/getData";

const Data = ({ props }) => {

    const [userData, setUserData] = useState([]);

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
            console.log("not found")
        }
    }, [])


    if (userData.length === 0) {
        return (
            <Loader />
        )
    }

    return (
        <div className="container-wide">
            {userData.map((data, index)=>{
                return (
                    <Card key={index} site={data.site} url={data.url} username={data.username} email={data.email} password={data.password} other_details={data.other_details} />
                )
            })}
        </div>
    )
}

export default Data;