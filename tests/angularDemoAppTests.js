const { Common } = require("../pages/common");
const { InterestsPage } = require("../pages/interestspage");
const { ProfilePage } = require("../pages/profilepage");
const { UtilActions } = require("../utils/utilactions");
const profilepage = new ProfilePage();
const utilactions = new UtilActions();
const common = new Common();
const interestspage = new InterestsPage();

describe('Angular Applications Tests', ()=>{
    
    it('should navigate to profile page of angular application', async()=>{
        await common.navigateToAppUrl('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile', true);
        await utilactions.wait(2);
        await expect(browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
        
    });

    it('should fill valid profile details', async()=>{
        await profilepage.enter_Name("Automation Tester");
        await profilepage.enter_Email("test123@gmail.com");
        await profilepage.click_NextSection();
        await expect(browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/multiform/#/form/interests');
    });

    it('should select choice of console', async()=>{
        await interestspage.selectYourConsoleChoice();
        await profilepage.click_NextSection();
        await expect(browser.getCurrentUrl()).toBe('http://www.way2automation.com/angularjs-protractor/multiform/#/form/payment');
    });

    
});