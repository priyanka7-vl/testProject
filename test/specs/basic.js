 const assert = require('assert');
module.exports = class basic {

    static Login(email,password)
    {
        browser.pause(1000);
        let mail1 = $('#email');
       mail1.addValue(email);
       browser.pause(1000);
       let pwd = $('#password');
       pwd.addValue(password);
       browser.pause(1000);
       let b1 = $('#login_btn').click();
       mail1.clearValue();
       pwd.clearValue();
    }

    static toggleOFF(selector)
    {
        browser.pause(3000);
        let contemail = $(selector).$('..');
       let contemailValue = $(selector).getValue();
       contemail.click();
       let b7 = $('#btnUpdate').click();    
       browser.pause(3000);
       assert.equal(contemailValue,'true');
    }

    static toggleON(selector)
    {
        browser.pause(1000);
        let contemail = $(selector).$('..');
       let contemailValue = $(selector).getValue();
       contemail.click();
       let b7 = $('#btnUpdate').click();    
       browser.pause(3000);
       assert.equal(contemailValue,'false');
    }


}