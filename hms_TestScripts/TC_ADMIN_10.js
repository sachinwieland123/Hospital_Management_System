var util = require('util');
var login_Page = require('../hms_Page/loginPage.js');

describe('Checking for password reset',function(){


    beforeEach(function(){

        browser.waitForAngularEnabled(false);
        browser.get("http://www.healthlinepro.co/index.php/login");
    });

            it('It should throw a message saying success, please check your email for new password',function(){

            // Click on forgot your password link
           var forgotPasswordPage  = login_Page.forgotPassword();

            // Enter valid email address
            forgotPasswordPage.enterYourEmail("amigospro3@gmail.com");

            // Click on reset password button
            forgotPasswordPage.resetPasswordButtonClick();
            browser.sleep(3000);

            // Check for the confirmation message
            forgotPasswordPage.dynamicSuccessMessage();


    });

            

});


