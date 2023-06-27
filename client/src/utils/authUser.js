const authSignup = async (req) => {
    try {
        const response = await fetch('http://localhost:8080/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
        });
        return response
    } catch (error) {
        console.error('Error occurred while making the signup request');
        return error
    }
}

module.exports = authSignup;