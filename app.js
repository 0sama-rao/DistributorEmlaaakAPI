var  db = require('./controllers/userController');
var  db1 = require('./controllers/investment');

// const jwt = require('jasonwebtoken')
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
const { RequestError } = require('mssql');


var  app = express();


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

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

//exampleAPI 
router.route('/getInvestment').get((request, response) => {
    
  db1.getInvestment().then((data) => {
    response.json(data[0]);
  })
})


router.route('/addUser').post((request, response) => {
    let user = {...request.body}
    db.CheckaddUser(user).then(data => {
      response.status(200).json({data, message:"Record inserted successfully!"});
    })
  })
  
//createAccountSSAeg

  router.route('/createAccountSSAeg').post((request, response) => {
    let user = {...request.body}
    
    //db.createAccountSSAeg(user).then(function(result) {
      // console.log(response.status)  
      // if(user != null){
      //   response.status(200).json({result, message:"Record inserted"})
      // }
      db.createAccountSSAeg(user).then(data => {
        response.status(200).json({data, message:"Record inserted successfully!"});
      })  
      //   else{
      //   response.status(500).json({result, message:"Record Not Inserted!"})
      //     // console.log(response.status)
      // }
      
    })  
    //Create account callback
    // router.route('/createAccountCallback').post((request, response) => {
    //   let user = {...request.body}
    
    //   db.createAccountCallback(user).then(function(result) { 
    //       // console.log(response.status)  

    //       response.status (200).json({result})
    //       // if(result == true){
    //       //   response.status(200).json({result})
    //       //   console.log(result)
    //       // }
    //       //   else{
    //       //   response.status(200).json({result})
    //       //  console.log(result)
    //       // }
          
    //     })
    //   })
      
      router.route('/createAccountCallback/:emlaakTransactionId').get((request, response) => {
       
        db.createAccountCallback(request.params.emlaakTransactionId).then((user) => {
              //  response.json(user,{message:"success"})
               response.status(200).json(user);
        
        // console.log(user)
       
        // let user = {...request.body}
      
        // db.createAccountCallback(user).then(function(result) { 
        //     // console.log(response.status)  
  
        //     response.status (200).json({result})
            // if(result == true){
            //   response.status(200).json({result})
            //   console.log(result)
            // }
            //   else{
            //   response.status(200).json({result})
            //  console.log(result)
            // }
            
          })
        })
      
router.route('/createAccountSSA').post((request, response) => {
  let user = {...request.body}
  
  db.createAccountSSA(user).then(function(result) {
    console.log(response.status)  
    if(result == true){
      response.status(200).json({result, message:"Record inserted"})
    }
      else{
      response.status(200).json({result, message:"Error Inserting record or Duplicate account data!"})
      console.log(user.NomineeCnicIssuance)  
      //  console.log(result.recordset.length)
    }
    
  })
})
//updateRiskProfiling

router.route('/createAccountRegular').post((request, response) => {
  let user = {...request.body}
  
   db.createAccountRegular(user).then(function(result, RequestError) {

  //   response.status(200).json(err)
    
    if(result == true){
      response.status(200).json({result, message:"Record Inserted"})
      console.log(result)
    }
      
      else{
      response.status(400).json({result,RequestError, message:"Error Inserting record or Duplicate account data!"})
      console.log(result)  
       //console.log(user)
    }
    
  })
})

//Update Risk profiling 

router.route('/updateRiskProfiling').post((request, response) => {
  let user = {...request.body}
  
   db.updateRiskProfiling(user).then(function(result, RequestError) {

  //   response.status(200).json(err)
    if(result == true){
      response.status(200).json({result, message:"Record Inserted"})
    }
      
      else{
      response.status(400).json({result,RequestError, message:"Error Inserting record or Duplicate account data!"})
      console.log(user)  
       //console.log(user)
    }
    
  })
})


//Create Investment

router.route('/getcreateInvestment').get((request, response) => {
  let user = {...request.body}
  
  db1.getInvestmentDataFromApi(user).then(data => {
    response.status(200).json({data});
  })
})

router.route('/createInvestment').post((request, response) => {
  let item = {...request.body}
  // console.log(item)
  db1.createInvestment(item).then(function(result) {
    // console.log(result)  
    if(result == true){
      response.status(200).json({result, message:"Investment resuest sended successfully"})
    }
      else{
      response.status(409).json({result, message:"Error Creating investment request"})
      // console.log(result)  
      //  console.log(result.recordset.length)
    }
    
  })
})
//CreateCallbackInvestment

router.route('/createInvestmentCallback/:emlaakTransactionId').get((request, response) => {
  
  // db.createAccountCallback(request.params.emlaakTransactionId).then((user) => {
  //   //  response.json(user,{message:"success"})
  //    response.status(200).json(user);

  db1.createInvestmentCallback(request.params.emlaakTransactionId).then((user) => {
    //  response.json(user,{message:"success"})
     response.status(200).json(user);
  
})
})
var port = process.env.PORT || 8060;
app.listen(port);
console.log('Port is listening at '+ port);
