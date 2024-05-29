const bcrypt = require('bcrypt')    //bcrypt is useful for security. It will encrypt passwords so that if a database is hacked, your password won't be seen.

const express = require('express')
const router = express.Router()
const User = require('../models/users.js')


router.get('/', async (req, res) => {
  res.json(await User.find())
})

router.post('/createaccount', async (req, res) => {
    try {
      console.log('before hash: ', req.body)
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
      console.log('after hash: ', req.body)
      // create the new user 
      const newUser = await User.create(req.body)
      res.json(newUser)
      
    } catch (err) {
        console.log(err)
        res.json(err)
    }
  }
          
)


router.put('/login', async (req, res) => {
  console.log(req.body);
  const foundUser = await User.findOne({username: req.body.username})

    try {
        const isAMatch = bcrypt.compareSync(req.body.password, foundUser.password)
          if(isAMatch) {
            res.json(foundUser)
            console.log('login successful!')
          } else {
            res.json('Please try a different username or password.')
          }       
        
    } catch (err) {
        console.log(err)
        res.json('Please try a different username or password.')
    }
  
}
)  


module.exports = router