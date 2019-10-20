const Sequelize = require('sequelize')
const db = require('../config/database')



const Article = db.define('Article', {

    // "ArticleName" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    // "ArticleAuthorName" character varying(50) COLLATE pg_catalog."default",
    // "PublishedOn" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    // "ReadTime" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    // "ArticleTemplate" text COLLATE pg_catalog."default" NOT NULL,
    // "isActive" integer,
    // "ArticleID" integer NOT NULL DEFAULT nextval('"Article_ArticleID_seq"'::regclass),
    // "CreatedOn" date,
    // "UpdatedOn" date,




    ArticleName : {
        type : Sequelize.STRING
    },
    SubTitle: {
        type : Sequelize.STRING
    },
    ArticleAuthorName : {
        type : Sequelize.STRING
    },
    PublishedOn : {
        type : Sequelize.STRING
    },
    ReadTime : {
        type : Sequelize.STRING
    },
    ArticleTemplate : {
        type : Sequelize.STRING
    },
    isActive : {
        type : Sequelize.STRING
    },
    createdAt : {
        type : Sequelize.STRING
    },
    updatedAt : {
        type : Sequelize.STRING
    }

    
})



module.exports = Article
