module.exports.getData = async (id) => {
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