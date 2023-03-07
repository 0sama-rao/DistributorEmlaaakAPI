var  config = require('../dbconfig');
const  sql = require('mssql');
const schema = require ('../validations/userValidation');
const moment = require('moment');
const { response } = require('express');







async function newAccountPost(user) {
    try{
      let pool = await sql.connect(config);
      let request = await pool.request()
  
      .input('Cnic', sql.VarChar, user.Cnic)
      .query(`SELECT Cnic FROM YPayAccountSSA where Cnic = @Cnic`);
      if (request.recordset.length > 0) {
          console.log(request.recordset.length)
          return (false,{message: "Account Already exist with following CNIC"})
        
        }
        else if(request.recordset.length == 0){

    try {
      let pool = await sql.connect(config);
      let insertUser = await pool.request()
      .input('FullName', sql.NVarChar, user.FullName)
    .input('FatherName', sql.NVarChar, user.FatherName)
    .input('MotherName', sql.NVarChar, user.MotherName)
    .input('Mobile', sql.NVarChar, user.Mobile)
    .input('Email', sql.NVarChar, user.Email)
    .input('Cnic', sql.NVarChar, user.Cnic)
    .input('CnicDOI', sql.NVarChar, user.CnicDOI)
    .input('CnicDOE', sql.NVarChar, user.CnicDOE)
    .input('Address', sql.NVarChar, user.Address)
    .input('City', sql.NVarChar, user.City)
    .input('NomineeName', sql.NVarChar, user.NomineeName)
    .input('DateOfBirth', sql.NVarChar, user.DateOfBirth)
    .input('CountryOfResidence', sql.NVarChar, user.CountryOfResidence)
    .input('CitizenshipStatus', sql.NVarChar, user.CitizenshipStatus)
    .input('Gender', sql.NVarChar, user.Gender)
    .input('CnicFrontImage', sql.NVarChar, user.CnicFrontImage)
    .input('CnicBackImage', sql.NVarChar, user.CnicBackImage)
    .input('SourceOfIncome', sql.NVarChar, user.SourceOfIncome)
    .input('Occupation', sql.NVarChar, user.Occupation)
    .input('ProofOfIncome', sql.NVarChar, user.ProofOfIncome)
    .input('BankName', sql.NVarChar, user.BankName)
    .input('BranchName', sql.NVarChar, user.BranchName)
    .input('AccountNumber', sql.NVarChar, user.AccountNumber)
    .input('IBan', sql.NVarChar, user.IBan )
    .input('ZakatDeduction', sql.NVarChar, user.ZakatDeduction)
    .input('CZ50From', sql.NVarChar, user.CZ50From)
    .input('FactaCheck', sql.NVarChar, user.FactaCheck)
    .input('PEPCheck', sql.NVarChar, user.PEPCheck)
    .input('MartialStatus', sql.NVarChar, user.MartialStatus)
    .input('RiskProfilingQ', sql.NVarChar, user.RiskProfilingQ)
    .input('Posted', sql.NVarChar, user.Posted)
    .input('DistributorCode', sql.NVarChar, user.DistributorCode)
    

    .query(`insert into YPayAccountSSA (FullName, FatherName, MotherName, Mobile, Email, Cnic, CnicDOI, CnicDOE, Address,City,NomineeName, DateOfBirth,CountryOfResidence,CitizenshipStatus,Gender, CnicFrontImage, CnicBackImage, SourceOfIncome,Occupation,ProofOfIncome, BankName, BranchName, AccountNumber,IBan, ZakatDeduction, CZ50From, FactaCheck, PEPCheck, MartialStatus, RiskProfilingQ ,Posted, DistributorCode) 
    values     (@FullName, @FatherName, @MotherName , @Mobile, @Email, @Cnic, @CnicDOI, @CnicDOE, @Address, @City, @NomineeName,@DateOfBirth, @CountryOfResidence,@CitizenshipStatus,@Gender,@CnicFrontImage, @CnicBackImage,@SourceOfIncome, @Occupation,@ProofOfIncome,@BankName,@BranchName,@AccountNumber,@IBan, @ZakatDeduction, @CZ50From, @FactaCheck, @PEPCheck,@MartialStatus, @RiskProfilingQ, @Posted, @DistributorCode )`);


    console.log(request.recordsets.length)
        // if('userName'== user.userName in sql ){
        //     console.log("UserName already exist")}
        
      // return insertUser.recordsets;
      return true; //console.log({message:"Record inserted"})
    }
  catch(error){
    console.log(err)
  }}}
    catch (err) { 
      // response.status(500).json(err +" ")
      //  console.log(err +" ");
      console.log (err); 
       
    }
  }

  module.exports ={
    newAccountPost:newAccountPost
  }