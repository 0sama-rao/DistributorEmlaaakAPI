const axios = require('axios');
var  config = require('../dbconfig');
const  sql = require('mssql');


async function getInvestment() {

    try {
      let pool = await  sql.connect(config);
      let users = await  pool.request()
      .query("select * from DistributorInvestment "); //exexuting get User procedure
      return users.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

async function getInvestmentDataFromApi() {
    try {
        // Make a GET request to the API
        const response = await axios.get('https://uat.emlaakfinancials.com:2053/api/Investment/CreateInvestment');
        
        // Get the data from the response
        // console.log(response)
        const data = response.data;

        // Connect to the SQL Server database
        



        let pool = await sql.connect(config);
    //     let request = await pool.request()
    //     .input('emlaakTransactionId', sql.VarChar, data.emlaakTransactionId)
          
    //     .query(`SELECT * FROM DistributorInvestment where emlaakTransactionId = @emlaakTransactionId`);
      
    //   //   .then(result => {
    //           if (request.recordset.length >0) {
                
    //             return (true,{message: "emlaakTransactionId already exist !"})
              
    //           }


        
        // Save the data to the database
        for (let item of data) {
            const result = await pool.request()
                .input('emlaakTransactionId', sql.UniqueIdentifier, item.emlaakTransactionId)
                .input('FundName', sql.VarChar, item.FundName)
                .input('Amount', sql.VarChar, item.Amount)
                .input('ConfirmIBAN', sql.VarChar, item.ConfirmIBAN)
                .input('TransactionDate', sql.VarChar, item.TransactionDate)
                .input('TransactionTime', sql.VarChar, item.TransactionTime)
                .input('OneLinkTransactionID', sql.VarChar, item.OneLinkTransactionID)
                .input('TransactionInfo', sql.VarChar, item.TransactionInfo)
                .input('Message', sql.VarChar, item.Message)
                .input('CdcealizationDate', sql.VarChar, item.CdcealizationDate)
                .input('BankAccountTitle', sql.VarChar, item.BankAccountTitle)
                .input('Bank', sql.VarChar, item.Bank)
                .input('FundTransferDate', sql.VarChar, item.FundTransferDate)
                .input('FolioNumber', sql.VarChar, item.FolioNumber)
                .input('IbftFile', sql.VarChar, item.IbftFile)
                .input('IbftExtension', sql.VarChar, item.IbftExtension)
                .input('TransationID', sql.VarChar, item.TransationID)
                .input('DistributorCode', sql.Int, item.DistributorCode)
                // .then(function validation(data){

                //     if (data.emlaakTransactionId ){}
                    
                // })
                .query(`INSERT INTO DistributorInvestment (emlaakTransactionId, FundName, Amount, ConfirmIBAN, TransactionDate, TransactionTime, OneLinkTransactionID, TransactionInfo, Message, CdcealizationDate, BankAccountTitle, Bank, FundTransferDate, FolioNumber, IbftFile, IbftExtension, TransationID, DistributorCode) 
                VALUES (@emlaakTransactionId, @FundName, @Amount, @ConfirmIBAN, @TransactionDate, @TransactionTime, @OneLinkTransactionID, @TransactionInfo, @Message, @CdcealizationDate, @BankAccountTitle, @Bank, @FundTransferDate, @FolioNumber, @IbftFile, @IbftExtension, @TransationID, @DistributorCode)`);
            
                return(true, {message:"Data Inserted"})
            console.log(item);
        }
    } 
catch (error) {
    return(false, {message:"Error, cannot push data !"})
    console.error(error);
}}



async function createInvestmentCallback(emlaakTransactionId) {
    try {
        let pool = await sql.connect(config);
        let request = await pool.request()
        .input('emlaakTransactionId', sql.VarChar, emlaakTransactionId)
          
        .query(`SELECT emlaakTransactionId FROM DistributorInvestment where emlaakTransactionId = @emlaakTransactionId`);

        if (request.recordset.length == 0) {
              
            return (true,{message: "emlaakTransactionId Doesn't exist  !"})
          }

    else if (request.recordset.length > 0){
        
        // Save the data to the database
        
                let pool = await sql.connect(config);
                let request2 = await pool.request()
                .input('emlaakTransactionId', sql.UniqueIdentifier, emlaakTransactionId)
                .query(`SELECT emlaakTransactionId FROM DistributorInvestmentCallBack where emlaakTransactionId = @emlaakTransactionId`);
//                 .query(`insert into DistributorInvestmentCallBack(emlaakTransactionId) 
//                 values(@emlaakTransactionId);
//                 update DistributorInvestment set Posted = '1' where emlaakTransactionId = @emlaakTransactionId;
//                 Select emlaakTransactionId from DistributorInvestmentCallBack where emlaakTransactionId = @emlaakTransactionId
// `);
            if (request2.recordset.length > 0){
                return (true,request2.recordsets,{message:"EmlaakID already Posted !"})
            console.log(result);}
            else{
                let request3 = await pool.request()
                .input('emlaakTransactionId', sql.UniqueIdentifier, emlaakTransactionId)
                
            
                // .query(`SELECT emlaakTransactionId FROM DistributorInvestmentCallBack where emlaakTransactionId = @emlaakTransactionId`);
                .query(`insert into DistributorInvestmentCallBack(emlaakTransactionId ) 
                values(@emlaakTransactionId);
                update DistributorInvestment set Posted = '1' where emlaakTransactionId = @emlaakTransactionId;
                Select emlaakTransactionId, AMCTransactionID from DistributorInvestmentCallBack where emlaakTransactionId = @emlaakTransactionId
`);
console.log(request3.recordsets)
return (true,request3.recordset)
            }
        }
    
}catch (error) {
    console.error(error);
}

}


async function createInvestment(item) {
    try {
      let pool = await sql.connect(config);
      let insertInvestment = await pool.request()
      .input('emlaakTransactionId', sql.UniqueIdentifier, item.emlaakTransactionId)
                .input('FundName', sql.VarChar, item.FundName)
                .input('Amount', sql.VarChar, item.Amount)
                .input('ConfirmIBAN', sql.VarChar, item.ConfirmIBAN)
                .input('TransactionDate', sql.VarChar, item.TransactionDate)
                .input('TransactionTime', sql.VarChar, item.TransactionTime)
                .input('OneLinkTransactionID', sql.VarChar, item.OneLinkTransactionID)
                .input('TransactionInfo', sql.VarChar, item.TransactionInfo)
                .input('Message', sql.VarChar, item.Message)
                .input('CdcRealizationDate', sql.VarChar, item.CdcRealizationDate)
                .input('BankAccountTitle', sql.VarChar, item.BankAccountTitle)
                .input('Bank', sql.VarChar, item.Bank)
                .input('FundTransferDate', sql.VarChar, item.FundTransferDate)
                .input('FolioNumber', sql.VarChar, item.FolioNumber)
                .input('IbftFile', sql.VarChar, item.IbftFile)
                .input('IbftExtension', sql.VarChar, item.IbftExtension)
                .input('TransactionId', sql.VarChar, item.TransactionId)
                .input('Posted', sql.VarChar, item.Posted)
                .input('DistributorCode', sql.Int, item.DistributorCode)


      
                .query(`INSERT INTO DistributorInvestment (emlaakTransactionId, FundName, Amount, ConfirmIBAN, TransactionDate, TransactionTime, OneLinkTransactionID, TransactionInfo, Message, CdcRealizationDate, BankAccountTitle, Bank, FundTransferDate, FolioNumber, IbftFile, IbftExtension, TransactionId,Posted,  DistributorCode) 
                VALUES (@emlaakTransactionId, @FundName, @Amount, @ConfirmIBAN, @TransactionDate, @TransactionTime, @OneLinkTransactionID, @TransactionInfo, @Message, @CdcRealizationDate, @BankAccountTitle, @Bank, @FundTransferDate, @FolioNumber, @IbftFile, @IbftExtension, @TransactionId, @Posted,@DistributorCode)`);
      
      // const existingRecord = await insertUser.findOne({Title: Title});
      // if(existingRecord){
      //   return res.status(400).json({message:"User Already exist"})
      // };
        // if('userName'== user.userName in sql ){
        //     console.log("UserName already exist")}
        
      // return insertUser.recordsets;
      // return console.log({messsage:"records",insertUser})
      
      
      console.log(insertInvestment)
      // return insertUser.recordsets;
      return true;
    }
  
     
    catch (err) { 
     // return (false, err);
      console.log(err+"Error");
    }
  }
  

module.exports ={
getInvestment:getInvestment,    
getInvestmentDataFromApi:getInvestmentDataFromApi,
createInvestmentCallback:createInvestmentCallback,
createInvestment:createInvestment
}