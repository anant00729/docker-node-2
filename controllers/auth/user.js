const  User = require('../../models/User')
const  UserSession = require('../../models/UserSessions')
const _db = require('../../config/database')

 exports.register = async (req,res) => {

    const email = req.body.email
    const password = req.body.password
    const name = req.body.email
    const isActive = req.body.isActive
    const UserType = req.body.userType

    try{

        
        const res_d1 = await checkUserPresent(email , password)

        if(res_d1[0] == 0 ){
            const res_d = User.create({ 
                name,
                email,
                password,
                isActive,
                UserType
            })    
            res.json({Status : true , Message : "" , res_d})
        }else {
            res.json({Status : false , Message : "Already a user" })
        }
    


        
    }catch(err){
        res.json({Status : false , Message : err.message})
    }
 }


 exports.truncateAll = async (req,res) => {

    const _t = `TRUNCATE ONLY "Users", "UserSessions", "CQuestions"`
    try{
        const res_d = await _db.query(_t)
        //[results, metadata]
        res.json({Status : true , Message : "" , res_d : res_d[0]})
    }catch(err){
        res.json({Status : false , Message : err.message})
    }
 }



 exports.login = async (req,res) => {

    const email = req.body.email
    const password = req.body.password
    
    try{
        const res_d = await checkUserPresent(email , password)

        if(res_d[0] > 0){
            const user = res_d[1]
            const token = randomString(50)
            const userId = user.id
            const res_d1 = await UserSession.create({
                userId, token
            })

            if(res_d1){
                res.json({Status : true , Message : '', token})
            }
            
        }else{
            res.json({Status : false , Message : 'Please register'})
        }
        
    }catch(err){
        res.json({Status : false , Message : err.message})
    }
 }


 exports.logout = async (req,res) => {
    const token = req.body.token
    const q1 = `SELECT * FROM "UserSessions" WHERE "token" = '${token}'`
    const res_d = await _db.query(q1)

    if(res_d[0].length > 0){
        const _d = res_d[0][0]

        const q2 = `DELETE FROM public."UserSessions" WHERE "token" = '${_d.token}'`
        const res_d2 = await _db.query(q2)
        res.json({Status : true , Message : ''})
    }else {
        res.json({Status : false , Message : 'Token Expired'})
    }

 }


 const checkUserPresent = async (email , password) => {
        //check the user register
        const q1 = `SELECT * FROM "Users" WHERE "email" = '${email}' AND "password" = '${password}'`
        const f_res_d = await _db.query(q1)
        const data = [f_res_d[0].length, f_res_d[0][0]]
        return data
 }


 const randomString = (len, charSet) => {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}

 