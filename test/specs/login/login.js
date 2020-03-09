const assert = require('assert');
const webdriver = require('webdriverio');
let userLogin = require('../basic')


//  const winsize = browser.getWindowSize();
//  console.log("=====Current Windows Size=====")
//  console.log(winsize);
//  console.log("=====Windows Size=====")
   
describe('Login Module', function() 
{
  before('Execute Before All Tests', () => {
    browser.url('/');
    browser.pause(5000);
    let winsize1 =browser.setWindowSize(1024, 768);
    
    console.log(winsize1);
    browser.pause(5000);
    console.log('Execute Before All Tests');
});

   it ('should not allow me to login with blank input', () =>{
    //allureReporter.addFeature('Feature1')
       userLogin.Login('', '');
       const alrt1 = $('#err_message').getText();
       assert.equal(alrt1, 'Please enter an email address');
   });
   it ('should not allow to login with only email address', () => {
    //allureReporter.addFeature('Feature2')
      userLogin.Login('kalp', '');
       let alrt1 =  $('#err_message').getText();
       assert.equal(alrt1, 'Please enter password');
   });
   it ('should not allow to login with invalid email address', () => {
    //allureReporter.addFeature('Feature3')
      userLogin.Login('kalp', '6544576');
       let alrt1 =  $('#err_message').getText();
       assert.equal(alrt1, 'Please enter valid email address');
   });
   it('should not allow to login with invalid credentials', () => {
   // allureReporter.addFeature('Feature4')
      userLogin.Login('kalp@gmail.com', '6544576');
       browser.pause(2000);
       let alrt1 = $('#err_message').getText();
       assert.equal(alrt1, 'Email or Password is invalid');
   });
   it ('should  allow to login with valid input and verify home screen banner', () => {
    //allureReporter.addFeature('Feature5')
       userLogin.Login('kalp.shah@rapidops.com', '123456');
      browser.pause(14000);
        let header = $("h2").getText();
        let header1 = $('h2=Dashboard').getText();
        console.log("=====H2 get Text=====");
        console.log(header);
        console.log(header1);
        console.log("=====H2 get Text=====");
        assert.equal(header, 'Dashboard');
       // let header1 = $('#app > app > div > div > div > header > div > h2').getText();
      // assert.equal(header, 'Dashboard');
   });
   
}); 

//  console.log('Win Start-----------')  
      //  console.log(win[0]);
      //  console.log('Win Start last -----------')  

      // console.log(win[win.length-1]);
      // console.log('Win End-----------')
      //let val = win.getValue();
      //browser.switchToWindow();
      

            // browser.switchWindow(urlOrTitleToMatch);
      // console.log('textv Start-----------');
      // console.log(textv);
      // console.log('textv End-----------');
       //$('#identifierId').doubleClick();
     // = = = = = = = = = =  = = = = = = = = = = = = = 
//    function addContact(i)
//    {
//        $('[class="btn btn-sm btn-primary m-r-xs"]').click();
//        $('#firstName').addValue('anna');
//        $('#lastName').addValue('test');
//        $('#mobile').addValue('4354363535');
//        $('#phone').addValue('56456436');
//        $('#email').addValue('anna_t@yopmail.com');
//        browser.keys('Tab');
//        browser.keys('Sales');
//        browser.pause(3000);
//        browser.keys(['\uE05B', 'Enter']);
//        $('#designation').addValue('Archive Manager');
//        $('#billingAddressLine1').addValue('Alice Avenue');
//        $('#billingAddressLine2').addValue('b/h market road');
//        $('#billingCity').addValue('cityland');
//        $('#billingState').addValue('The State');
//        $('#billingCountry').addValue('Country');
//        $('#billingZipCode').addValue('345435');
//        browser.pause(4000);
//        $('#btnSubmit').click();
//        browser.pause(4000);
//    }

   //    it ('should allow to see contact popup validation', () => {
//        browser.url('https://kalp.salesmate.io/#/app/contacts/list');
//        browser.pause(3000);
//        addContact('');
//        const alrt1 = $('[class="error-message text-danger"]').getText();
//        assert.equal(alrt1, 'Last Name is required')
//        $('.close').click();
//    });
//    it ('should allow to add contact', () => {
//        addContact('Wilson');
//        $('//*[@id="borderLayout_eGridPanel"]/div[1]/div/div[4]/div[1]/div/div[1]/div[2]').click();
//        browser.pause(4000);
//        let contactmail = $('#email').getValue();
//        assert.equal(contactmail, 'anna_t@yopmail.com')
//        browser.pause(4000);
//        $('.close').click();
//    });
//    it('should allow to logout', () => {
//        $('[class="dropdown navi-user-thumb t-f-tr"]').click();
//        $('[class="icon-power m-r-sm"]').click()
//    });
