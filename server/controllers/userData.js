const { UserData } = require('../models/User')

module.exports.profile = () => {
    res.send("profile")
}

module.exports.data = async (req, res) => {
    const data = await UserData.getDetails(req.body.userID)
    res.send(data)
}