var util = require('util');
var login_Page = require('../hms_Page/loginPage.js');

describe('Checking for invalid email and invalid password',function(){

    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://www.healthlinepro.co/index.php/login");
    });

        it('It should display error message saying login failed',function(){

            // Enter invalid email address
            login_Page.enterEmail('abc@gmail.com');

            // Enter Invalid Password
            login_Page.enterPassword('abc');

            // Click on login button
            login_Page.loginButtonClick();

            // Verify the error message
            browser.sleep(5000);
            login_Page.failedErrorMessage();


        });
});