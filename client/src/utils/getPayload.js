const getPayload = (token) => {
        // Split the token into header, payload, and signature
        var parts = token.split('.');
        // Decode the payload 
        return JSON.parse(atob(parts[1]));
}

function getCookieValue(cookieName) {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();

                // Check if the cookie starts with the cookieName
                if (cookie.indexOf(cookieName + '=') === 0) {
                        return cookie.substring(cookieName.length + 1);
                }
        }
        // Cookie not found
        return null;
}

exports.getPayload = getPayload;
exports.getCookieValue = getCookieValue