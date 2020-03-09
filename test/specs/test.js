// const assert = require('assert');
// const webdriver = require('webdriverio');

// const isDone = new Promise()
// //...

// const checkIfDone = () => {
//   isDone
//     .then(ok => {
//       console.log(ok)
//     })
//     .catch(err => {
//       console.error(error)
//     })
// }
async function firstAsync() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    console.log(result); 
    };
firstAsync();
// ==========
// async function firstAsync() {
//     return 27;
//   }
  
//   firstAsync()
//   .then(console.log(firstAsync())); // 27
// // ==========
// var p = new Promise((resolve, reject) => 
// { 
//     setTimeout(() => {
//         resolve();
//     }, 5000);
// });

// p.then(() => {
//     console.log("Got it");
// })
// describe('Login Module', () => 
// {
//   browser.url('https://kalp.salesmate.io/login.html');
//   let winsize1 =browser.setWindowSize(1024, 768);
//   console.log(winsize1);
//   browser.pause(5000);
  
//   it.only ('should  allow to login with valid input and verify home screen banner', () => {
//     userLogin.Login('kalp.shah@rapidops.com', '123456');
//     browser.pause(14000);
//  //    let header = $('h2').getText();
//  //    assert.equal(header, 'Dashboard');
//  let header1 = $('h2=Dashboard').getText();
// // let header1 = $('#app > app > div > div > div > header > div > h2').getText();
//  assert.equal(header1, 'Dashboard');
// });