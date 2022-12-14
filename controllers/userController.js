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
  async function CheckAccountSSA(user) {
    try {
      let pool = await sql.connect(config);

  let checkRecord = await pool.request()
  .input('emlaakTransactionId' , sql.UniqueIdentifier, user.emlaakTransactionId)
  .input('principleCnic' , sql.VarChar, user.principleCnic)
 
      .query(`select * from DistributorAccountSSA where emlaakTransactionId = @emlaakTransactionId AND principleCnic=@principleCnic`)
      .then(function(result){
        //  console.log(result[3])
       if(result.rowsAffected==0){
         createAccountSSA(user);
         return true;
        }
       else {
        //  return false;
         console.log("RECORD ALREADY EXIST")
         
       }
      
      })}
      catch(error){console.log(error)}
    }

  
  async function createAccountSSA(user) {
    try {
      let pool = await sql.connect(config);
      

      // let record = result.rowsAffected[0] ;
      

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
     }
  
     
    catch (err) { 
      console.log(err);
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
      .input('taxIdentificationNo', sql.VarChar, user.taxIdentificationNo)
      .input('passportNo', sql.Bit, user.passportNo)
      .input('noofDependent', sql.VarChar, user.noofDependent)
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
      .input('AccountOpeningAcceptance', sql.Char, user.AccountOpeningAcceptance)
      .input('TermsAndCondition', sql.Char, user.TermsAndCondition)
      .input('IsInvestorOwnMobileNo', sql.Char, user.IsInvestorOwnMobileNo)
      .input('InvestedBySelf', sql.Char, user.InvestedBySelf)
      .input('ZakatDeclaration', sql.Char, user.ZakatDeclaration)
      .input('FrontEndLoanDeclaration', sql.Char, user.FrontEndLoanDeclaration)
      .input('RiskLevel', sql.Bit, user.RiskLevel)
      .input('RiskDisclaimer', sql.Char, user.RiskDisclaimer)
      .input('City', sql.VarChar, user.City)
      .input('DistributorCode', sql.Int, user.DistributorCode)



      .query(`insert into DistributorRegularAccount (emlaakTransactionId, Title, FullName,principleCnic, principleCnicIssuance, principleCnicExpiry, Email, bankAccountTilte,           Iban, Bank, MobileNo,   DateOfBirth, Address, Nominee, NomineeCnicIssuance, NomineeCnicExpiry,      SourceOfIncome, AgeBracket, InvestmentMatterKnowledge,    MonthlyIncomeSaveRatio,  HorizonOfInvestment, InvestmentObjective,    RiskAppetite, FinalScore, NomineeRelation, PresentAddress,     FatherSpouse, MobilePersonName, MobilePersonRelation, MotherMaidenName, DividendMandate,     ZakatStatus, CountryOfBirth, CountryOfResidence,    taxIdentificationNo, passportNo, noofDependent, Education, NomineeContactNo,      FatCaCrsDetails, Kyc1_US_GreenCardHolder, Kyc2_TransferToUS_BasedAccount,     Kyc3_PowerOfAttorney_AuthorizedSignatory_MandateHolder_USAddress, Kyc4_USTelephone,Kyc5_TaxResidenceyOtherThanPak,    Kyc6_TaxResidenceyOtherThanPakAndUS, Kyc7_RelationWithPoliticallyExposedPerson,    Kyc8_SeniorPositionInGovInstitution, Kyc9_FinancialLinksToOffshoreTaxHavens, Kyc10_DealInPreciousMetals, PrincipleNadraFile, PrincipleNadraExtension, NomineeNadraFile, NomineeNadraExtension,ProofOfIncomeFile, ProofOfIncomeExtension, FatCaFile, FatCaFieExtention, ZakatFile, ZakatFileExtention, InvestmentTransactionPerYear, InvestmentAmountPerYear, AnnualIncome, Occupation, AccountOpeningAcceptance, TermsAndCondition, IsInvestorOwnMobileNo, InvestedBySelf, ZakatDeclaration, FrontEndLoanDeclaration, RiskLevel, RiskDisclaimer, City, DistributorCode) 
                                              values(@emlaakTransactionId, @Title, @FullName, @principleCnic, @principleCnicIssuance, @principleCnicExpiry, @Email, @bankAccountTilte, @Iban, @Bank, @MobileNo, @DateOfBirth, @Address, @Nominee, @NomineeCnicIssuance, @NomineeCnicExpiry, @SourceOfIncome, @AgeBracket, @InvestmentMatterKnowledge, @MonthlyIncomeSaveRatio, @HorizonOfInvestment, @InvestmentObjective, @RiskAppetite, @FinalScore, @NomineeRelation, @PresentAddress, @FatherSpouse, @MobilePersonName, @MobilePersonRelation, @MotherMaidenName, @DividendMandate, @ZakatStatus, @CountryOfBirth, @CountryOfResidence, @taxIdentificationNo, @passportNo, @noofDependent, @Education, @NomineeContactNo, @FatCaCrsDetails, @Kyc1_US_GreenCardHolder, @Kyc2_TransferToUS_BasedAccount, @Kyc3_PowerOfAttorney_AuthorizedSignatory_MandateHolder_USAddress, @Kyc4_USTelephone, @Kyc5_TaxResidenceyOtherThanPak, @Kyc6_TaxResidenceyOtherThanPakAndUS, @Kyc7_RelationWithPoliticallyExposedPerson, @Kyc8_SeniorPositionInGovInstitution, @Kyc9_FinancialLinksToOffshoreTaxHavens,@Kyc10_DealInPreciousMetals,@PrincipleNadraFile, @PrincipleNadraExtension, @NomineeNadraFile, @NomineeNadraExtension, @ProofOfIncomeFile, @ProofOfIncomeExtension, @FatCaFile, @FatCaFieExtention, @ZakatFile, @ZakatFileExtention, @InvestmentTransactionPerYear, @InvestmentAmountPerYear, @AnnualIncome, @Occupation, @AccountOpeningAcceptance, @TermsAndCondition, @IsInvestorOwnMobileNo, @InvestedBySelf, @ZakatDeclaration, @FrontEndLoanDeclaration, @RiskLevel, @RiskDisclaimer, @City, @DistributorCode)`);

      
        // if('userName'== user.userName in sql ){
        //     console.log("UserName already exist")}
        
      // return insertUser.recordsets;
      return console.log({message:"Record inserted"})
    }
    catch (err) { 
      console.log(err);
    }
  }
  module.exports = {
    addUser:addUser,
    getUsers:getUsers,
    getDaccountSSA:getDaccountSSA,
    createAccountSSA:createAccountSSA,
    CheckAccountSSA:CheckAccountSSA,
    CheckAccountRegular:CheckAccountRegular
  }