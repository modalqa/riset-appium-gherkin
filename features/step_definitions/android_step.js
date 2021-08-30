var { driver } = require('../../capabilities/android.caps') 
var android = require('../android/page_objects/android_page')

const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const androidPO = new android();


Given('open app', async () => {
  let ebtnLogin = await driver.elementById(androidPO.btnLogin);
  await ebtnLogin.click().sleep(1000);
});

When('user login', async () => {
  let einputEmail = await driver.elementById(androidPO.inputEmail);
  await einputEmail.type("ayo@gmail.com");
 
});

Then('user success login', async () => {
  let ebtnNextLogin = await driver.elementById(androidPO.btnNextLogin);
  await ebtnNextLogin.click();
});
