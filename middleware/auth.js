const getAuthUser = ((req, res, next)=>{
    if(req.session && req.session.user){
        return next();
    }
    return res.status(401).send('not authorized')
})



module.exports = {
    getAuthUser
}