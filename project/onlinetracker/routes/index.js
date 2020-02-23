var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Online Tracker'});
});

router.get('/about',(req, res)=>{
  res.render('about',{
      title: 'About us',
      projects : [{
          name:'ajax-php'
      }, {
          name: 'Java-Printer'
      }, {
          name : 'MEAN'
      }, {
          name: 'DSA'
      }]
  });
});

module.exports = router;
