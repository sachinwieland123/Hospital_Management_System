var forgotPasswordPage = function(){

    this.enterYourEmail = function(value){
        element(by.xpath('//*[@id="form_login"]/div/input')).sendKeys(value);
    };

    this.resetPasswordButtonClick = function(){
        element(by.xpath('//*[@id="form_login"]/button')).click();
    };

    this.dynamicSuccessMessage = function(){
        return element(by.xpath('/html/body/div[2]')).getText().then(function(text){
            // expect(text).toEqual('Please check your email for the new password');
            console.log(text);
        });
          
    };

};

module.exports = new forgotPasswordPage();
