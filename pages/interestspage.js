const { element, by } = require("protractor");

class InterestsPage{
    #ilikeps4 = element(by.xpath('//input[@name="00A"]'));
    #ilikexbox = element(by.xpath('//input[@name="009"]'));

    async selectYourConsoleChoice(){
        await this.#ilikeps4.click();
    }
 
}

exports.InterestsPage = InterestsPage;