var util = require('util');
var login_Page = require('../hms_Page/loginPage.js');


describe('Test for Reset Password',function(){

          beforeEach(function(){
            // Disable Angular for a non angular page;
            browser.waitForAngularEnabled(false);
            //load the page:
            browser.get("http://www.healthlinepro.co/index.php/login");
            //browser.manage().timeouts().implicitlywait(5000);
      });


                         it('Password should be reset sucessfully',function(){

                          // click on frogot your password? link
                          var forgottenPassword = login_Page.forgotPassword();

                          //Enter your email address
                          forgottenPassword.enterYourEmail('amigospro3@gmail.com');

                          //Click on reset password button
                          forgottenPassword.resetPasswordButtonClick();

                          browser.sleep(2000);

                          //Check for Password reset confirmation message at the right bottom of the screen
                          element(by.xpath('/html/body/div[2]')).getText().then(function(text){
                          expect(text).toContain('Success');
                          console.log(text);


                });

         });

  }); 
