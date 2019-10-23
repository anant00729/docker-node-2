const  Article = require('../models/Article')
const { Op } = require('sequelize')
const _db = require('../config/database')

 exports.getAllArticles = async (req,res) => {

    const type = req.body.type 

    try {
    let _t = ''

    if(type === 'nor') {
        _t = `SELECT "ArticleName", "ArticleAuthorName", "PublishedOn", "ReadTime",  id, "SubTitle", "MainImg", "SearchTags"
        FROM public."Articles" WHERE "isActive" = '1'`
    } else {
        _t =  `SELECT "ArticleName", "ArticleAuthorName", "PublishedOn", "ReadTime",  id, "SubTitle", "MainImg", "SearchTags", "isActive"
        FROM public."Articles"`;
    }  
    
    const res_d = await _db.query(_t, {
        type: _db.QueryTypes.SELECT
      })

    //   res_d = res_d.map((d)=> {
    //     d.ArticleTemplate = JSON.parse(d.ArticleTemplate)
    //     return d
    // })

    res.json({Status : true , Message : "" , articles : res_d })
        
    } catch (err) {
        res.json({Status : false , Message : err.message})
    }
    
 }


 exports.getSingleArticles = async (req,res) => {
    try {

        const id = req.body.id

        const _t =  `SELECT *
        FROM public."Articles" WHERE "id" = (:id)`;
        
        let res_d = await _db.query(_t, {
            replacements : {id} ,
            type: _db.QueryTypes.SELECT
          })
    
          res_d = res_d.map((d)=> {
            d.ArticleTemplate = JSON.parse(d.ArticleTemplate)
            d.SearchTags = JSON.parse(d.SearchTags)
            return d
        })
    
        res.json({Status : true , Message : "" , articles : res_d })
            
        } catch (err) {
            res.json({Status : false , Message : err.message})
        }

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



 exports.uploadImageForAuthor = async(req,res) => {
    res.json(req.file.filename)
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
                if(d.value.length == 0){
                    d.value = arr[0]
                    arr.splice(0,1)
                }
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


    const ArticleName = req.body.title
    const SubTitle = req.body.subTitle
    const ArticleAuthorName = req.body.authorname
    const PublishedOn = req.body.Publishedon
    const ReadTime = req.body.readtime
    let ArticleTemplate = req.body.article_temp
    let SearchTags = req.body.tags
    const arr = req.body.images

  
    
    try{

        const MainImg =  arr[0]
        arr.splice(0,1)

        ArticleTemplate = ArticleTemplate.map((d) => {
            if(d.type === 'block-img' || d.type === 'inline-img'){
                d.value = arr[0]
                arr.splice(0,1)
            }

            return d
        })


        ArticleTemplate = JSON.stringify(ArticleTemplate)
        SearchTags = JSON.stringify(SearchTags)


        const _t =  `INSERT INTO public."Articles"(
            "ArticleName", "SubTitle",  "ArticleAuthorName", "PublishedOn", "ReadTime", "isActive", "ArticleTemplate", "MainImg", "SearchTags")
            VALUES (
                (:ArticleName),
                (:SubTitle),
                (:ArticleAuthorName),
                (:PublishedOn),
                (:ReadTime),
                '1',
                (:ArticleTemplate),
                (:MainImg),
                (:SearchTags)
                );`

        const res_d = await _db.query(_t, {
            replacements: {
                ArticleName,
                SubTitle,
                ArticleAuthorName,
                PublishedOn,
                ReadTime,
                ArticleTemplate,
                MainImg,
                SearchTags
            },
            type: _db.QueryTypes.INSERT
          })
        //[results, metadata]

        console.log('res_d :', res_d);

        res.json({Status : true , Message : "" , res_d : res_d[0]})
    }catch(err){
        res.json({Status : false , Message : err.message})
    }


    
    
 }
 


 


 

