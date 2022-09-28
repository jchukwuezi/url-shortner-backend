const URL = require('../models/URL')
const {validateSpotifyURL} = require('../utils/utils') 
const shortId = require('shortid')

const addURL =(async (req, res)=>{
    const {longUrl} = req.body;
    const email = req.session.user.email;
    const userId = req.session.user.id;
    const base = process.env.BASE;
    const urlId = shortId.generate()
    const shortUrl = `${base}/${urlId}`;
    if(validateSpotifyURL(longUrl)){
        const url = await URL.findOne({longUrl: longUrl, email: email})
        if(!url){
            newURL = new URL({
                urlId,
                longUrl,
                shortUrl,
                date: new Date(),
                user: userId
            })
            await newURL.save();
            res.status(201).send('URL ' + longUrl + ' has been added to your list')
        }
        res.status(404).send('You have already shortened this URL')
    }
    res.status(400).send('Invalid URL entered')
})

const getURL =((req, res)=>{
    
})

const getURLs =(async (req, res)=>{
    const userId = req.session.user.id;
    const urls = await URL.find({}).where('user').equals(userId)
    if(urls.length === 0){
        res.status(204).send('No urls have been added to your list')
    }
    res.send(urls)
})

const removeURL =((req, res)=>{
    
})



module.exports = {
    addURL,
    getURLs
}
