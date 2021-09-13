const { browser } = require("protractor");

class Common{
    async navigateToAppUrl(url,isAngulaerApp){
        if(!isAngulaerApp){
            await browser.waitForAngularEnabled(false);
        }
        await browser.get(url);
    }
}

exports.Common = Common;