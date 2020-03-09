const assert = require('assert');
const webdriver = require('webdriverio');
let toggle = require('../basic')

describe('Notification Preference Module', () => 
{

  before('Execute Before All Tests', () => {
    browser.url('/');
    browser.pause(5000);
    let winsize1 =browser.setWindowSize(1024, 768);
    
    console.log(winsize1);
    browser.pause(5000);
    console.log('Execute Before All Tests');
});
    it ('User wants to reach notification Preference Page', () => {
    browser.pause(2000);
    $('[class="thumb-sm avatar avatar-8"]').click();
    $('[class="icon-user m-r-sm"]').click();
    $('#app > app > div > div > div > div.app-content.cell.auto.medium-cell-block > div > my-account > div > div.w-xl.bg-white-only.left-bar.cell.medium-cell-block-y > sm-user-profile-sidebar > ul > li:nth-child(6)').click();
    browser.pause(2000);
    });
    
    it ('C3563 - Verify General Notifications are displayed on My Account>Notification Preferences page', () => {
    let header = $('[class="sub-title pull-left"]').getText();
    assert.equal(header, 'Notification Preferences');
    browser.pause(2000);
    console.log('Verify Notification preferences Title');
    });

    it ('C3564 - Verify General Notifications are displayed on My Account>Notification Preferences page', () => {
        let header = $('[class="sub-title pull-left"]').getText();
        assert.equal(header, 'Notification Preferences');
        browser.pause(2000);
        console.log('Verify Notification preferences Title');
    });

    it('C3572 - Verify User is able to disable all/some channels of \'Contact Assigned\' notification at a time',()=>{
              browser.pause(5000);
              toggle.toggleOFF('#assignContactEmail');
              toggle.toggleOFF('#assignContactMobile');
              toggle.toggleOFF('#assignContactApp');
            
              // let contemail = $('#assignContactEmail').$('..');
              // let contemailValue = $('#assignContactEmail').getValue();
              // contemail.click();
              // browser.pause(1000);
              // let contmobile = $('#assignContactMobile').$('..');
              // let contmobileValue = $('#assignContactMobile').getValue();
              // contmobile.click();
              // browser.pause(1000);
              // let contapp = $('#assignContactApp').$('..');
              // let contappValue = $('#assignContactApp').getValue();
              // contapp.click();
              // browser.pause(2000);
              // let b6 = $('#btnUpdate').click();    
              // browser.pause(3000);
              // assert.equal(contmobileValue,'true');
              // assert.equal(contemailValue,'true');
              // assert.equal(contappValue,'true');
      
    });

    it('C3573 - Verify User is able to enable all/some channels of \'Contact Assigned\' notification at a time',()=>{

      browser.pause(5000);
      toggle.toggleON('#assignContactEmail');
      toggle.toggleON('#assignContactMobile');
      toggle.toggleON('#assignContactApp');
      //  let contemail = $('#assignContactEmail').$('..');
      //  let contemailValue = $('#assignContactEmail').getValue();
      //  contemail.click();
      //  browser.pause(1000);
      //  let contmobile = $('#assignContactMobile').$('..');
      //  let contmobileValue = $('#assignContactMobile').getValue();
      //  contmobile.click();
      //  browser.pause(1000);
      //  let contapp = $('#assignContactApp').$('..');
      //  let contappValue = $('#assignContactApp').getValue();
      //  contapp.click();
      //  browser.pause(2000);
      //  let b7 = $('#btnUpdate').click();    
      //  browser.pause(3000);
      //  assert.equal(contmobileValue,'false');
      //  assert.equal(contemailValue,'false');
      //  assert.equal(contappValue,'false');

    });

    it('C3574 - Verify User is able to disable all/some channels of \'Company Assigned\' notification at a time',()=>{

       browser.pause(5000);
       toggle.toggleOFF('#assignCompanyEmail');
       toggle.toggleOFF('#assignCompanyMobile');
       toggle.toggleOFF('#assignCompanyApp');
      //  let compemail = $('#assignCompanyEmail').$('..');
      //  let compmailValue = $('#assignCompanyEmail').getValue();
      //  compemail.click();
      //  browser.pause(1000);
      //  let compmobile = $('#assignCompanyMobile').$('..');
      //  let compmobileValue = $('#assignCompanyMobile').getValue();
      //  compmobile.click();
      //  browser.pause(1000);
      //  let compapp = $('#assignCompanyApp').$('..');
      //  let compappValue = $('#assignCompanyApp').getValue();
      //  compapp.click();
      //  browser.pause(2000);
      //  let b8 = $('#btnUpdate').click();    
      //  browser.pause(3000);
      //  assert.equal(compmailValue,'true');
      //  assert.equal(compmobileValue,'true');
      //  assert.equal(compappValue,'true');

    });

  //   it('C3575 - Verify User is able to enable all/some channels of \'Company Assigned\' notification at a time',()=>{
  //     browser.pause(5000);
  //     toggle.toggleON('#assignCompanyEmail');
  //     toggle.toggleON('#assignCompanyMobile');
  //     toggle.toggleON('#assignCompanyApp');
  //     // let compemail = $('#assignCompanyEmail').$('..');
  //     // let compmailValue = $('#assignCompanyEmail').getValue();
  //     // compemail.click();
  //     // browser.pause(1000);
  //     // let compmobile = $('#assignCompanyMobile').$('..');
  //     // let compmobileValue = $('#assignCompanyMobile').getValue();
  //     // compmobile.click();
  //     // browser.pause(1000);
  //     // let compapp = $('#assignCompanyApp').$('..');
  //     // let compappValue = $('#assignCompanyApp').getValue();
  //     // compapp.click();
  //     // browser.pause(2000);
  //     // let b9 = $('#btnUpdate').click();    
  //     // browser.pause(3000);
  //     // assert.equal(compmailValue,'false');
  //     // assert.equal(compmobileValue,'false');
  //     // assert.equal(compappValue,'false');
  //   });

  //   it('C3576 - Verify User is able to disable all/some channels of \'Activity Assigned\' notification at a time',()=>{

  //     browser.pause(5000);
  //     toggle.toggleOFF('#assignActivityEmail');
  //     toggle.toggleOFF('#assignActivityMobile');
  //     toggle.toggleOFF('#assignActivityApp');
  //     // let activityemail = $('#assignActivityEmail').$('..');
  //     // let activityemailValue = $('#assignActivityEmail').getValue();
  //     // activityemail.click();
  //     // browser.pause(1000);
  //     // let activitymobile = $('#assignActivityMobile').$('..');
  //     // let activitymobileValue = $('#assignActivityMobile').getValue();
  //     // activitymobile.click();
  //     // browser.pause(1000);
  //     // let activitypapp = $('#assignActivityApp').$('..');
  //     // let activityappValue = $('#assignActivityApp').getValue();
  //     // activitypapp.click();
  //     // browser.pause(2000);
  //     // let b10 = $('#btnUpdate').click();    
  //     // browser.pause(3000);
  //     // assert.equal(activityemailValue,'true');
  //     // assert.equal(activitymobileValue,'true');
  //     // assert.equal(activityappValue,'true');

  //   });

  //   it('C3577 - Verify User is able to enable all/some channels of \'Activity Assigned\' notification at a time',()=>{
   
  //  browser.pause(5000);
  //  toggle.toggleON('#assignActivityEmail');
  //     toggle.toggleON('#assignActivityMobile');
  //     toggle.toggleON('#assignActivityApp');
  //     // let activityemail = $('#assignActivityEmail').$('..');
  //     // let activityemailValue = $('#assignActivityEmail').getValue();
  //     // activityemail.click();
  //     // browser.pause(1000);
  //     // let activitymobile = $('#assignActivityMobile').$('..');
  //     // let activitymobileValue = $('#assignActivityMobile').getValue();
  //     // activitymobile.click();
  //     // browser.pause(1000);
  //     // let activitypapp = $('#assignActivityApp').$('..');
  //     // let activityappValue = $('#assignActivityApp').getValue();
  //     // activitypapp.click();
  //     // browser.pause(2000);
  //     // let b11 = $('#btnUpdate').click();    
  //     // browser.pause(3000);
  //     // assert.equal(activityemailValue,'false');
  //     // assert.equal(activitymobileValue,'false');
  //     // assert.equal(activityappValue,'false');
      
  //   });

  //   it('C3578 - Verify User is able to disable all/some channels of \'Deal Assigned\' notification at a time',()=>{

  //  browser.pause(5000);
  //  toggle.toggleOFF('#assignDealEmail');
  //  toggle.toggleOFF('#assignDealMobile');
  //  toggle.toggleOFF('#assignDealApp');
  // //  let dealemail = $('#assignDealEmail').$('..');
  // //  let dealemailValue = $('#assignDealEmail').getValue();
  // //  dealemail.click();
  // //  browser.pause(1000);
  // //  let dealmobile = $('#assignDealMobile').$('..');
  // //  let dealmobileValue = $('#assignDealMobile').getValue();
  // //  dealmobile.click();
  // //  browser.pause(1000);
  // //  let dealpapp = $('#assignDealApp').$('..');
  // //  let dealappValue = $('#assignDealApp').getValue();
  // //  dealpapp.click();
  // //  browser.pause(2000);
  // //  let b12 = $('#btnUpdate').click();    
  // //  browser.pause(3000);
  // //  assert.equal(dealemailValue,'true');
  // //  assert.equal(dealmobileValue,'true');
  // //  assert.equal(dealappValue,'true');

  //   });

  //   it('C3579 - Verify User is able to enable all/some channels of \'Deal Assigned\' notification at a time',()=>{

  //  browser.pause(5000);
  //  toggle.toggleON('#assignDealEmail');
  //  toggle.toggleON('#assignDealMobile');
  //  toggle.toggleON('#assignDealApp');
  // //  let dealemail = $('#assignDealEmail').$('..');
  // //  let dealemailValue = $('#assignDealEmail').getValue();
  // //  dealemail.click();
  // //  browser.pause(1000);
  // //  let dealmobile = $('#assignDealMobile').$('..');
  // //  let dealmobileValue = $('#assignDealMobile').getValue();
  // //  dealmobile.click();
  // //  browser.pause(1000);
  // //  let dealpapp = $('#assignDealApp').$('..');
  // //  let dealappValue = $('#assignDealApp').getValue();
  // //  dealpapp.click();
  // //  browser.pause(2000);
  // //  let b13 = $('#btnUpdate').click();    
  // //  browser.pause(3000);
  // //  assert.equal(dealemailValue,'false');
  // //  assert.equal(dealmobileValue,'false');
  // //  assert.equal(dealappValue,'false');
   
  //   });

  //   it('C3580 - Verify User is able to disable all/some channels of \'Note Added\' notification at a time',()=>{

  //  browser.pause(5000);
  //  toggle.toggleOFF('#addNoteEmail');
  //  toggle.toggleOFF('#addNoteMobile');
  //  toggle.toggleOFF('#addNoteApp');
  // //  let addnotesemail = $('#addNoteEmail').$('..');
  // //  let addnotesemailValue = $('#addNoteEmail').getValue();
  // //  addnotesemail.click();
  // //  browser.pause(1000);
  // //  let addnotesmobile = $('#addNoteMobile').$('..');
  // //  let addnotesmobileValue = $('#addNoteMobile').getValue();
  // //  addnotesmobile.click();
  // //  browser.pause(1000);
  // //  let addnotespapp = $('#addNoteApp').$('..');
  // //  let addnotesappValue = $('#addNoteApp').getValue();
  // //  addnotespapp.click();
  // //  browser.pause(2000);
  // //  let b14 = $('#btnUpdate').click();    
  // //  browser.pause(3000);
  // //  assert.equal(addnotesemailValue,'true');
  // //  assert.equal(addnotesmobileValue,'true');
  // //  assert.equal(addnotesappValue,'true');

  //   });

  //   it('C3581 - Verify User is able to enable all/some channels of \'Note Added\' notification at a time',()=>{


  //     browser.pause(5000);
  //     toggle.toggleON('#addNoteEmail');
  //     toggle.toggleON('#addNoteMobile');
  //     toggle.toggleON('#addNoteApp');
  //     // let addnotesemail = $('#addNoteEmail').$('..');
  //     // let addnotesemailValue = $('#addNoteEmail').getValue();
  //     // addnotesemail.click();
  //     // browser.pause(1000);
  //     // let addnotesmobile = $('#addNoteMobile').$('..');
  //     // let addnotesmobileValue = $('#addNoteMobile').getValue();
  //     // addnotesmobile.click();
  //     // browser.pause(1000);
  //     // let addnotespapp = $('#addNoteApp').$('..');
  //     // let addnotesappValue = $('#addNoteApp').getValue();
  //     // addnotespapp.click();
  //     // browser.pause(2000);
  //     // let b14 = $('#btnUpdate').click();    
  //     // browser.pause(3000);
  //     // assert.equal(addnotesemailValue,'false');
  //     // assert.equal(addnotesmobileValue,'false');
  //     // assert.equal(addnotesappValue,'false');
   
  //   });

  //   it('C3582 - Verify User is able to disable all/some channels of \'Email Conversations\' notification at a time',()=>{

  //  browser.pause(5000);
  //  toggle.toggleOFF('#emailConversationsEmail');
  //  toggle.toggleOFF('#emailConversationsMobile');
  //  toggle.toggleOFF('#emailConversationsApp');
  // //  let emailConversemail = $('#emailConversationsEmail').$('..');
  // //  let emailConversemailValue = $('#emailConversationsEmail').getValue();
  // //  emailConversemail.click();
  // //  browser.pause(1000);
  // //  let emailConversmobile = $('#emailConversationsMobile').$('..');
  // //  let emailConversmobileValue = $('#emailConversationsMobile').getValue();
  // //  emailConversmobile.click();
  // //  browser.pause(1000);
  // //  let emailConversapp = $('#emailConversationsApp').$('..');
  // //  let emailConversappValue = $('#emailConversationsApp').getValue();
  // //  emailConversapp.click();
  // //  browser.pause(2000);
  // //  let b16 = $('#btnUpdate').click();    
  // //  browser.pause(3000);
  // //  assert.equal(emailConversemailValue,'true');
  // //  assert.equal(emailConversmobileValue,'true');
  // //  assert.equal(emailConversappValue,'true');

  //   });

  //   it('C3583 - Verify User is able to enable all/some channels of \'Email Conversations\' notification at a time',()=>{

  //  browser.pause(5000);
  //  toggle.toggleON('#emailConversationsEmail');
  //  toggle.toggleON('#emailConversationsMobile');
  //  toggle.toggleON('#emailConversationsApp');
  // //  let emailConversemail = $('#emailConversationsEmail').$('..');
  // //  let emailConversemailValue = $('#emailConversationsEmail').getValue();
  // //  emailConversemail.click();
  // //  browser.pause(1000);
  // //  let emailConversmobile = $('#emailConversationsMobile').$('..');
  // //  let emailConversmobileValue = $('#emailConversationsMobile').getValue();
  // //  emailConversmobile.click();
  // //  browser.pause(1000);
  // //  let emailConversapp = $('#emailConversationsApp').$('..');
  // //  let emailConversappValue = $('#emailConversationsApp').getValue();
  // //  emailConversapp.click();
  // //  browser.pause(2000);
  // //  let b17 = $('#btnUpdate').click();    
  // //  browser.pause(3000);
  // //  assert.equal(emailConversemailValue,'false');
  // //  assert.equal(emailConversmobileValue,'false');
  // //  assert.equal(emailConversappValue,'false');

  //   });

  //   it('C3584 - Verify User is able to disable all/some channels of \'Email Received\' notification at a time',()=>{

  //  browser.pause(5000);
  //  toggle.toggleOFF('#receiveEmailMobile');
  //  toggle.toggleOFF('#receiveEmailApp');
  
  // //  let receiveEmailsmobile = $('#receiveEmailMobile').$('..');
  // //  let receiveEmailsmobileValue = $('#receiveEmailMobile').getValue();
  // //  receiveEmailsmobile.click();
  // //  browser.pause(1000);
  // //  let receiveEmailsapp = $('#receiveEmailApp').$('..');
  // //  let receiveEmailsappValue = $('#receiveEmailApp').getValue();
  // //  receiveEmailsapp.click();
  // //  browser.pause(2000);
  // //  let b18 = $('#btnUpdate').click();    
  // //  browser.pause(3000);
  // //  assert.equal(receiveEmailsmobileValue,'true');
  // //  assert.equal(receiveEmailsappValue,'true');
   
  //   });

  //   it('C3585 - Verify User is able to enable all/some channels of \'Email Received\' notification at a time',()=>{

  //  browser.pause(5000);
  //  toggle.toggleON('#receiveEmailMobile');
  //  toggle.toggleON('#receiveEmailApp');
   
  // //  let receiveEmailsmobile = $('#receiveEmailMobile').$('..');
  // //  let receiveEmailsmobileValue = $('#receiveEmailMobile').getValue();
  // //  receiveEmailsmobile.click();
  // //  browser.pause(1000);
  // //  let receiveEmailsapp = $('#receiveEmailApp').$('..');
  // //  let receiveEmailsappValue = $('#receiveEmailApp').getValue();
  // //  receiveEmailsapp.click();
  // //  browser.pause(2000);
  // //  let b18 = $('#btnUpdate').click();    
  // //  browser.pause(3000);
  // //  assert.equal(receiveEmailsmobileValue,'false');
  // //  assert.equal(receiveEmailsappValue,'false');
   
  //   });

  //   it('C3586 - Verify User is able to disable all/some channels of \'Email Opened\/Link Clicked\' notification at a time',()=>{

  //  browser.pause(5000);
  //  toggle.toggleOFF('#trackEmailMobile');
  //  toggle.toggleOFF('#trackEmailApp');
   
  // //  let trackEmailsmobile = $('#trackEmailMobile').$('..');
  // //  let trackEmailsmobileValue = $('#trackEmailMobile').getValue();
  // //  trackEmailsmobile.click();
  // //  browser.pause(1000);
  // //  let trackEmailsapp = $('#trackEmailApp').$('..');
  // //  let trackEmailsappValue = $('#trackEmailApp').getValue();
  // //  trackEmailsapp.click();
  // //  browser.pause(2000);
  // //  let b19 = $('#btnUpdate').click();    
  // //  browser.pause(3000);
  // //  assert.equal(trackEmailsmobileValue,'true');
  // //  assert.equal(trackEmailsappValue,'true');
   
  //   });

  //   it('C3587 - Verify User is able to enable all/some channels of \'Email Opened\/Link Clicked\' notification at a time',()=>{

  //  browser.pause(5000);
  //  toggle.toggleON('#trackEmailMobile');
  //  toggle.toggleON('#trackEmailApp');
  // //  let trackEmailsmobile = $('#trackEmailMobile').$('..');
  // //  let trackEmailsmobileValue = $('#trackEmailMobile').getValue();
  // //  trackEmailsmobile.click();
  // //  browser.pause(1000);
  // //  let trackEmailsapp = $('#trackEmailApp').$('..');
  // //  let trackEmailsappValue = $('#trackEmailApp').getValue();
  // //  trackEmailsapp.click();
  // //  browser.pause(2000);
  // //  let b19 = $('#btnUpdate').click();    
  // //  browser.pause(3000);
  // //  assert.equal(trackEmailsmobileValue,'false');
  // //  assert.equal(trackEmailsappValue,'false');
   
  //   });
  
   
    
    it('User want to scroll down and up the page',()=>{
      browser.url('https://kalp.salesmate.io/#/app/user/notificationPreferences');
          //      browser.pause(2000);
          //     browser.execute(function(){
          //         document.querySelector('[class="wrapper-lg"]').scrollIntoView();
         //         //.scroll('[class="wrapper-lg"]', 100, 100)
            $('[class="wrapper-lg"]').click();
            //browser.keys(['Tab', 'Space']);
            //browser.saveScreenshot('./test/1.png');
            browser.pause(5000);
            $('[class="wrapper-lg"]').scrollIntoView();
            browser.pause(5000); 
            //browser.saveScreenshot('./test/2.png');
     });
});
   //   it('User wants to disable daily digest',()=>{
      
   //    let dailydgst = $('#dailyDigest').$('..');
   //    dailydgst.click();
   //       browser.pause(1000);
   //    let digesttimenotdisply = $('[class="col-md-12"]').getText();
   //       assert.notEqual(digesttimenotdisply,'Please select Daily Digest delivery time.');  
   //  });

   //  it('User wants to enable daily digest',()=>{
      
   //    let dailydgst1 = $('#dailyDigest').$('..');
   //    dailydgst1.click();
   //       browser.pause(3000);
   //    let digesttimedisply = $('[class="col-md-12"]').getText();
   //       assert.equal(digesttimedisply,'Please select Daily Digest delivery time.');  
   //  });


    // browser.scroll('[class="wrapper-lg"]', 100, 100)


    //});


