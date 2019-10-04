const express = require('express')
const _a_c = require('../controllers/gigs')



const _r = express.Router()
_r.get('/getAllGigs', _a_c.getAllGigs)
_r.get('/readGigs', _a_c.readGigs)
_r.post('/getGisByID', _a_c.getGigByID)
_r.post('/searchGig', _a_c.searchGig)



module.exports = _r

