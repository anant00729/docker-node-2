const db = require('../config/database')
const  Gig = require('../models/Gigs')
const { Op } = require('sequelize')


 exports.getAllGigs = async (req,res) => {
    Gig.findAll()
    .then((res_d)=> {
        res.json(res_d)
    })
    .catch((err)=> {
        res.json(err.message)
    })
 }
 exports.readGigs = async (req,res) => {

    

    const data1 = []

    for(let i = 1 ; i < 1000; i++){
        const data = {
            title :  `${i}`,
            technologies : `${i} tech`,
            description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ducimus consectetur alias maxime culpa aliquam necessitatibus vero magnam autem perspiciatis?',
            budget : '12',
            contact_email : `${i}@gmail.com`,
        }

        data1.push(data)
    }


    // const {
    //     title,
    //     technologies,
    //     description,
    //     budget,
    //     contact_email,
    // } = data





    const res_d = await Gig.bulkCreate(data1)


    res.json(res_d)



 }
 exports.getGigByID = async (req,res) => {

 }


 exports.searchGig = async (req,res) => {
    const s = req.body.s
    const data = await Gig.findAll({ where : { technologies : {[Op.like] : '%' + s.toLowerCase() + '%'}}})


    res.json(data)
    
}




