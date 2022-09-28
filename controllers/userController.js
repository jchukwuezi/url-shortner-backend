const User = require('../models/User')
const bcrypt = require('bcryptjs')
//CRUD OPERATIONS

//registering users
const createUser = (async (req, res) =>{
    const {email, password} = req.body;
    const user = await User.findOne({email: email})
    if(!user){
        const newUser = new User({
            email,
            password
        })
        //hashing the password
        bcrypt.genSalt((err, salt) =>
            bcrypt.hash(newUser.password, salt, async (err, hash)=>{
                if (err) throw err;
                newUser.password = hash;
                await newUser.save()       
            })
        )
        res.status(201).send('Account with email ' + newUser.email + ' created')
    }
    /*return*/ res.status(409).send('Account with this email already exists');
})


//logging in users
const checkUser = (async (req, res) =>{
    const {email, password} = req.body;
    const user = await User.find({email: email})
    if(!user){
        /*return*/ res.status(404).send('Account with this email already exists');
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match){
        /*return*/ res.status(401).send('Invalid credentials');
    }

    const sessUser = {
        id: user._id,
        email: user.email
    }
    req.session.user = sessUser;

    res.status(201).send('Successfully logged in')
})

module.exports = {
    createUser,
    checkUser
}




