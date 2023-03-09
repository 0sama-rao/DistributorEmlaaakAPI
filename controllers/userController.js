var  config = require('../dbconfig');
const  sql = require('mssql');
const schema = require ('../validations/userValidation');
const moment = require('moment');
const { response } = require('express');

// const body = req.body;
// let UserAdd;
// async function CheckaddUser(user) {
//   try {
//     let pool = await sql.connect(config);
//     let addUser = await pool.request()
//     .input('userName', sql.NVarChar, user.userName)
//     .input('email', sql.NVarChar, user.email)
//     .input('password', sql.NVarChar, user.password)
      
//     .query(`select * from testRegistration01 where userName = @userName`);
//     if (addUser.rows.find(x => x.userName === userName))
//               resolve("Verified")
//             else{
//               reject("ERROR")
//          }
//       // if('userName'== user.userName in sql ){
//       //     console.log("UserName already exist")}
      
//       UserAdd=addUser.recordsets;
//     console.log(UserAdd,{message:"Record inserted"})
//   }
//   catch (err) { 
//     console.log(err);
//   }
// }
async function addUser(user) {
    try {
      let pool = await sql.connect(config);
      let addUser = await pool.request()
      .input('userName', sql.NVarChar, user.userName)
      .input('email', sql.NVarChar, user.email)
      .input('password', sql.NVarChar, user.password)
        
      .query(`insert into testRegistration01 (userName, password, email) 
      values(@userName, @password,@email)`);
      
        // if('userName'== user.userName in sql ){
        //     console.log("UserName already exist")}
        
        UserAdd=addUser.recordsets;
      console.log(UserAdd,{message:"Record inserted"})
    }
    catch (err) { 
      console.log(err);
    }
  }


  //get all users

  async function getUsers() {

    try {
      let pool = await  sql.connect(config);
      let users = await  pool.request()
      .query("Select * from testRegistration01"); //exexuting get User procedure
      return users.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }


  async function getDaccountSSA() {

    try {
      let pool = await  sql.connect(config);
      let users = await  pool.request()
      .query("select * from DistributorAccountSSA"); //exexuting get User procedure
      return users.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }



  // async function CheckAccountSSA(user) {
  //   try {
  //     let pool = await sql.connect(config);

  // let checkRecord = await pool.request()
  // .input('emlaakTransactionId' , sql.UniqueIdentifier, user.emlaakTransactionId)
  // .input('principleCnic' , sql.VarChar, user.principleCnic)
 
  //     .query(`select * from DistributorAccountSSA where emlaakTransactionId = @emlaakTransactionId AND principleCnic=@principleCnic`)
  //     .then(function(result){
  //       //  console.log(result[3])
  //      if(result.rowsAffected==0){
  //        createAccountSSA(user);
  //        console.log("Record inserted")
  //       }
  //      else {
  //       //  return false;
  //        console.log("RECORD EXIST")
         
  //      }
      
  //     })}
  //     catch(error){console.log(error)}
  //   }

  
  async function createAccountSSA(user) {
    try {
      let pool = await sql.connect(config);
      
      // const moment = require('moment');

// const date = moment(user.NomineeCnicIssuance, 'YYYY-MM-DD'); // parse date using format 'DD/MM/YYYY'

// if (!date.isValid()) {
//   console.log("date format invalid")
// }



// if (isNaN(date.getTime())) {
//   // handle invalid date format
// }

      // let record = result.rowsAffected[0] ;
      
      // const emlaakTransactionId = user.emlaakTransactionId.toUpperCase();
      const date = new Date(user.NomineeCnicIssuance);
      let insertUser = await pool.request()
  
      .input('EmlaakTransactionId', sql.UniqueIdentifier, user.EmlaakTransactionId)
      .input('Title', sql.VarChar, user.Title)
      .input('FullName', sql.VarChar, user.FullName)
      .input('PrincipleCnic', sql.VarChar, user.principleCnic)
      .input('PrincipleCnicIssuance', sql.Date, user.principleCnicIssuance)
      .input('PrincipleCnicExpiry', sql.Date, user.principleCnicExpiry)
      .input('Email', sql.VarChar, user.Email)
      .input('BankAccountTilte', sql.VarChar, user.bankAccountTilte)
      .input('Iban', sql.VarChar, user.Iban)
      .input('Bank', sql.VarChar, user.Bank)
      .input('MobileNo', sql.VarChar, user.MobileNo)
      .input('FatherSpouse', sql.VarChar, user.FatherSpouse)
      .input('DateOfBirth', sql.Date, user.DateOfBirth)
      .input('Address', sql.VarChar, user.Address)
      .input('Nominee', sql.VarChar, user.Nominee)
      .input('NomineeCnic', sql.VarChar, user.NomineeCnic)
      .input('NomineeCnicIssuance', sql.VarChar,user.NomineeCnicIssuance )
      .input('NomineeCnicExpiry', sql.Date, user.NomineeCnicExpiry)
      .input('SourceOfIncome', sql.VarChar, user.SourceOfIncome)
      .input('AccountCategory', sql.VarChar, user.AccountCategory)
      .input('PrincipleNadraFile', sql.NVarChar, user.PrincipleNadraFile)
      .input('PrincipleNadraExtension', sql.VarChar, user.PrincipleNadraExtension)
      .input('NomineeNadraFile', sql.Bit, user.NomineeNadraFile)
      .input('NomineeNadraExtension', sql.VarChar, user.NomineeNadraExtension)
      .input('NomineeContactNo', sql.VarChar, user.NomineeContactNo)
      .input('MotherMaideName', sql.VarChar, user.MotherMaideName)
      .input('IsRiskProfiling', sql.Bit, user.IsRiskProfiling)
      .input('AgeBracket', sql.VarChar, user.AgeBracket)
      .input('InvestmentMatterKnowledge', sql.VarChar, user.InvestmentMatterKnowledge)
      .input('MonthlyIncomeSaveRatio', sql.VarChar, user.MonthlyIncomeSaveRatio)
      .input('HorizonOfInvestment', sql.VarChar, user.HorizonOfInvestment)
      .input('InvestmentObjective', sql.VarChar, user.InvestmentObjective)
      .input('RiskAppetite', sql.VarChar, user.RiskAppetite)
      .input('FinalScore', sql.VarChar, user.FinalScore)
      .input('Occupation', sql.VarChar, user.occupation)
      .input('ZakatStatus', sql.VarChar, user.ZakatStatus)
      .input('ZakatFile', sql.NVarChar, user.ZakatFile)
      .input('ZakatFileExtension', sql.VarChar, user.ZakatFileExtension)
      .input('CountryOfResidence', sql.NVarChar, user.CountryOfResidence)
      .input('CountryOfBirth', sql.NVarChar, user.CountryOfBirth)
      .input('AccountOpeningAcceptance', sql.Char, user.AccountOpeningAcceptance)
      .input('TermsAndCondition', sql.Char, user.TermsAndCondition)
      .input('IsInvestorOwnMobileNo', sql.Char, user.IsInvestorOwnMobileNo)
      .input('InvestedBySelf', sql.Char, user.InvestedBySelf)
      .input('ZakatStatusDeclaration', sql.Char, user.ZakatStatusDeclaration)
      .input('FrontEndLoanDeclaration', sql.Char, user.FrontEndLoanDeclaration)
      .input('RiskLevel', sql.VarChar, user.RiskLevel)
      .input('BornInPakistan', sql.Char, user.BornInPakistan)
      .input('PoliticallyExposedPerson', sql.Char, user.PoliticallyExposedPerson)
      .input('InvestedForOwn', sql.Char, user.InvestedForOwn)
      .input('RiskDisclaimer', sql.Bit, user.RiskDisclaimer)
      .input('DistributorCode', sql.Int, user.DistributorCode)
      //.input('folioNumber', sql.Int, user.folioNumber)
      .input('Posted', sql.Char, user.Posted)
      .input('City', sql.VarChar, user.city)
      // .input('InvestedBySelf', sql.Char, user.InvestedBySelf)
      // .input('InvestedBySelf', sql.Char, user.InvestedBySelf)


      
      .query(`insert into DistributorAccountSSA (EmlaakTransactionId, Title, FullName,PrincipleCnic, PrincipleCnicIssuance, PrincipleCnicExpiry, Email, BankAccountTilte, Iban, Bank, MobileNo, FatherSpouse, DateOfBirth, Address, Nominee, NomineeCnicIssuance, NomineeCnicExpiry, SourceOfIncome, AccountCategory, PrincipleNadraFile, PrincipleNadraExtension, NomineeNadraFile, NomineeNadraExtension, NomineeContactNo, MotherMaideName, IsRiskProfiling, AgeBracket, InvestmentMatterKnowledge, MonthlyIncomeSaveRatio, HorizonOfInvestment, InvestmentObjective, RiskAppetite, FinalScore, Occupation, ZakatStatus, ZakatFile, ZakatFileExtension, CountryOfResidence, CountryOfBirth, AccountOpeningAcceptance, TermsAndCondition, IsInvestorOwnMobileNo, InvestedBySelf, ZakatStatusDeclaration, FrontEndLoanDeclaration, RiskLevel, BornInPakistan, PoliticallyExposedPerson, InvestedForOwn, RiskDisclaimer, DistributorCode, Posted, City) 
      values(@EmlaakTransactionId, @Title, @FullName, @PrincipleCnic, @PrincipleCnicIssuance, @PrincipleCnicExpiry, @Email, @BankAccountTilte, @Iban, @Bank, @MobileNo, @FatherSpouse, @DateOfBirth, @Address, @Nominee, @NomineeCnicIssuance, @NomineeCnicExpiry, @SourceOfIncome, @AccountCategory, @PrincipleNadraFile, @PrincipleNadraExtension, @NomineeNadraFile, @NomineeNadraExtension, @NomineeContactNo, @MotherMaideName, @IsRiskProfiling, @AgeBracket, @InvestmentMatterKnowledge, @MonthlyIncomeSaveRatio, @HorizonOfInvestment, @InvestmentObjective, @RiskAppetite, @FinalScore, @Occupation, @ZakatStatus, @ZakatFile, @ZakatFileExtension, @CountryOfResidence, @CountryOfBirth, @AccountOpeningAcceptance, @TermsAndCondition, @IsInvestorOwnMobileNo, @InvestedBySelf, @ZakatStatusDeclaration, @FrontEndLoanDeclaration, @RiskLevel, @BornInPakistan, @PoliticallyExposedPerson, @InvestedForOwn, @RiskDisclaimer, @DistributorCode, @Posted, @City)`);
      
      // const existingRecord = await insertUser.findOne({Title: Title});
      // if(existingRecord){
      //   return res.status(400).json({message:"User Already exist"})
      // };
        // if('userName'== user.userName in sql ){
        //     console.log("UserName already exist")}
        
      // return insertUser.recordsets;
      // return console.log({messsage:"records",insertUser})
      
      
      // console.log(insertUser)
      // return insertUser.recordsets;
      return true;
    }
  
     
    catch (err) { 
      return (false, err);
      console.log(err+"Error");
    }
  }
  
  async function CheckAccountRegular(user) {
    try {
      let pool = await sql.connect(config);

  let checkRecord = await pool.request().input('emlaakTransactionId' , sql.UniqueIdentifier, user.emlaakTransactionId)
  .input('principleCnic' , sql.VarChar, user.principleCnic)     
  .query(`select * from DistributorRegularAccount where emlaakTransactionId = @emlaakTransactionId AND  principleCnic=@principleCnic`)
      .then(function(result){
        //  console.log(result[3])
       if(result.rowsAffected==0){
        createAccountRegular(user);
         return true;
        }
       else {
        //  return false;
         console.log("RECORD ALREADY EXIST")
         
       }
      
      })}
      catch(error){console.log(error)}
    }

  

  async function createAccountRegular(user) {
    try {
      let pool = await sql.connect(config);
      let insertUser = await pool.request()
      .input('EmlaakTransactionId', sql.UniqueIdentifier, user.EmlaakTransactionId)
      .input('Title', sql.VarChar, user.Title)
      .input('FullName', sql.VarChar, user.FullName)
      .input('PrincipleCnic', sql.VarChar, user.PrincipleCnic)
      .input('PrincipleCnicIssuance', sql.Date, user.PrincipleCnicIssuance)
      .input('PrincipleCnicExpiry', sql.Date, user.PrincipleCnicExpiry)
      .input('Email', sql.VarChar, user.Email)
      .input('BankAccountTilte', sql.VarChar, user.BankAccountTilte)
      .input('Iban', sql.VarChar, user.Iban)
      .input('Bank', sql.VarChar, user.Bank)
      .input('MobileNo', sql.VarChar, user.MobileNo)
      .input('DateOfBirth', sql.Date, user.DateOfBirth)
      .input('Address', sql.VarChar, user.Address)
      .input('Nominee', sql.VarChar, user.Nominee)
      .input('NomineeCnic', sql.VarChar, user.NomineeCnic)
      .input('NomineeCnicIssuance', sql.Date, user.NomineeCnicIssuance)
      .input('NomineeCnicExpiry', sql.Date, user.NomineeCnicExpiry)
      .input('SourceOfIncome', sql.VarChar, user.SourceOfIncome)
      .input('AgeBracket', sql.VarChar, user.AgeBracket)
      .input('InvestmentMatterKnowledge', sql.VarChar, user.InvestmentMatterKnowledge)
      .input('MonthlyIncomeSaveRatio', sql.VarChar, user.MonthlyIncomeSaveRatio)
      .input('HorizonOfInvestment', sql.VarChar, user.HorizonOfInvestment)
      .input('InvestmentObjective', sql.VarChar, user.InvestmentObjective)
      .input('RiskAppetite', sql.VarChar, user.RiskAppetite)
      .input('FinalScore', sql.VarChar, user.FinalScore)
      .input('NomineeRelation', sql.VarChar, user.NomineeRelation)
      .input('PresentAddress', sql.VarChar, user.PresentAddress)
      .input('FatherSpouse', sql.VarChar, user.FatherSpouse)
      .input('MobilePersonName', sql.VarChar, user.MobilePersonName)
      .input('MobilePersonRelation', sql.VarChar, user.MobilePersonRelation)
      .input('MotherMaidenName', sql.VarChar, user.MotherMaidenName)
      .input('DividendMandate', sql.VarChar, user.DividendMandate)
      .input('ZakatStatus', sql.VarChar, user.ZakatStatus)
      .input('CountryOfBirth', sql.Bit, user.CountryOfBirth)
      .input('CountryOfResidence', sql.Bit, user.CountryOfResidence)
      .input('TaxIdentificationNo', sql.VarChar, user.TaxIdentificationNo)
      .input('PassportNo', sql.Bit, user.passportNo)
      .input('NoofDependent', sql.VarChar, user.NoofDependent)
      .input('Education', sql.Bit, user.Education)
      .input('NomineeContactNo', sql.VarChar, user.NomineeContactNo)
      .input('FatCaCrsDetails', sql.Bit, user.FatCaCrsDetails)
      .input('Kyc1_US_GreenCardHolder', sql.Char, user.Kyc1_US_GreenCardHolder)
      .input('Kyc2_TransferToUS_BasedAccount', sql.Char, user.Kyc2_TransferToUS_BasedAccount)
      .input('Kyc3_PowerOfAttorney_AuthorizedSignatory_MandateHolder_USAddress', sql.Char, user.Kyc3_PowerOfAttorney_AuthorizedSignatory_MandateHolder_USAddress)
      .input('Kyc4_USTelephone', sql.Char, user.Kyc4_USTelephone)
      .input('Kyc5_TaxResidenceyOtherThanPak', sql.Char, user.Kyc5_TaxResidenceyOtherThanPak)
      .input('Kyc6_TaxResidenceyOtherThanPakAndUS', sql.Char, user.Kyc6_TaxResidenceyOtherThanPakAndUS)
      .input('Kyc7_RelationWithPoliticallyExposedPerson', sql.Char, user.Kyc7_RelationWithPoliticallyExposedPerson)
      .input('Kyc8_SeniorPositionInGovInstitution', sql.Char, user.Kyc8_SeniorPositionInGovInstitution)
      .input('Kyc9_FinancialLinksToOffshoreTaxHavens', sql.Char, user.Kyc9_FinancialLinksToOffshoreTaxHavens)
      .input('Kyc10_DealInPreciousMetals', sql.Char, user.Kyc10_DealInPreciousMetals)
      .input('PrincipleNadraFile', sql.Bit, user.PrincipleNadraFile)
      .input('PrincipleNadraExtension', sql.Bit, user.PrincipleNadraExtension)
      .input('NomineeNadraFile', sql.Bit, user.NomineeNadraFile)
      .input('NomineeNadraExtension', sql.Bit, user.NomineeNadraExtension)
      .input('ProofOfIncomeFile', sql.Bit, user.ProofOfIncomeFile)
      .input('ProofOfIncomeExtension', sql.Bit, user.ProofOfIncomeExtension)
      .input('FatCaFile', sql.Bit, user.FatCaFile)
      .input('FatCaFieExtention', sql.Bit, user.FatCaFieExtention)
      .input('ZakatFile', sql.Bit, user.ZakatFile)
      .input('ZakatFileExtention', sql.Bit, user.ZakatFileExtention)
      .input('InvestmentTransactionPerYear', sql.VarChar, user.InvestmentTransactionPerYear)
      .input('InvestmentAmountPerYear', sql.VarChar, user.InvestmentAmountPerYear)
      .input('AnnualIncome', sql.Bit, user.AnnualIncome)
      .input('Occupation', sql.Bit, user.Occupation)
      .input('AccountOpeningAccept ance', sql.Char, user.AccountOpeningAcceptance)
      .input('TermsAndCondition', sql.Char, user.TermsAndCondition)
      .input('IsInvestorOwnMobileNo', sql.Char, user.IsInvestorOwnMobileNo)
      .input('InvestedBySelf', sql.Char, user.InvestedBySelf)
      .input('ZakatDeclaration', sql.Char, user.ZakatDeclaration)
      .input('FrontEndLoanDeclaration', sql.Char, user.FrontEndLoanDeclaration)
      .input('RiskLevel', sql.Bit, user.RiskLevel)
      .input('RiskDisclaimer', sql.Char, user.RiskDisclaimer) 
      .input('City', sql.VarChar, user.City)
      .input('DistributorCode', sql.Int, user.DistributorCode)



      .query(`insert into DistributorRegularAccount (EmlaakTransactionId, Title, FullName,PrincipleCnic, PrincipleCnicIssuance, PrincipleCnicExpiry, Email, BankAccountTilte,           Iban, Bank, MobileNo,   DateOfBirth, Address, Nominee, NomineeCnicIssuance, NomineeCnicExpiry,      SourceOfIncome, AgeBracket, InvestmentMatterKnowledge,    MonthlyIncomeSaveRatio,  HorizonOfInvestment, InvestmentObjective,    RiskAppetite, FinalScore, NomineeRelation, PresentAddress,     FatherSpouse, MobilePersonName, MobilePersonRelation, MotherMaidenName, DividendMandate,     ZakatStatus, CountryOfBirth, CountryOfResidence,    TaxIdentificationNo, PassportNo, NoofDependent, Education, NomineeContactNo,      FatCaCrsDetails, Kyc1_US_GreenCardHolder, Kyc2_TransferToUS_BasedAccount,     Kyc3_PowerOfAttorney_AuthorizedSignatory_MandateHolder_USAddress, Kyc4_USTelephone,Kyc5_TaxResidenceyOtherThanPak,    Kyc6_TaxResidenceyOtherThanPakAndUS, Kyc7_RelationWithPoliticallyExposedPerson,    Kyc8_SeniorPositionInGovInstitution, Kyc9_FinancialLinksToOffshoreTaxHavens, Kyc10_DealInPreciousMetals, PrincipleNadraFile, PrincipleNadraExtension, NomineeNadraFile, NomineeNadraExtension,ProofOfIncomeFile, ProofOfIncomeExtension, FatCaFile, FatCaFieExtention, ZakatFile, ZakatFileExtention, InvestmentTransactionPerYear, InvestmentAmountPerYear, AnnualIncome, Occupation, AccountOpeningAcceptance, TermsAndCondition, IsInvestorOwnMobileNo, InvestedBySelf, ZakatDeclaration, FrontEndLoanDeclaration, RiskLevel, RiskDisclaimer, City, DistributorCode) 
                                              values(@EmlaakTransactionId, @Title, @FullName, @PrincipleCnic, @PrincipleCnicIssuance, @PrincipleCnicExpiry, @Email, @BankAccountTilte, @Iban, @Bank, @MobileNo, @DateOfBirth, @Address, @Nominee, @NomineeCnicIssuance, @NomineeCnicExpiry, @SourceOfIncome, @AgeBracket, @InvestmentMatterKnowledge, @MonthlyIncomeSaveRatio, @HorizonOfInvestment, @InvestmentObjective, @RiskAppetite, @FinalScore, @NomineeRelation, @PresentAddress, @FatherSpouse, @MobilePersonName, @MobilePersonRelation, @MotherMaidenName, @DividendMandate, @ZakatStatus, @CountryOfBirth, @CountryOfResidence, @TaxIdentificationNo, @PassportNo, @NoofDependent, @Education, @NomineeContactNo, @FatCaCrsDetails, @Kyc1_US_GreenCardHolder, @Kyc2_TransferToUS_BasedAccount, @Kyc3_PowerOfAttorney_AuthorizedSignatory_MandateHolder_USAddress, @Kyc4_USTelephone, @Kyc5_TaxResidenceyOtherThanPak, @Kyc6_TaxResidenceyOtherThanPakAndUS, @Kyc7_RelationWithPoliticallyExposedPerson, @Kyc8_SeniorPositionInGovInstitution, @Kyc9_FinancialLinksToOffshoreTaxHavens,@Kyc10_DealInPreciousMetals,@PrincipleNadraFile, @PrincipleNadraExtension, @NomineeNadraFile, @NomineeNadraExtension, @ProofOfIncomeFile, @ProofOfIncomeExtension, @FatCaFile, @FatCaFieExtention, @ZakatFile, @ZakatFileExtention, @InvestmentTransactionPerYear, @InvestmentAmountPerYear, @AnnualIncome, @Occupation, @AccountOpeningAcceptance, @TermsAndCondition, @IsInvestorOwnMobileNo, @InvestedBySelf, @ZakatDeclaration, @FrontEndLoanDeclaration, @RiskLevel, @RiskDisclaimer, @City, @DistributorCode)`);

      
        // if('userName'== user.userName in sql ){
        //     console.log("UserName already exist")}
        
      // return insertUser.recordsets;
      return true; //console.log({message:"Record inserted"})
    }
    catch (err) { 
      // response.status(500).json(err +" ")
      //  console.log(err +" ");

      
      return (false, err); 
      
       
    }
  }

  
  async function updateRiskProfiling(user) {
    try {
      let pool = await sql.connect(config);
      let insertUser = await pool.request()
      .input('emlaakTransactionId', sql.UniqueIdentifier, user.emlaakTransactionId)
      .input('AgeBracket', sql.VarChar, user.AgeBracket)
      .input('InvestmentMatterKnowledge', sql.VarChar, user.InvestmentMatterKnowledge)
      .input('MonthlyIncomeSaveRatio', sql.VarChar, user.MonthlyIncomeSaveRatio)
      .input('HorizonOfInvestment', sql.VarChar, user.HorizonOfInvestment)
      .input('InvestmentObjective', sql.VarChar, user.InvestmentObjective)
      .input('RiskAppetite', sql.VarChar, user.RiskAppetite)
      .input('FinalScore', sql.VarChar, user.FinalScore)
      .input('RiskDisclaimer', sql.VarChar, user.RiskDisclaimer)
      .input('DistributorCode', sql.VarChar, user.DistributorCode)
      

      .query(`insert into DistributorUpdateRiskProfilingDetails (emlaakTransactionId, AgeBracket, InvestmentMatterKnowledge,MonthlyIncomeSaveRatio, HorizonOfInvestment, InvestmentObjective, RiskAppetite, FinalScore, RiskDisclaimer, DistributorCode) 
                                              values(@emlaakTransactionId, @AgeBracket, @InvestmentMatterKnowledge, @MonthlyIncomeSaveRatio, @HorizonOfInvestment, @InvestmentObjective, @RiskAppetite,@FinalScore, @RiskDisclaimer, @DistributorCode)`);

      
        // if('userName'== user.userName in sql ){
        //     console.log("UserName already exist")}
        
      // return insertUser.recordsets;
      return true; //console.log({message:"Record inserted"})
    }
    catch (err) { 
      // response.status(500).json(err +" ")
      //  console.log(err +" ");
      return (false, err); 
       
    }
  }


  // async function createAccountCallback(user) {
  //   try {
  //     let pool = await sql.connect(config);
  //     let request = await pool.request()
  //     .input('emlaakTransactionId', sql.VarChar, user.emlaakTransactionId)
  //     .input('FolioNumber', sql.VarChar, user.FolioNumber)
        
  //     .query(`SELECT emlaakTransactionId FROM DistributorAccountSSA where emlaakTransactionId = @emlaakTransactionId`);
    
  //   //   .then(result => {
  //           if (request.recordset.length == 0) {
              
  //             return (true,{message: "emlaakTransactionId doesn't exist !"})
            
  //           }
  //           else if (request.recordset.length>0){
  //             try{
  //               let pool = await sql.connect(config);
  //               let request2 = await pool.request()
  //               .input('emlaakTransactionId', sql.VarChar, user.emlaakTransactionId)
  //               .input('FolioNumber', sql.VarChar, user.FolioNumber)
        
  //               .query(`SELECT emlaakTransactionId FROM DistributorCreateAccountCallBack where emlaakTransactionId = @emlaakTransactionId`);
  //               if (request2.recordset.length > 0) {
              
  //                 return (true,{message: "emlaakTransactionId alredy exist in Callback !"})
  //               }
              
  //             else{
  //               try{
                  
                  
  //                 let pool = await sql.connect(config);
  //                 let request3 = await pool.request()
  //                 .input('emlaakTransactionId', sql.VarChar, user.emlaakTransactionId)
  //                 .input('FolioNumber', sql.VarChar, user.FolioNumber)
        
  //             .query(`insert into DistributorCreateAccountCallBack(emlaakTransactionId,FolioNumber) 
  //             values(@emlaakTransactionId, @FolioNumber);
  //             update DistributorAccountSSA set Posted = '1' where emlaakTransactionId = @emlaakTransactionId
  //              `);
  //              return(true, {message:"True"})
  //             }
  //             catch(err){
  //                return (false,{message: "in catch"}); 
  //             }
              
             

  //             };
  //           }
  //             catch(err){
  //               return (false ,{message:"in catch 02"});
  //             }
            
  //           }


            


            async function createAccountCallback(emlaakTransactionId, FolioNumber) {
              try {
                let pool = await sql.connect(config);
                let request = await pool.request()
                .input('emlaakTransactionId', sql.VarChar, emlaakTransactionId)

                .query(`SELECT emlaakTransactionId FROM DistributorAccountSSA where emlaakTransactionId = @emlaakTransactionId`);
                // .query(`Select SA.emlaakTransactionId, CA.folioNumber from DistributorAccountSSA SA  INNER JOIN DistributorCreateAccountCallBack CA ON 
                // SA.emlaakTransactionId = CA.emlaakTransactionId
                // and SA.emlaakTransactionId = @emlaakTransactionId 
                // `);
               
                console.log(request.recordsets, "hello1")
              //   .then(result => {
                      if (request.recordset.length == 0) {
                        console.log(request.recordsets, "hello2")
                        return (true,{message: "emlaakTransactionId Doesn't exist !"})
                      
                      }
                      // else if(){

                      // }
                      else if (request.recordset.length > 0){
                        try{
                          let pool = await sql.connect(config);
                          let request2 = await pool.request()
                          .input('emlaakTransactionId', sql.VarChar, emlaakTransactionId)
                          .input('FolioNumber', sql.VarChar, FolioNumber)
                          .query(`SELECT emlaakTransactionId FROM DistributorCreateAccountCallBack where emlaakTransactionId = @emlaakTransactionId`);
                            if (request2.recordset.length > 0) {
                              // console.log(request.recordsets, "hello2")
                              return (true,{message: "emlaakTransactionId Already Posted !"})
                            }
                            else{
                              let request3 = await pool.request()
                          .input('emlaakTransactionId', sql.VarChar, emlaakTransactionId)
                          .input('FolioNumber', sql.VarChar, FolioNumber)
                          
                           .query(`
                           insert into DistributorCreateAccountCallBack Select emlaakTransactionId, FolioNumber, DistributorCode from DistributorAccountSSA where emlaakTransactionId = @emlaakTransactionId;
                                                   
                                                   update DistributorAccountSSA set Posted = '1' where emlaakTransactionId = @emlaakTransactionId;
                           
                                                   Select emlaakTransactionId, FolioNumber from DistributorAccountSSA where emlaakTransactionId = @emlaakTransactionId; 
                           `);
                        console.log(request3.recordset,"Hello4")
                          // .query(`SELECT emlaakTransactionId FROM DistributorAccountSSA where emlaakTransactionId = @emlaakTransactionId`);
                          // .query(`Select SA.emlaakTransactionId, CA.folioNumber from DistributorAccountSSA SA  INNER JOIN DistributorCreateAccountCallBack CA ON 
                          // SA.emlaakTransactionId = CA.emlaakTransactionId
                          // and SA.emlaakTransactionId = @emlaakTransactionId 
                          // `);
                          return(true, request3.recordset)
                            }
                                 
                        // .query(`insert into DistributorCreateAccountCallBack(emlaakTransactionId,FolioNumber) 
                        // values(@emlaakTransactionId, @FolioNumber);
                        // update DistributorAccountSSA set Posted = '1' where emlaakTransactionId = @emlaakTransactionId;
                        // Select emlaakTransactionId, FolioNumber from DistributorCreateAccountCallBack where emlaakTransactionId = @emlaakTransactionId; 
                        // `);
                         console.log(request2.recordsets,"Hello3")
                         
                         return(true, request2.recordset)
                          }
                      
                        catch(err){
                         console.log(err ,{message:"in catch 02"});
                        }
                      
                      }
                      // else if(request.recordset.length > 0){
                      //   try {
                      //     let pool = await sql.connect(config);
                      //     let request3 = await pool.request()
                      //     .input('emlaakTransactionId', sql.VarChar, emlaakTransactionId)
                          
                      //      .query(`insert into DistributorCreateAccountCallBack(emlaakTransactionId,FolioNumber) 
                      //   values(@emlaakTransactionId, @FolioNumber);
                      //   update DistributorAccountSSA set Posted = '1' where emlaakTransactionId = @emlaakTransactionId;
                      //   Select emlaakTransactionId, FolioNumber from DistributorCreateAccountCallBack where emlaakTransactionId = @emlaakTransactionId; 
                      //   `);
                      //   console.log(request3.recordset,"Hello4")
                      //     // .query(`SELECT emlaakTransactionId FROM DistributorAccountSSA where emlaakTransactionId = @emlaakTransactionId`);
                      //     // .query(`Select SA.emlaakTransactionId, CA.folioNumber from DistributorAccountSSA SA  INNER JOIN DistributorCreateAccountCallBack CA ON 
                      //     // SA.emlaakTransactionId = CA.emlaakTransactionId
                      //     // and SA.emlaakTransactionId = @emlaakTransactionId 
                      //     // `);
                      //     return(true, request3.recordset)
                      // } catch(err){
                      //   console.log(err)
                      // }}

            //   else{
            //     try{
      
            //         let pool = await sql.connect(config);
            //         let request1 = await pool.request()
            //         .input('emlaakTransactionId', sql.VarChar, user.emlaakTransactionId)
            //         .input('FolioNumber', sql.VarChar, user.FolioNumber)
          
            //     .query(`insert into DistributorCreateAccountCallBack(emlaakTransactionId,FolioNumber) 
            //     values(@emlaakTransactionId, @FolioNumber)
            //      `);
            //     //and update DistributorAccountSSA SET 
            //       return (true)
            //       // response.send( {token})
            //       // console.log(result.recordset.length)
            // }
            // catch(err){
            //     return (false,{message:"In catch 03"})
            // }
            // }
        // });
        } 
        catch(err){
          return (false ,{message:"in catch main"});
        }
        
      };
      
      
      
  module.exports = {
    addUser:addUser,
    getUsers:getUsers,
    getDaccountSSA:getDaccountSSA,
    createAccountSSA:createAccountSSA,
    createAccountRegular:createAccountRegular,
    //CheckAccountSSA:CheckAccountSSA,
    CheckAccountRegular:CheckAccountRegular,
    createAccountCallback:createAccountCallback,
    //createAccountCallback:createAccountCallaback,
    updateRiskProfiling:updateRiskProfiling
    // createAccountSSAeg:createAccountSSAeg,
    // CheckaddUser:CheckaddUser
   
  }