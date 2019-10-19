const  Article = require('../models/Article')
const { Op } = require('sequelize')
const _db = require('../config/database')

 exports.getAllArticles = async (req,res) => {
    Article.findAll()
    .then((res_d)=> {

        res_d = res_d.map((d)=> {
            d.ArticleTemplate = JSON.parse(d.ArticleTemplate)
            return d
        })

        res.json({Status : true , Message : "" , articles : res_d })
    })
    .catch((err)=> {
        res.json({Status : false , Message : err.message})
    })
 }


 exports.insertAllArticles = async (req,res) => {
    Article.findAll()
    .then((res_d)=> {
        res.json(res_d)
    })
    .catch((err)=> {
        res.json(err.message)
    })
 }



 exports.uploadImageForArticles = async(req,res) => {
    res.json(req.file.filename)
 }

 exports.updateArticlesTemplate = async(req,res) => {

    const id = req.body.id
    const arr = req.body.images
    let data = req.body.data
    try{
        data = data.map((d) => {
            if(d.type === 'block-img' || d.type === 'inline-img'){
                d.value = arr[0]
                arr.splice(0,1)
            }

            return d
        })


        const _t = `UPDATE "Articles"
        SET "ArticleTemplate"= (:data)
        WHERE "id" = (:id);`
    
        const res_d = await _db.query(_t, {
            replacements: {id , data : JSON.stringify(req.body.data)},
            type: _db.QueryTypes.UPDATE
          })
        //[results, metadata]
        res.json({Status : true , Message : "" , res_d : res_d[0]})
    }catch(err){
        res.json({Status : false , Message : err.message})
    }
 }



 exports.instert100Articles = async(req,res) => {
    
    let dataList = []

    for(let i = 0; i < 100 ; i++){
        const _a = {
            ArticleName : 'asdasdd',
            ArticleAuthorName : 'asdasdd',
            PublishedOn : 'asdasdd',
            ReadTime : 'asdasdd',
            ArticleTemplate : JSON.stringify(req.body.data),
            isActive : 1
        }

        dataList.push(_a)
    }

    
    try{
        const res_d = await Article.bulkCreate(dataList)
        //[results, metadata]
        res.json({Status : true , Message : "" , res_d : res_d[0]})
    }catch(err){
        res.json({Status : false , Message : err.message})
    }
 }


 exports.insertSingleArticle = async(req,res) => {


    const title = req.body.title
    //const subTitle = req.body.subTitle
    const authorname = req.body.authorname
    const Publishedon = req.body.Publishedon
    const readtime = req.body.readtime
    const article_temp = req.body.article_temp

    const _t =  `INSERT INTO public."Articles"(
        "ArticleName", "ArticleAuthorName", "PublishedOn", "ReadTime", "isActive")
        VALUES (
            '${title}', 
            '${authorname}', 
            '${Publishedon}', 
            '${readtime}', 
            '1'
            );`
    
    try{
        const res_d = await _db.query(_t, {
            type: _db.QueryTypes.INSERT
          })
        //[results, metadata]

        console.log('res_d :', res_d);

        res.json({Status : true , Message : "" , res_d : res_d[0]})
    }catch(err){
        res.json({Status : false , Message : err.message})
    }

  

    console.log('article_temp :', article_temp);


    
    res.json({Status: true, Message : 'Done'})
 }
 


 


 

