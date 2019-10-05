const express = require('express')
const _q_c = require('../controllers/community/qcommunity')
const _a_c = require('../controllers/community/acommunity')
const {checkUserPresentMiddle} = require('../controllers/auth/checkPresent')


const _r = express.Router()
_r.post('/postQuestion', checkUserPresentMiddle ,_q_c.postQuestion)
_r.post('/postAns', checkUserPresentMiddle ,_a_c.postAns)



module.exports = _r

