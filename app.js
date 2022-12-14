var  db = require('./controllers/userController');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');


var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
  console.log('Method Executed !');
  next();
});


//to list all the users/investors
router.route('/users').get((request, response) => {
    
    db.getUsers().then((data) => {
      response.json(data[0]);
    })
  })
  
//getDaccountSSA
router.route('/accountSSA').get((request, response) => {
    
  db.getDaccountSSA().then((data) => {
    response.json(data[0]);
  })
})


router.route('/addUser').post((request, response) => {
    let user = {...request.body}
    db.addUser(user).then(data => {
      response.status(200).json({data, message:"Record inserted successfully!"});
    })
  })
  
//createAccountSSA

router.route('/createAccountSSA').post((request, response) => {
  let user = {...request.body}
  
  db.CheckAccountSSA(user).then(function(result) {
    if(user == false){
      response.status(200).json({result, message:"Record inserted"})
    }
      
      else{
      response.status(200).json({result, message:"Record exist"})
      //  console.log(user)
    }
    
  })
})

router.route('/createAccountRegular').post((request, response) => {
  let user = {...request.body}
  
  db.CheckAccountRegular(user).then(function(result) {
    if(result == false){
      response.status(200).json({result, message:"Record exist"})
    }
      
      else{
      response.status(200).json({result, message:"Record inserted"})
        // console.log(user)
    }
    
  })
})
var port = process.env.PORT || 8060;
app.listen(port);
console.log('Port is listening at '+ port);
