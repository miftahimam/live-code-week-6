require('dotenv').config()
const jwt = require('jsonwebtoken')
const userModel = require('../models/user')
const bcrypt = require('bcrypt')


class userController {
    static register(req,res){
      userModel.create({
          email : req.body.email,
          password : req.body.password
      })
      .then(newUser =>{
          res.status(201).json(newUser)
      })
      .catch(err =>{
          res.status(500).json({
              message : err.message
          })
      })

    }
    static login(req,res){
        userModel.findOne({email : req.body.email})
        .then(foundUser =>{
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                res.status(201).json({
                    token : jwt.sign({
                        email : foundUser.email,
                        id : foundUser._id
                    },process.env.JWT_SECRET),
                    data : foundUser
                })
            } else {
                res.status(500).json('you password or username is incorrect')
            }
        })
        .catch(500).json({
            message : err.message
        })
    }
}

module.exports = userController
