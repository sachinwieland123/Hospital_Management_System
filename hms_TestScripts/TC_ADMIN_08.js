var util = require('util');
var login_Page = require('../hms_Page/loginPage.js');

describe('Check for Invalid email address and Valid Password',function(){

    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://www.healthlinepro.co/index.php/login");
    });

    it('It should throw an error message saying login failed',function(){

        // Enter Invalid email address;
        login_Page.enterEmail('abc@gmail.com');

        // Enter Valid passord;
        login_Page.enterPassword('1fa5ea0');

        // Click on Logiin button;
        login_Page.loginButtonClick();

        browser.sleep(2000);

        // Verifying Failed error message
        login_Page.failedErrorMessage();

    });

});