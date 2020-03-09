const assert = require('assert');
const webdriver = require('webdriverio');
const L = require("list");

describe('Change Password Module', () => 
{
   before('Execute Before All Tests', () => {
      browser.url('/');
      browser.pause(5000);
      let winsize1 =browser.setWindowSize(1024, 768);
      
      console.log(winsize1);
      browser.pause(5000);
      console.log('Execute Before All Tests');
  });
  
it ('C4874-Verify Change Password page is available under My Account', () => {
 browser.url('https://kalp.salesmate.io/#/app/user/changePassword');
        browser.pause(2000);
        let interfPrefTitle = $('[class="sub-title pull-left"]').getText();
        assert.equal(interfPrefTitle,'Change Password');
        console.log("Change Password Page Title Verified.");
});
it ('C153-Verify mandatoy fields on Change Password tab', () => {
   
         $('#oldPassword').doubleClick();
         browser.keys('Tab');
         let header3 = $('[class="error-message text-danger"]').getText();
         assert.equal(header3, 'Please enter old password');
         browser.refresh();
         browser.pause(5000);
         $('#newPassword').doubleClick();
         browser.keys('Tab');
         let header4 = $('[class="error-message text-danger"]').getText();
         assert.equal(header4, 'Please enter new password');
         browser.refresh();
         browser.pause(5000);
         $('#confirmPassword').doubleClick();
         browser.keys('Tab');
         let header5 = $('[class="error-message text-danger"]').getText();
         assert.equal(header5, 'Please re-type password');

         console.log('Verified mandatory fields on Change Password tab');
         browser.refresh();
         browser.pause(6000);
  });

  it ('C154-Verify wrong Old Password validation', () => {
   let oldPwd = $('#oldPassword');
       oldPwd.addValue('1234567890')
          browser.pause(1000);
          let NewPwd = $('#newPassword');
          NewPwd.addValue('654321')
          browser.pause(1000);
           let CnfPwd = $('#confirmPassword');
           CnfPwd.addValue('654321')
        browser.pause(1000);
          let b2 = $('#btnUpdate').click();
          let msg = $('[class="noty_text"]').getText();
    assert.equal(msg, 'Invalid old password');
    browser.refresh();
    browser.pause(5000);
  });
  it ('C155-Verify wrong Re-type Password validation', () => {
   let oldPwd = $('#oldPassword');
       oldPwd.addValue('123456')
          browser.pause(1000);
          let NewPwd = $('#newPassword');
          NewPwd.addValue('654321')
          browser.pause(1000);
           let CnfPwd = $('#confirmPassword');
           CnfPwd.addValue('987654321')
        browser.pause(1000);
          let b2 = $('#btnUpdate').click();
          let msg = $('[class="noty_text"]').getText();
    assert.equal(msg, 'New password and re-type password do not match.');
    browser.refresh();
    browser.pause(5000);
  });

it ('C156(A)-user wants to change password', () => {
    browser.pause(2000);
   //  $('[class="thumb-sm avatar avatar-8"]').click();
   //  $('[class="icon-user m-r-sm"]').click();
   //  const chngPwdLink = $('#app > app > div > div > div > div.app-content.cell.auto.medium-cell-block > div > my-account > div > div.w-xl.bg-white-only.left-bar.cell.medium-cell-block-y > sm-user-profile-sidebar > ul > li:nth-child(2)').click();
   //  browser.pause(2000);
     let oldPwd = $('#oldPassword');
    oldPwd.addValue('123456')
       browser.pause(1000);
       let NewPwd = $('#newPassword');
       NewPwd.addValue('654321')
       browser.pause(1000);
        let CnfPwd = $('#confirmPassword');
        CnfPwd.addValue('654321')
     browser.pause(1000);
       let b2 = $('#btnUpdate').click();
       browser.pause(4000);
});

it ('C156(B)-user wants to logout after change password', () => {
    browser.pause(2000);
    $('[class="thumb-sm avatar avatar-8"]').click()
    $('[class="icon-power m-r-sm"]').click()
   browser.pause(2000);
});

   it ('User wants to redirect to Google Sign In page',()=>{
      browser.pause(2000); 
      $('[class="glabel"]').click();
       browser.pause(3000);
       let win = browser.getWindowHandles();
       let newwin = win[win.length-1];
       browser.switchToWindow(newwin);
      browser.pause(2000);
       let textv = $('#headingSubtext').getText();
        assert.equal(textv,'Continue to Salesmate.io');
        browser.pause(2000);
       let gmailEmail = $('#identifierId');
         gmailEmail.setValue('salesmateauto@gmail.com');
       $('#identifierNext').click();
       browser.pause(10000);
       //$('[class="OabDMe cXrdqd Y2Zypf"]').doubleClick();
       let gmailpwd = $('input[type=password]');
      
       //let gmailPassword = $('[class="whsOnd zHQkBf"]');       
       //let gmailPassword = $('[class="OabDMe cXrdqd Y2Zypf"]');       
       gmailpwd.setValue('Rapidops@123');
       browser.pause(2000);
       $('#passwordNext').click();
     browser.pause(15000);
     let win1 = browser.getWindowHandles();
     let newwin1 = win1[win1.length-1];
       browser.switchToWindow(newwin1);
    //    let header = $('h2').getText();
    //    assert.equal(header, 'Dashboard');
    let header1 = $('h2=Dashboard').getText();
   // let header1 = $('#app > app > div > div > div > header > div > h2').getText();
    assert.equal(header1, 'Dashboard');

   });

   it ('User wants to logout after Google Sign In', () => {
      browser.pause(5000);
      let elem = $('[class="thumb-sm avatar avatar-4"]');
    let isDisplayed = elem.isDisplayed();
    console.log('=============');
    console.log(isDisplayed);
    console.log('=============');
      $('[class="thumb-sm avatar avatar-4"]').click()
      browser.pause(2000);
      $('[class="icon-power m-r-sm"]').click()
     browser.pause(2000);
  });

it ('C156(C)-user verify login after change password', () => {
   browser.pause(2000);
   let mail1 = $('#email')
      mail1.addValue('kalp.shah@rapidops.com')
      let pwd = $('#password')
      pwd.addValue('654321')
      let b1 = $('#login_btn').click()
      browser.pause(12000)
});

 it ('C156(C)-user wants to change password again', () => {
    $('[class="thumb-sm avatar avatar-8"]').click();
    $('[class="icon-user m-r-sm"]').click();
    const chngPwdLink = $('#app > app > div > div > div > div.app-content.cell.auto.medium-cell-block > div > my-account > div > div.w-xl.bg-white-only.left-bar.cell.medium-cell-block-y > sm-user-profile-sidebar > ul > li:nth-child(2)').click();
    browser.pause(2000);
 let oldPwd = $('#oldPassword');
 oldPwd.addValue('654321')
    browser.pause(1000);
    let NewPwd = $('#newPassword');
    NewPwd.addValue('123456')
    browser.pause(1000);
    let CnfPwd = $('#confirmPassword');
    CnfPwd.addValue('123456')
    browser.pause(1000);
    let b3 = $('#btnUpdate').click();
 });

});