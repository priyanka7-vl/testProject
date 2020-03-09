const assert = require('assert');
const webdriver = require('webdriverio');
const path = require('path');

describe('My Account Module', () => 
{
  before('Execute Before All Tests', () => {
    browser.url('/');
    browser.pause(5000);
    let winsize1 =browser.setWindowSize(1024, 768);
    
    console.log(winsize1);
    browser.pause(5000);
    console.log('Execute Before All Tests');
});

    it ('C144 - Verify General Settings page is available under My Account', () => {
        browser.pause(4000);
        $('[class="thumb-sm avatar avatar-8"]').click();
        $('[class="icon-user m-r-sm"]').click();
        let header = $('[class="sub-title pull-left"]').getText();
        assert.equal(header, 'General Settings');
        browser.pause(2000);
        console.log('Verify General Setting Title');
    }); 
    it ('C145 - Verify mandatory fields on General Settings page', () => {
        browser.pause(4000)
        
        let Fnames = $('#firstName');
        //  myfirstName.setValue('test123')
        $('#firstName').doubleClick();
        //Fnames.clearValue();
        browser.keys(['Delete', 'Tab', 'Delete']);
        browser.keys(['Tab', 'Delete']);           
        browser.pause(1000);
        let b2 = $('#btnUpdate').click()    
        browser.pause(2000);
        let header2 = $('[class="error-message text-danger"]').getText();
        assert.equal(header2,'This field is required.');
        browser.pause(1000);
        console.log('Verified mandatory fields on General Settings page');
        browser.refresh();
        browser.pause(4000);
    }); 

 // C146 is not working - Need to update Test Case OR might need to delete the test caes.

   it('C147 - Verify First Name field with more than 100 chars validation', () => {
    $('#firstName').doubleClick();
      let Fnames = $('#firstName');
     Fnames.clearValue();
     Fnames.setValue('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901')
    browser.keys('Tab');
    let header3 = $('[class="error-message text-danger"]').getText();
    assert.equal(header3, 'First name should be maximum 100 characters');
    browser.refresh();
    browser.pause(3000)
  }); 

//   // C148 is not working - Need to update Test Case OR might need to delete the test caes.

  it('C149 - Verify Last Name field with more than 100 chars validation', () => {
    $('#lastName').doubleClick();
      let Lnames = $('#lastName');
     Lnames.clearValue();
     Lnames.setValue('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901');
    browser.keys('Tab');
    browser.pause(1000);
    let header4 = $('[class="error-message text-danger"]').getText();
    assert.equal(header4,'Last name should be maximum 100 characters');
    browser.pause(1000);
    browser.refresh();
    browser.pause(3000);
  }); 
 
 it('C150 - Verify Email validation', () => {
  $('#firstName').doubleClick();
  //Fnames.clearValue();
  
  //browser.keys(['Tab', 'Delete']);            
  
  //$('#email').doubleClick();
      let Emails = $('#email');
      browser.keys(['Tab', 'Tab', 'Delete']);
      //browser.keys(['Delete', 'Delete', 'Delete']);
      browser.pause(4000);
      Emails.clearValue();
     Emails.setValue(' ');
     Emails.setValue('kalpshah.com')
     browser.keys('Tab');
    let header5 = $('[class="error-message text-danger"]').getText();
    assert.equal(header5, 'Please provide a valid email address');
    browser.refresh();
    browser.pause(3000)
  }); 

//   // C151 - Mobile field with more than 15 chars - Need to update Test Case OR might need to delete the test caes.

//   // C152 - Verify update General setting functionality ( Need to write test case)
//   // it('C152 - Verify update General setting functionality', () => {
    
//   //     browser.pause(3000)
//   //   }); 

  // C157 - Verify invalid file format validation for Profile photo ( Need to write test case)
  // it('C157 - Verify invalid file format validation for Profile photo', () => {
  //       browser.pause(3000);
  //       let uploadpicvale = $('[class="box-shadow-b uploadBtn dz-multiple dz-clickable"]');
  //       uploadpicvale.click();
  //       // browser.debug();
  //        let paths = path.join(__dirname, '/ks.png');
  //        console.log("=========");
  //        console.log(paths);
  //        console.log("=========");
  //        browser.uploadFile(paths);
  //       // const remoteFilePath = browser.uploadFile(paths);
  //       // $('[class="box-shadow-b uploadBtn dz-multiple dz-clickable"]').setValue(remoteFilePath);
  //            browser.keys('Enter');
    //    browser.uploadFile(paths); 
       //  let b23 = $('#open').click();    
    //   let wait1 =('[class="box-shadow-b uploadBtn dz-multiple dz-clickable"]');
    //   wait1.waitForExist(4000);
    //   browser.chooseFile('[class="box-shadow-b uploadBtn dz-multiple dz-clickable"]', paths);

          //  const filePath = path.join(__dirname, '/list.csv');
      
          //  const remoteFilePath = browser.uploadFile(paths);
       // $('[class="box-shadow-b uploadBtn dz-multiple dz-clickable"]').sendKeys(remoteFilePath);
        //$('[class="box-shadow-b uploadBtn dz-multiple dz-clickable"]').sendKeys(filePath);
        // uploadpicvale.sendKeys(filePath);
        
        //let mypic = uploadpicvale.sendKeys(remoteFilePath);
    //      browser.pause(10000);
        
  //    });

  // C158 - Verify Change Profile Photo functionality ( Need to write test case)
//   it('C158 - Verify Change Profile Photo functionality', () => {
//       browser.pause(3000);

//     }); 
  
  it('C160 - Verify Nick Name field with more than 100 chars validation', () => {
    browser.pause(2000);
    $('#nickname').doubleClick();
      let Nicknames = $('#nickname');
      Nicknames.clearValue();
      Nicknames.setValue('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901')
    browser.keys('Tab');
    let header6 = $('[class="error-message text-danger"]').getText();
    assert.equal(header6, 'Nick name should be maximum 100 characters');
    browser.pause(2000);
    browser.refresh();
    browser.pause(5000);
 }); 

   // C161 is not working - Need to update Test Case OR might need to delete the test caes.

    it('User wants to change time format and verify it',()=>{
        $('#firstName').doubleClick();         
    let tmformat = $('/html[1]/body[1]/div[1]/app[1]/div[1]/div[1]/div[1]/div[2]/div[1]/my-account[1]/div[1]/div[2]/sm-general-settings[1]/section[1]/div[1]/div[1]/div[1]/form[1]/div[1]/sm-select-box[1]/sm-element[1]/div[1]/span[1]/span[1]/span[1]/span[1]');
    let tfvalue = tmformat.getText();
    $('/html[1]/body[1]/div[1]/app[1]/div[1]/div[1]/div[1]/div[2]/div[1]/my-account[1]/div[1]/div[2]/sm-general-settings[1]/section[1]/div[1]/div[1]/div[1]/form[1]/div[1]/sm-select-box[1]/sm-element[1]/div[1]/span[1]/span[1]/span[1]/span[1]').click();
    browser.pause(2000);
    if(tfvalue=='12 Hour'){
        browser.keys('ArrowDown');
        browser.keys('Enter');
                   
    }
    else{
        browser.keys('ArrowUp');
        browser.keys('Enter');
                   
    }       
    $('#btnUpdate').click();                      
    let msg = $('[class="noty_text"]').getText();
    assert.equal(msg, 'Profile updated successfully.');
    browser.refresh();
    browser.pause(6000);

    let updatedtfvalue = tmformat.getText();

    if(updatedtfvalue == '24 Hour')
    {
        assert.equal(updatedtfvalue, '24 Hour');
    }
    else if(updatedtfvalue == '12 Hour'){
        assert.equal(updatedtfvalue, '12 Hour');
    }

        browser.pause(5000);

    }); 
  }); 


 // File format not supported. Please select valid format (Accepted formats are: - JPG, JPE, JPEG, GIF, PNG, and BMP).

  // function Login(email, password)
    // {
    //  let mail1 = $('#email');
    //  mail1.clearValue();
    //  mail1.addValue(email)
    //     browser.pause(4000);
    //     let pwd = $('#password');
    //     pwd.clearValue();  
    //     pwd.addValue(password);
    //     browser.pause(4000);
    //    // let check = $('#normal-login > form > soul > label.i-checks > i').click();
    //     let b1 = $('#login_btn').click();       
    // }
    //browser.url('https://kalp.salesmate.io/login.html');
    // it ('should  allow to login with valid input', () => {
    //     Login('kalp.shah@rapidops.com', '123456');
    //     browser.pause(10000);
    //     let headerhome = $('h2=Dashboard').getText();
    //    // let headerhome = $('[class="page-title"]h2').getText();
    //     assert.equal(headerhome, 'Dashboard');
    //     browser.pause(4000);
    // });

       // $('#firstName').clear
    //    const fName = $('#firstName')
    //    .clearElement(fName)
    // .getValue('fName').then(function(value) {
    //     assert(value === ''); // true
    // });
       
         //fName.setValue('test123')
       //  fName.clearValue()
        // .elementIdClear('#firstName')
         //fName.clearElement();
        // fName.elementIdClear('#firstName')
         //.elementIdClear('#firstName')
        // fName.clearElement()
        //  browser.pause(2000);
        // browser.keys('Tab');
        // browser.pause(2000);
        //browser.sendKeys('Tab');
       // browser.keys(['\uE05B', 'Enter'])
    //     fName.clearValue()
    //     const value = fName.getValue()
    //     value = fName.getValue()
    //   assert(value === '')
    //     browser.pause(2000)
        //mail1.addValue(email)
        //    browser.pause(2000);
        //    let lName = $('#lastName');
        //    lName.clearValue();
        //    browser.pause(2000);
        //    let eMail = $('$email');
        //    eMail.clearValue();
        //    browser.pause(2000);
        // $('$email').click();
        // $('$email').clearValue();