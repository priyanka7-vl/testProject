const L = require("list");
const assert = require('assert');
const webdriver = require('webdriverio');
let userLogin = require('../basic')

// before('Execute Before All Tests', ()=>{
//     browser.url('https://kalp.salesmate.io/login.html');
//    let winsize1 =browser.setWindowSize(1366, 768);
//    console.log(winsize1);
//   browser.pause(2000);
//     userLogin.Login('kalp.shah@rapidops.com', '123456');
//     browser.pause(10000);
//  //    let header = $('h2').getText();
//  //    assert.equal(header, 'Dashboard');
//  let header1 = $('h2=Dashboard').getText();
// // let header1 = $('#app > app > div > div > div > header > div > h2').getText();
//  assert.equal(header1, 'Dashboard');
// //    console.log('Execute Before All Tests');
// });

describe('Interface Preference Module', () => 
{
    before('Execute Before All Tests', () => {
        browser.url('/');
        browser.pause(5000);
        let winsize1 =browser.setWindowSize(1024, 768);
        
        console.log(winsize1);
        browser.pause(5000);
        console.log('Execute Before All Tests');
    });
    it('C4940- Verify Interface Preferences page is displayed under My Account',()=>{
        browser.url('https://kalp.salesmate.io/#/app/user/interfacePreferences');
        browser.pause(5000);
        let interfPrefTitle = $('[class="sub-title pull-left"]').getText();
        assert.equal(interfPrefTitle,'Interface Preferences');
        browser.pause(1000);
        console.log("Interface Preference Page Title Verified.");
    });

    it('C4941-Verify by default all options of Interface Preferences are disabled',()=>{
        browser.pause(3000);
        
        let contVal = $('#Contact').getValue();
        let comptVal = $('#Company').getValue();
        let dealVal = $('#Deal').getValue();
        let  myList = L.list(contVal, comptVal, dealVal);
       
        if (contVal && comptVal && dealVal === 'false')
        {
            for(let i=0;i<myList;i++)
            {
                assert.equal(myList.get(i),'false');
            }
        }
        else
        {
            let intPrefContact = $('#Contact').$('..');
            intPrefContact.click();
            browser.pause(2000);
            let intPrefCompany = $('#Company').$('..');
            intPrefCompany.click();
            browser.pause(2000);
            let intPrefDeal = $('#Deal').$('..');
            intPrefDeal.click();
            browser.pause(2000);
            $('#btnUpdate').click();      
            browser.pause(2000);
            for(let i=0;i<myList;i++)
            {
                assert.equal(myList.get(i),'false');
            }
        }
        //assert.equal([comptVal,contVal,dealVal],"false");
        console.log("All Contact ,Company & Deal module are disabled.");
        browser.pause(3000);
    });
    // it('C4942-Verify Interface Preferences setting is User wise',()=>{
    //     // require two users.
    //  });
     it('C4560-Verify user is able to enable all/some preferences at a time',()=>{
        let intPrefContact = $('#Contact').$('..');
         intPrefContact.click();
         browser.pause(2000);
         let intPrefCompany = $('#Company').$('..');
         intPrefCompany.click();
         browser.pause(2000);
         let intPrefDeal = $('#Deal').$('..');
         intPrefDeal.click();
         browser.pause(2000);
         $('#btnUpdate').click();      
         let msg = $('[class="noty_text"]').getText();
    assert.equal(msg, 'Setting successfully updated');
    //browser.refresh();
    browser.pause(2000);
    console.log("User enable all preferences successfully.")
     });

     it('C4561-Verify user is able to disable all/some preferences at a time',()=>{
        let intPrefContact = $('#Contact').$('..');
         intPrefContact.click();
         browser.pause(2000);
         let intPrefCompany = $('#Company').$('..');
         intPrefCompany.click();
         browser.pause(2000);
         let intPrefDeal = $('#Deal').$('..');
         intPrefDeal.click();
         browser.pause(2000);
         $('#btnUpdate').click();      
         let msg = $('[class="noty_text"]').getText();
    assert.equal(msg, 'Setting successfully updated');
    //browser.refresh();
    browser.pause(2000);
    console.log("User enable all preferences successfully.")
     });

     //C4562- Verify functionality after enable preference for contact/company ( Need to write test case)
     //C4563- Verify functionality after disable preference for deal/activity module ( Need to write test case)
     //C4564- Verify functionality if record is created through "Save & Create New" button ( Need to write test case)
     //C4565- Verify preference functionality when user doesn't have a rights of particular module ( Need to write test case)

     //============

     it('As a User I want to change Theme option to Light color',()=>{
     browser.url('https://kalp.salesmate.io/#/app/user/interfacePreferences');
     browser.pause(3000);
    //const sidebar = $('[class="side-nav grid-y grid-frame light-theme"]');
    //const sidebar = $('#app > app > div > div > sm-navigation > div');
    
    let value = $('[class="dark-circle-color"]').getText(); 
   // let value1 = $('[class="light-circle-color"]').getText(); 
   console.log('============');
   console.log(value); 
   console.log('============');
    if(value == 'Dark'){
        $('[class="select2-selection__arrow"]').click();
        browser.keys('ArrowUp');
           browser.keys('Enter');
           browser.pause(2000);
           $('#btnUpdate').click();
           browser.pause(2000);
        
        //let color = sidebar.getCSSProperty('color'); 
        
 //       let myvalue = $('[class="selection"]').getText();
       // (myvalue).should.be.equal('Dark');
  //      assert.equal(myvalue,'Light');
  
   // (color.parsed.hex).should.be.equal('#324061');
   // assert.equal(color.parsed.hex,'#3240611');
    // $('[class="selection"]').click();
    // $('[class="dark-circle-color"]').click();
    // $('#btnUpdate').click();
        browser.refresh();
        browser.pause(3000);
        const sidebar = $('[class="cell auto medium-cell-block"]');   
    let color = sidebar.getCSSProperty('color');   
        assert.equal(color.parsed.hex,'#324061');
        console.log('********');
        console.log(sidebar);
        console.log('********');

        console.log('$$$$$$$$$');
        console.log(color);
        console.log('$$$$$$$$');
        //(color.parsed.hex).should.be.equal('#3240611');
    }
//     else if(value == 'Light'){
//       $('[class="select2-selection__arrow"]').click();
//       browser.keys('ArrowUp');
//          browser.keys('Enter');
//          $('#btnUpdate').click();

//       const sidebar = $('[class="app-content-body "]');
//       let color = sidebar.getCSSProperty('color'); 
      
//       console.log('============');
//       console.log(sidebar); 
//       console.log('============');
//       console.log('============');
//       console.log(color);
//       console.log('============');     
//       let myvalue = $('[class="selection"]').getText();
//      // (myvalue).should.be.equal('Dark');
//       assert.equal(myvalue,'Light');
     
//    color = sidebar.getCSSProperty('color');   
//  // (color.parsed.hex).should.be.equal('#324061');
//   assert.equal(color.parsed.hex,'#3240611');
//   $('[class="selection"]').click();
//   $('[class="light-circle-color"]').click();
//   $('#btnUpdate').click();
//       browser.refresh();
//       browser.pause(5000);
//   //     assert.equal(color.parsed.hex,'#324061');

//   //       const sidebar1 = $('[class="app-content-body "]');
//   //       let color = sidebar1.getCSSProperty('color'); 
//   //       console.log(color)
//   //       $('[class="selection"]').click();
//   //       $('[class="light-circle-color"]').click();
//   //       $('#btnUpdate').click();
//   //       browser.refresh();
//   //       browser.pause(5000);
//   //       let value2 = $('[class="selection"]').getText();
//   //      // (value2).should.be.equal('Light');
//   //           assert.equal(value2,'Light');
//   //    let color1 = sidebar.getCSSProperty('color');    
//   //  // (color.parsed.hex).should.be.equal('#3240611');
//   //       assert.equal(color.parsed.hex,'#3240611');
//     }
});
   
it('As a User I want to change Theme option to Dark color',()=>{
      browser.url('https://kalp.salesmate.io/#/app/user/interfacePreferences');
      browser.pause(3000);
     //const sidebar = $('[class="side-nav grid-y grid-frame light-theme"]');
     //const sidebar = $('#app > app > div > div > sm-navigation > div');
     
     let value = $('[class="light-circle-color"]').getText(); 
    // let value1 = $('[class="light-circle-color"]').getText(); 
    console.log('============');
    console.log(value); 
    console.log('============');
         $('[class="select2-selection__arrow"]').click();
         browser.keys('ArrowDown');
            browser.keys('Enter');
            browser.pause(2000);
            $('#btnUpdate').click();
            browser.pause(2000);
         
         //let color = sidebar.getCSSProperty('color'); 
         
  //       let myvalue = $('[class="selection"]').getText();
        // (myvalue).should.be.equal('Dark');
   //      assert.equal(myvalue,'Light');
   
    // (color.parsed.hex).should.be.equal('#324061');
    // assert.equal(color.parsed.hex,'#3240611');
     // $('[class="selection"]').click();
     // $('[class="dark-circle-color"]').click();
     // $('#btnUpdate').click();
         browser.refresh();
         browser.pause(3000);
         const sidebar = $('[class="cell auto medium-cell-block"]');   
     let color = sidebar.getCSSProperty('color');   
         assert.equal(color.parsed.hex,'#324061');
         console.log('********');
         console.log(sidebar);
         console.log('********');
 
         console.log('$$$$$$$$$');
         console.log(color);
         console.log('$$$$$$$$');
         //(color.parsed.hex).should.be.equal('#3240611');   
});
     
});