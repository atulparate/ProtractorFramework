// let utils = require('../utils/utils');
let utilactions = require('../utils/utilactions');
const { element, by, browser, utils } = require("protractor");
const {wait, waitForElement} = require('../utils/utilactions')
//import { wait } from "../utils/utilactions";

// let loginpage = function(){
    // let username = element(by.id('txtUsername'));
    // let password = element(by.id('txtPassword'));
    // let login = element(by.id('btnLogin'));
    

    // this.loginToApplication = function(txt_username, txt_password){
        // username.sendKeys(txt_username);
        // password.sendKeys(txt_password);
        // login.click()
    // }

    // this.navigateToAppUrl = function(url){
        // browser.waitForAngularEnabled(false);
        // browser.get(url);
        // // browser.sleep(10000)
        // wait(10);
        
    // }

    // this.verifyPageTitle = function(){
        // browser.getTitle()
    // }
// };

// module.exports = new loginpage();


class LoginPage{
    #username = element(by.id('txtUsername'));
    #password = element(by.id('txtPassword'));
    #login = element(by.id('btnLogin'));

    async loginToApplication(txt_UserName, txt_Password){
        await this.#username.sendKeys(txt_UserName);
        await this.#password.sendKeys(txt_Password);
        await this.#login.click();
    }

    async verifyPageTitle(){

    }

}

exports.LoginPage = LoginPage;