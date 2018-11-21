var adminDashboardPage = require('../hms_Page/adminDashboardPage.js');
var forgotPassword = require('../hms_Page/forgotPasswordPage.js');
var loginPage = function(){

    this.enterEmail = function(value){
        element(by.xpath('//*[@id="form_login"]/div[1]/input')).sendKeys(value);
    };

    this.enterPassword = function(value){
        element(by.xpath('//*[@id="form_login"]/div[2]/input')).sendKeys(value);
    };

    this.loginButtonClick = function(){
        element(by.xpath('//*[@id="form_login"]/button')).click();
        return require('./adminDashboardPage.js');
    };

    this.confirmation = function(){
        adminDashboardPage.adminDasboardText();
    };

    this.forgotPassword = function(){
        element(by.xpath('/html/body/div/div[1]/div[2]/div/a')).click(); 
       return require('./forgotPasswordPage.js');    
    };

    this.failedErrorMessage = function(){
        element(by.xpath('/html/body/div[2]')).getText().then(function(errorText){
           expect(errorText).toContain('Login Failed');
            console.log(errorText);
            });
        
    };

    

};

module.exports = new loginPage(); 