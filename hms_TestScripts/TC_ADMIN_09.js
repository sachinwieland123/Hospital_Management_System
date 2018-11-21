var util = require('util');
var login_Page = require('../hms_Page/loginPage.js');


describe('checking for Valid email address and invalid Password',function(){

     beforeEach(function(){
       
            browser.waitForAngularEnabled(false);
            browser.get("http://www.healthlinepro.co/index.php/login"); 

    });

                it('It should throw an error message saying login failed',function(){

                    //Enter Valid email address
                    login_Page.enterEmail("amigospro3@gmail.com");

                    //Enter Incorrect Password
                    login_Page.enterPassword("abc");

                    // Click Login button
                    login_Page.loginButtonClick();
                    browser.sleep(3000);

                    // Verify error message
                    login_Page.failedErrorMessage();




    });
});