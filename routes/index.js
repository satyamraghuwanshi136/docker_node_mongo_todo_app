const express = require('express');
const router = express.Router();
const listModel = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  listModel.find().then((data)=>{
    res.render('index',{data: data});
  })
});

router.post('/data', function(req,res){
  listModel.create({
    message: req.body.message
  }).then((data)=>{
    res.redirect('/');
  }).catch((err)=>{
    res.send(err)
  })
})


router.get('/delete/:id', (req,res)=>{
  listModel.findOneAndDelete({_id: req.params.id}).then((deletedItem)=>{
    res.redirect('/');
  }).catch((err)=>{
    res.send(err);
  })    
})



module.exports = router;