const { element, by, browser } = require("protractor");
const { UtilActions } = require("../utils/utilactions");
const utilactions = new UtilActions();
// let homepage = function(){
    // let link_Admin = element(by.id('menu_admin_viewAdminModule'));
    // let link_UserManagement = element(by.id('menu_admin_UserManagement'));
    // let link_Users = element(by.id('menu_admin_viewSystemUsers'));
    // let link_WelcomeUser = element(by.id('welcome'));
    // let link_Logout = element(by.xpath('//li/a[text()="Logout"]'));
    // this.navigateToUsers = function(){
        // browser.actions().mouseMove(link_Admin).mouseMove(link_UserManagement).mouseMove(link_Users).click().perform();
        // browser.sleep(5000);
    // };

    // this.logoutFromApplication = function(){
        // link_WelcomeUser.click();
        
        // link_Logout.click();
    // };
// };

// module.exports = new homepage();

class HomePage {
    #link_Admin = element(by.id('menu_admin_viewAdminModule'));
    #link_UserManagement = element(by.id('menu_admin_UserManagement'));
    #link_Users = element(by.id('menu_admin_viewSystemUsers'));
    #link_WelcomeUser = element(by.id('welcome'));
    #link_Logout = element(by.xpath('//a[text()="Logout"]'));//element(by.xpath('//li/a[text()="Logout"]'));

    async navigateToUsers(){
        await browser.actions().mouseMove(this.#link_Admin).mouseMove(this.#link_UserManagement).mouseMove(this.#link_Users).click().perform();
        // await browser.sleep(5000);
        await utilactions.wait(5);
    }

    async logoutFromApplication(){
        await this.#link_WelcomeUser.click();
        await utilactions.wait(5);
        await this.#link_Logout.click();
    }
}

exports.HomePage = HomePage;
