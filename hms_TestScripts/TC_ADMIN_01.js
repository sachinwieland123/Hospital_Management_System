var util = require('util');
var login_Page = require('../hms_Page/loginPage.js');


describe('Test for login',function(){

       beforeEach(function(){
        // Disable Angular for a non angular page;
        browser.waitForAngularEnabled(false);

        //load the page:
        browser.get("http://www.healthlinepro.co/index.php/login");
   });     

          // TC_01 : valid email address and valid password: 
          it('Enter email < Enter password < Click on login button < Should login successfully',function(){

                //Enter email address
                login_Page.enterEmail('amigospro3@gmail.com');

                //Enter the Password
                login_Page.enterPassword('1fa5ea0');

                // Click on Login button
                var adminDashboardPage = login_Page.loginButtonClick();

                browser.sleep(2000);

                //Get text from the Dashboard page for confirmation of successfull navigation;
                adminDashboardPage.adminDasboardText();
                
         
                     });
                          
 });
        

