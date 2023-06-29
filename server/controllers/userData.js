const { UserData } = require('../models/User')

const handleerror = (err) => {
    const errors = { site: '', email: '', password: '' }
    Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message
    })
    console.log(errors)
    return errors
}

module.exports.post_data = async (req, res) => {
    try {
        const { userID, site, url, username, email, password, other_details } = req.body
        const user = await UserData.create({ userID, site, url, username, email, password, other_details })
        res.status(201).send(user)
    }
    catch (err) {
        const errors = handleerror(err)
        res.status(400).send({ errors })
    }
}

module.exports.data = async (req, res) => {
    try {
        const data = await UserData.getDetails(req.body.userID)
        res.status(202).send(data)
    }
    catch (error) {
        console.log("ERROR: cannot get userdata: ", err)
        res.status(401).send({ "error": "cannot get data" })
    }
}

module.exports.delete_value = async (req, res) => {
    let deleted = false;
    console.log(req.body)
    if (JSON.stringify(req.body) !== '{}') {
        console.log("deleting values")
        try {
            const data = await UserData.deleteValue(req.body)
            data ? deleted = true : deleted = false
        }
        catch (err) {
            console.log("error deleting: ", err)
        }
    }else{
        res.status(400).send({ "error": "not deleted" })
    }
    if(deleted){
        res.status(202).send({ "success": "deleted" })
    }else{
        res.status(400).send({ "error": "no match found" })
    }
}