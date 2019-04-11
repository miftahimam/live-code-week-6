const axios = require('axios')

class jokeController {
    static fetchaRandomDadJoke(req,res){
        axios
         .get(`https://icanhazdadjoke.com/`)
         .then(({ data })=>{
             res.status(200).json(data)
         })
         .catch(err =>{
             res.status(500).json({
                message : err.message
            })
         })
    }
    static fetchaRandomDadJokeSlack(req,res){
        axios
         .get(`https://icanhazdadjoke.com/slack`)
         .then(({ data })=>{
             res.status(200).json(data)
         })
         .catch(err =>{
             res.status(500).json({
                message : err.message
            })
         })
    }
    static fetchaDadJokeById(req,res){
        axios
         .get(`https://icanhazdadjoke.com/j/${req.params.id}`)
         .then(({ data })=>{
             res.status(200).json(data)
         })
         .catch(err =>{
             res.status(500).json({
                message : err.message
            })
         })
    }
    static fetchaDadJokeAsImage(req,res){
        axios
         .get(`https://icanhazdadjoke.com/j/${req.params.id}.png`)
         .then(({ data })=>{
             res.status(200).json(data)
         })
         .catch(err =>{
             res.status(500).json({
                message : err.message
            })
         })
    }
    static searchForDadJoke(req,res){
        axios
         .get(`https://icanhazdadjoke.com/search`)
         .then(({ data })=>{
             res.status(200).json(data)
         })
         .catch(err =>{
             res.status(500).json({
                message : err.message
            })
         })
    }
    static graphQL(req,res){
        axios
         .get(`https://icanhazdadjoke.com/graphql`)
         .then(({ data })=>{
             res.status(200).json(data)
         })
         .catch(err =>{
             res.status(500).json({
                message : err.message
            })
         })
    }
    static addFavorites(req,res){
        axios
         .post(``)
         .then(({ data })=>{
             res.status(200).json(data)
         })
         .catch(err =>{
             res.status({
                 message: err.message
             })
         })
    }
}

module.exports = jokeController