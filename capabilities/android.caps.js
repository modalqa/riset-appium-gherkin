const wd = require('wd');

const PORT = 4723;

const config = {
  platformName: 'Android',
  deviceName: 'emulator-5554',
  app: 'D:/all-riset/Appium-node-wd/apps/Aladin.apk',
  automationName: 'uiautomator2',
  autoGrantPermissions: 'true'
};
const driver = wd.promiseChainRemote('localhost', PORT);

module.exports = {
    driver, config
  };