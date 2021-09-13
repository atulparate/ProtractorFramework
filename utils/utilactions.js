const { browser, ExpectedConditions, element } = require("protractor");

class UtilActions{    
//     function wait(timeToWaitInSecs){
//         timeToWaitInSecs = timeToWaitInSecs * 1000;
//         browser.sleep(timeToWaitInSecs);
//         console.log('Hello i am inside wait function');
//     }
//     function waitForElement(elem){
//         var EC = protractor.ExpectedConditions;
//         browser.wait(EC.visibilityOf(elem),maxTimeOut);
//     };  

    async wait(timeToWaitInSecs){
        timeToWaitInSecs = timeToWaitInSecs * 1000;
        browser.sleep(timeToWaitInSecs);
    }

}

exports.UtilActions = UtilActions;











