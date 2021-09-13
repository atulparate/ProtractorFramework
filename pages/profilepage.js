const { element, by } = require("protractor");

class ProfilePage{
    #elem_Name = element(by.model('formData.name')) //element(by.xpath('//input[@name="name"]'));
    #elem_Email = element(by.model('formData.email')); //element(by.xpath('//input[@name="email"]'));
    #elem_NextSection = element(by.css('.btn-info'));

    async enter_Name(txt_username){
        await this.#elem_Name.sendKeys(txt_username);
    }

    async enter_Email(txt_email){
        await this.#elem_Email.sendKeys(txt_email);
    }

    async click_NextSection(){
        await this.#elem_NextSection.click();
    }
}

exports.ProfilePage = ProfilePage;