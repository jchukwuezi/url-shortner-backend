const validateSpotifyURL = (value) =>{
    return /^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/.test(value)
}


module.exports = { 
    validateSpotifyURL
};