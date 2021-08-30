'use strict'
var { driver } = require('../../capabilities/android.caps') 


// var profile = process.env.NODE_ENV
// switch (profile) {
//   case 'PLATFORM=ios':
//     var { driver } = require('../../capabilities/ios.caps')
//     var { Api_Page } = require('../ios/page_objects/api-demo_screen')
//     break;
//     case 'PLATFORM=android':
      
//       break;
   
//   default:
//     console.log('Sorry, we are out of ' + profile + '.');
// }

const assert = require('assert');
const { Given, When, Then } = require('cucumber');
// const Api = new Api_Page();

Given('open app', async () => {
  return driver
    .elementById("id.aladinbank.mobile.stg:id/btn_login")
    .click()
    .sleep(1000)
});

When('user login', async () => {
  return driver
    .elementById("id.aladinbank.mobile.stg:id/et_input_text")
    .type("ayo@gmail.com")
});

Then('user success login', async () => {
  return driver
    .elementById("id.aladinbank.mobile.stg:id/btn_login_email_next")
    .click()
});


