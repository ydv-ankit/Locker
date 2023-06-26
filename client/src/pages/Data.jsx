import React from "react";
import '../styles/Data.css'
import Loader from "./Loader";

const Data = ({props}) =>{

    const data = false;

    if(!data){
        return(
            <Loader/>
        )
    }
}

export default Data;