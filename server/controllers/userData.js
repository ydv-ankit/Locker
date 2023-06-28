const { UserData, User } = require('../models/User')

module.exports.post_data = async (req, res) => {
    try{
        // const user = await User.create(req.body)
        console.log(user)
    }
    catch(err){
        console.log("error while adding data: ", err)
    }
    res.send("data may be added")
}

module.exports.data = async (req, res) => {
    const data = await UserData.getDetails(req.body.userID)
    res.send(data)
}