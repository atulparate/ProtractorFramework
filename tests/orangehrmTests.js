const { browser } = require('protractor');
const { Common } = require('../pages/common');
const { HomePage } = require('../pages/homepage');
const { LoginPage } = require('../pages/loginpage');

const loginpage = new LoginPage();
const homepage = new HomePage();
const common = new Common();


describe('Orange HRM Tests', ()=>{

    it('should login into the application with valid creds', async()=>{
        await common.navigateToAppUrl('https://opensource-demo.orangehrmlive.com/', false);
        await loginpage.loginToApplication("Admin","admin123");
        await expect(browser.getCurrentUrl()).toBe('https://opensource-demo.orangehrmlive.com/index.php/dashboard');

    });
    it('should navigate to Users page', async()=>{
        await homepage.navigateToUsers();
        await expect(browser.getCurrentUrl()).toBe('https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers');
    });

});