// //});

//      //let emails = $('#assignContactEmail')
//         //$("#assignContactEmail").parent().click()
//         //let parentDiv = this.parentNode;
//         //let id = parentDiv.getAttribute("#assignContactEmail");
//         //id.click();
   

//  // for (const i=0;i<emails;i++)
//         // {
//         //     let evalue = emails.get(i).getAttribute("value");
//         //     if (evalue == "false")
//         //     {
//         //         list.get(i).click();
//         //     }
//         //     else{

//         //     }
//         // }
//         // for (const i=0;i<2;i++)
//         // {
//         //     myemail.click();
//             //console.log(myemail.isSelected());
// //        }
       
//         //let b4 = $('//*[@id="app"]/app/div/div/div/div[2]/div/my-account/div/div[2]/sm-notification-preferences/section/div/div/div/div/form/table/tbody/tr[1]/td[2]/sm-switch/sm-element/div[2]/label/i').click();
// //        let b5 = $('//*[@id="assignContactMobile"]').click();
// // let assingContEmail = $('//*[@id="app"]/app/div/div/div/div[2]/div/my-account/div/div[2]/sm-notification-preferences/section/div/div/div/div/form/table/tbody/tr[1]/td[2]/sm-switch/sm-element/div[2]/label/i');
// // #assignContactEmail 
// // [value="#assignContactEmail"]
// // console.log('===========');
// //console.log(assingContEmail.isSelected()); 
// // if (assingContEmail.value == true)
// // {
// //     console.log('&&&&&&&&&&&');
// //     console.log(assingContEmail.value == true)
// //     console.log('&&&&&&&&&&&');
// //     let g1 = $('//*[@id="assignContactEmail"]');
// //     g1.click();
// // }
// // else
// // {
// //     assingContEmail.click()
// // }

// // console.log('===========');