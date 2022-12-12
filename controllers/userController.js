var  config = require('../dbconfig');
const  sql = require('mssql');
const schema = require ('../validations/userValidation');

// const body = req.body;
let UserAdd;
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



  async function createAccountSSA(user) {
    try {
      let pool = await sql.connect(config);
      let insertUser = await pool.request()
      .input('emlaakTransactionId', sql.UniqueIdentifier, user.emlaakTransactionId)
      .input('Title', sql.VarChar, user.Title)
      .input('FullName', sql.VarChar, user.FullName)
      .input('principleCnic', sql.VarChar, user.principleCnic)
      .input('principleCnicIssuance', sql.Date, user.principleCnicIssuance)
      .input('principleCnicExpiry', sql.Date, user.principleCnicExpiry)
      .input('Email', sql.VarChar, user.Email)
      .input('bankAccountTilte', sql.VarChar, user.bankAccountTilte)
      .input('Iban', sql.VarChar, user.Iban)
      .input('Bank', sql.VarChar, user.Bank)
      .input('MobileNo', sql.VarChar, user.MobileNo)
      .input('FatherSpouse', sql.VarChar, user.FatherSpouse)
      .input('DateOfBirth', sql.Date, user.DateOfBirth)
      .input('Address', sql.VarChar, user.Address)
      .input('Nominee', sql.VarChar, user.Nominee)
      .input('NomineeCnic', sql.VarChar, user.NomineeCnic)
      .input('NomineeCnicIssuance', sql.Date, user.NomineeCnicIssuance)
      .input('NomineeCnicExpiry', sql.Date, user.NomineeCnicExpiry)
      .input('SourceOfIncome', sql.VarChar, user.SourceOfIncome)
      .input('AccountCategory', sql.VarChar, user.AccountCategory)
      .input('PrincipleNadraFile', sql.Bit, user.PrincipleNadraFile)
      .input('PrincipleNadraExtension', sql.VarChar, user.PrincipleNadraExtension)
      .input('NomineeNadraFile', sql.Bit, user.NomineeNadraFile)
      .input('NomineeNadraExtension', sql.VarChar, user.NomineeNadraExtension)
      .input('NomineeContactNo', sql.VarChar, user.NomineeContactNo)
      .input('MotherMaideName', sql.VarChar, user.MotherMaideName)
      .input('IsRiskProfiling', sql.Char, user.IsRiskProfiling)
      .input('AgeBracket', sql.VarChar, user.AgeBracket)
      .input('InvestmentMatterKnowledge', sql.VarChar, user.InvestmentMatterKnowledge)
      .input('MonthlyIncomeSaveRatio', sql.VarChar, user.MonthlyIncomeSaveRatio)
      .input('HorizonOfInvestment', sql.VarChar, user.HorizonOfInvestment)
      .input('InvestmentObjective', sql.VarChar, user.InvestmentObjective)
      .input('RiskAppetite', sql.VarChar, user.RiskAppetite)
      .input('FinalScore', sql.VarChar, user.FinalScore)
      .input('occupation', sql.Bit, user.occupation)
      .input('ZakatStatus', sql.VarChar, user.ZakatStatus)
      .input('ZakatFile', sql.Bit, user.ZakatFile)
      .input('ZakatFileExtension', sql.VarChar, user.ZakatFileExtension)
      .input('CountryOfResidence', sql.Bit, user.CountryOfResidence)
      .input('CountryOfBirth', sql.Bit, user.CountryOfBirth)
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
      .input('RiskDisclaimer', sql.Char, user.RiskDisclaimer)
      .input('DistributorCode', sql.Int, user.DistributorCode)
      .input('folioNumber', sql.Int, user.folioNumber)
      .input('Posted', sql.Char, user.Posted)
      .input('city', sql.VarChar, user.city)
      // .input('InvestedBySelf', sql.Char, user.InvestedBySelf)
      // .input('InvestedBySelf', sql.Char, user.InvestedBySelf)



      .query(`insert into DistributorAccountSSA (emlaakTransactionId, Title, FullName,principleCnic, principleCnicIssuance, principleCnicExpiry, Email, bankAccountTilte, Iban, Bank, MobileNo, FatherSpouse, DateOfBirth, Address, Nominee, NomineeCnicIssuance, NomineeCnicExpiry, SourceOfIncome, AccountCategory, PrincipleNadraFile, PrincipleNadraExtension, NomineeNadraFile, NomineeNadraExtension, NomineeContactNo, MotherMaideName, IsRiskProfiling, AgeBracket, InvestmentMatterKnowledge, MonthlyIncomeSaveRatio, HorizonOfInvestment, InvestmentObjective, RiskAppetite, FinalScore, occupation, ZakatStatus, ZakatFile, ZakatFileExtension, CountryOfResidence, CountryOfBirth, AccountOpeningAcceptance, TermsAndCondition, IsInvestorOwnMobileNo, InvestedBySelf, ZakatStatusDeclaration, FrontEndLoanDeclaration, RiskLevel, BornInPakistan, PoliticallyExposedPerson, InvestedForOwn, RiskDisclaimer, DistributorCode, folioNumber, Posted, city) 
      values(@emlaakTransactionId, @Title, @FullName, @principleCnic, @principleCnicIssuance, @principleCnicExpiry, @Email, @bankAccountTilte, @Iban, @Bank, @MobileNo, @FatherSpouse, @DateOfBirth, @Address, @Nominee, @NomineeCnicIssuance, @NomineeCnicExpiry, @SourceOfIncome, @AccountCategory, @PrincipleNadraFile, @PrincipleNadraExtension, @NomineeNadraFile, @NomineeNadraExtension, @NomineeContactNo, @MotherMaideName, @IsRiskProfiling, @AgeBracket, @InvestmentMatterKnowledge, @MonthlyIncomeSaveRatio, @HorizonOfInvestment, @InvestmentObjective, @RiskAppetite, @FinalScore, @occupation, @ZakatStatus, @ZakatFile, @ZakatFileExtension, @CountryOfResidence, @CountryOfBirth, @AccountOpeningAcceptance, @TermsAndCondition, @IsInvestorOwnMobileNo, @InvestedBySelf, @ZakatStatusDeclaration, @FrontEndLoanDeclaration, @RiskLevel, @BornInPakistan, @PoliticallyExposedPerson, @InvestedForOwn, @RiskDisclaimer, @DistributorCode, @folioNumber, @Posted, @city)`);
      
        // if('userName'== user.userName in sql ){
        //     console.log("UserName already exist")}
        
      // return insertUser.recordsets;
      return console.log({message:"Record inserted"})
    }
    catch (err) { 
      console.log(err);
    }
  }
  
  

  // async function createAccountRegular(user) {
  //   try {
  //     let pool = await sql.connect(config);
  //     let insertUser = await pool.request()
  //     .input('emlaakTransactionId', sql.UniqueIdentifier, user.emlaakTransactionId)
  //     .input('Title', sql.VarChar, user.Title)
  //     .input('FullName', sql.VarChar, user.FullName)
  //     .input('principleCnic', sql.VarChar, user.principleCnic)
  //     .input('principleCnicIssuance', sql.Date, user.principleCnicIssuance)
  //     .input('principleCnicExpiry', sql.Date, user.principleCnicExpiry)
  //     .input('Email', sql.VarChar, user.Email)
  //     .input('bankAccountTilte', sql.VarChar, user.bankAccountTilte)
  //     .input('Iban', sql.VarChar, user.Iban)
  //     .input('Bank', sql.VarChar, user.Bank)
  //     .input('MobileNo', sql.VarChar, user.MobileNo)
  //     .input('DateOfBirth', sql.Date, user.DateOfBirth)
  //     .input('Address', sql.VarChar, user.Address)
  //     .input('Nominee', sql.VarChar, user.Nominee)
  //     .input('NomineeCnic', sql.VarChar, user.NomineeCnic)
  //     .input('NomineeCnicIssuance', sql.Date, user.NomineeCnicIssuance)
  //     .input('NomineeCnicExpiry', sql.Date, user.NomineeCnicExpiry)
  //     .input('SourceOfIncome', sql.VarChar, user.SourceOfIncome)
  //     .input('AgeBracket', sql.VarChar, user.AgeBracket)
  //     .input('InvestmentMatterKnowledge', sql.VarChar, user.InvestmentMatterKnowledge)
  //     .input('MonthlyIncomeSaveRatio', sql.VarChar, user.MonthlyIncomeSaveRatio)
  //     .input('HorizonOfInvestment', sql.VarChar, user.HorizonOfInvestment)
  //     .input('InvestmentObjective', sql.VarChar, user.InvestmentObjective)
  //     .input('RiskAppetite', sql.VarChar, user.RiskAppetite)
  //     .input('FinalScore', sql.VarChar, user.FinalScore)
  //     .input('nomineeRelation', sql.VarChar, user.nomineeRelation)
  //     .input('presentAddress', sql.VarChar, user.presentAddress)
  //     .input('fatherSpouse', sql.VarChar, user.fatherSpouse)
  //     .input('mobilePersonName', sql.VarChar, user.mobilePersonName)
  //     .input('mobilePersonRelation', sql.VarChar, user.mobilePersonRelation)
  //     .input('motherMaidenName', sql.VarChar, user.motherMaidenName)
  //     .input('dividendMandate', sql.VarChar, user.dividendMandate)
  //     .input('ZakatStatus', sql.VarChar, user.ZakatStatus)
  //     .input('CountryOfBirth', sql.Bit, user.CountryOfBirth)
  //     .input('CountryOfResidence', sql.Bit, user.CountryOfResidence)
  //     .input('taxIdentificationNo', sql.VarChar, user.taxIdentificationNo)


  //     .input('passportNo', sql.Bit, user.passportNo)
  //     .input('noofDependent', sql.VarChar, user.PrincipleNadraExtension)
  //     .input('NomineeNadraFile', sql.Bit, user.NomineeNadraFile)
  //     .input('NomineeNadraExtension', sql.VarChar, user.NomineeNadraExtension)
  //     .input('NomineeContactNo', sql.VarChar, user.NomineeContactNo)
  //     .input('MotherMaideName', sql.VarChar, user.MotherMaideName)
  //     .input('IsRiskProfiling', sql.Char, user.IsRiskProfiling)
      
      
  //     .input('occupation', sql.Bit, user.occupation)
      
  //     .input('ZakatFile', sql.Bit, user.ZakatFile)
  //     .input('ZakatFileExtension', sql.VarChar, user.ZakatFileExtension)
      
      
  //     .input('AccountOpeningAcceptance', sql.Char, user.AccountOpeningAcceptance)
  //     .input('TermsAndCondition', sql.Char, user.TermsAndCondition)
  //     .input('IsInvestorOwnMobileNo', sql.Char, user.IsInvestorOwnMobileNo)
  //     .input('InvestedBySelf', sql.Char, user.InvestedBySelf)
  //     .input('ZakatStatusDeclaration', sql.Char, user.ZakatStatusDeclaration)
  //     .input('FrontEndLoanDeclaration', sql.Char, user.FrontEndLoanDeclaration)
  //     .input('RiskLevel', sql.VarChar, user.RiskLevel)
  //     .input('BornInPakistan', sql.Char, user.BornInPakistan)
  //     .input('PoliticallyExposedPerson', sql.Char, user.PoliticallyExposedPerson)
  //     .input('InvestedForOwn', sql.Char, user.InvestedForOwn)
  //     .input('RiskDisclaimer', sql.Char, user.RiskDisclaimer)
  //     .input('DistributorCode', sql.Int, user.DistributorCode)
  //     .input('folioNumber', sql.Int, user.folioNumber)
  //     .input('Posted', sql.Char, user.Posted)
  //     .input('city', sql.VarChar, user.city)
  //     // .input('InvestedBySelf', sql.Char, user.InvestedBySelf)
  //     // .input('InvestedBySelf', sql.Char, user.InvestedBySelf)



  //     .query(`insert into createAccountRegular (emlaakTransactionId, Title, FullName,principleCnic, principleCnicIssuance, principleCnicExpiry, Email, bankAccountTilte, Iban, Bank, MobileNo, DateOfBirth, Address, Nominee, NomineeCnicIssuance, NomineeCnicExpiry, SourceOfIncome, AccountCategory, PrincipleNadraFile, PrincipleNadraExtension, NomineeNadraFile, NomineeNadraExtension, NomineeContactNo, MotherMaideName, IsRiskProfiling, AgeBracket, InvestmentMatterKnowledge, MonthlyIncomeSaveRatio, HorizonOfInvestment, InvestmentObjective, RiskAppetite, FinalScore, occupation, ZakatStatus, ZakatFile, ZakatFileExtension, CountryOfResidence, CountryOfBirth, AccountOpeningAcceptance, TermsAndCondition, IsInvestorOwnMobileNo, InvestedBySelf, ZakatStatusDeclaration, FrontEndLoanDeclaration, RiskLevel, BornInPakistan, PoliticallyExposedPerson, InvestedForOwn, RiskDisclaimer, DistributorCode, folioNumber, Posted, city) 
  //     values(@emlaakTransactionId, @Title, @FullName, @principleCnic, @principleCnicIssuance, @principleCnicExpiry, @Email, @bankAccountTilte, @Iban, @Bank, @MobileNo, @FatherSpouse, @DateOfBirth, @Address, @Nominee, @NomineeCnicIssuance, @NomineeCnicExpiry, @SourceOfIncome, @AccountCategory, @PrincipleNadraFile, @PrincipleNadraExtension, @NomineeNadraFile, @NomineeNadraExtension, @NomineeContactNo, @MotherMaideName, @IsRiskProfiling, @AgeBracket, @InvestmentMatterKnowledge, @MonthlyIncomeSaveRatio, @HorizonOfInvestment, @InvestmentObjective, @RiskAppetite, @FinalScore, @occupation, @ZakatStatus, @ZakatFile, @ZakatFileExtension, @CountryOfResidence, @CountryOfBirth, @AccountOpeningAcceptance, @TermsAndCondition, @IsInvestorOwnMobileNo, @InvestedBySelf, @ZakatStatusDeclaration, @FrontEndLoanDeclaration, @RiskLevel, @BornInPakistan, @PoliticallyExposedPerson, @InvestedForOwn, @RiskDisclaimer, @DistributorCode, @folioNumber, @Posted, @city)`);
      
  //       // if('userName'== user.userName in sql ){
  //       //     console.log("UserName already exist")}
        
  //     // return insertUser.recordsets;
  //     return console.log({message:"Record inserted"})
  //   }
  //   catch (err) { 
  //     console.log(err);
  //   }
  // }
  module.exports = {
    addUser:addUser,
    getUsers:getUsers,
    createAccountSSA:createAccountSSA
  }