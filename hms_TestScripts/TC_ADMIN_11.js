var util = require('util');
var login_Page = require('../hms_Page/loginPage.js');

describe('Checking for password reset',function(){


    beforeEach(function(){
    browser.waitForAngularEnabled(false);
    });
            

            it('It should throw a message saying success, please check your email for new password',function(){

             browser.get("https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
             browser.sleep(5000);

             element(by.xpath('//*[@id="identifierId"]')).sendKeys('amigospro3@gmail.com');

             element(by.xpath('//*[@id="identifierNext"]/content/span')).click();

             browser.sleep(2000);

             element(by.xpath('//*[@id="password"]/div[1]/div/div[1]/input')).sendKeys('Amigos123');

             element(by.xpath('//*[@id="passwordNext"]/content/span')).click();

             browser.sleep(25000);

             element(by.xpath('//*[@id="aso_search_form_anchor"]/div/input')).sendKeys("in:spam");

             element(by.xpath('//*[@id="aso_search_form_anchor"]/button[2]')).click();

             

             element(by.xpath('//*[@id=":10q"]')).sendKeys("arjun@wielandsolutions.com");

             element(by.xpath('//*[@id=":10c"]')).click();

             browser.sleep(5000);
             
           
        });

});


