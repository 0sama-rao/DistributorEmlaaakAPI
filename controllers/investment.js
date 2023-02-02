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
                .input('TransactionDate', sql.Date, item.TransactionDate)
                .input('TransactionTime', sql.Time, item.TransactionTime)
                .input('OneLinkTransactionID', sql.VarChar, item.OneLinkTransactionID)
                .input('TransactionInfo', sql.VarChar, item.TransactionInfo)
                .input('Message', sql.VarChar, item.Message)
                .input('CdcealizationDate', sql.Date, item.CdcealizationDate)
                .input('BankAccountTitle', sql.VarChar, item.BankAccountTitle)
                .input('Bank', sql.VarChar, item.Bank)
                .input('FundTransferDate', sql.Date, item.FundTransferDate)
                .input('FolioNumber', sql.VarChar, item.FolioNumber)
                .input('IbftFile', sql.Bit, item.IbftFile)
                .input('IbftExtension', sql.Image, item.IbftExtension)
                .input('TransationID', sql.VarChar, item.TransationID)
                .input('DistributorCode', sql.Int, item.DistributorCode)

                .query(`INSERT INTO DistributorInvestment (emlaakTransactionId, FundName, Amount, ConfirmIBAN, TransactionDate, TransactionTime, OneLinkTransactionID, TransactionInfo, Message, CdcealizationDate, BankAccountTitle, Bank, FundTransferDate, FolioNumber, IbftFile, IbftExtension, TransationID, DistributorCode) 
                VALUES (@emlaakTransactionId, @FundName, @Amount, @ConfirmIBAN, @TransactionDate, @TransactionTime, @OneLinkTransactionID, @TransactionInfo, @Message, @CdcealizationDate, @BankAccountTitle, @Bank, @FundTransferDate, @FolioNumber, @IbftFile, @IbftExtension, @TransationID, @DistributorCode)`);
            
            console.log(result);
        }
    } 
catch (error) {
    console.error(error);
}}



async function createInvestmentCallback(user) {
    try {
        let pool = await sql.connect(config);
        let request = await pool.request()
        .input('emlaakTransactionId', sql.VarChar, user.emlaakTransactionId)
          
        .query(`SELECT emlaakTransactionId FROM DistributorInvestmentCallBack where emlaakTransactionId = @emlaakTransactionId`);

        if (request.recordset.length > 0) {
              
            return (true,{message: "emlaakTransactionId Already exist  !"})
          
          }

    else {
        
        // Save the data to the database
        
                let pool = await sql.connect(config);
                let request = await pool.request()
                .input('emlaakTransactionId', sql.UniqueIdentifier, user.emlaakTransactionId)
                .input('AmcTransactionId', sql.VarChar, user.AmcTransactionId)
                .input('UnitType', sql.VarChar, user.UnitType)
                .input('FundClass', sql.VarChar, user.FundClass)
                .input('Nav', sql.VarChar, user.Nav)
                .input('Units', sql.VarChar, user.Units)
                .input('SalesLoad', sql.VarChar, user.SalesLoad)
                .input('NetAmount', sql.VarChar, user.NetAmount)
                .input('NavDate', sql.VarChar, user.NavDate)
                .input('IsApproved', sql.VarChar, user.IsApproved)
                .input('DistributorCode', sql.Int, user.DistributorCode)

                .query(`INSERT INTO DistributorInvestmentCallBack (emlaakTransactionId, AmcTransactionId, UnitType, FundClass, Nav, Units, SalesLoad, NetAmount, NavDate, IsApproved, DistributorCode) 
                VALUES (@emlaakTransactionId, @AmcTransactionId, @UnitType, @FundClass, @Nav, @Units, @SalesLoad, @NetAmount, @NavDate, @IsApproved, @DistributorCode)`);
            
                return (true,{message: "Success !"})
            console.log(result);
        }
    
}catch (error) {
    console.error(error);
}

}

module.exports ={
    getInvestment:getInvestment,    
getInvestmentDataFromApi:getInvestmentDataFromApi,
createInvestmentCallback:createInvestmentCallback
}