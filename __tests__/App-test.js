import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000; // timeout for each test
const PORT = 4723; // port on appium server
const config = {
  platformName: 'Android', // testing platform name
  deviceName: 'Android Emulator - Pixel_5_API_31:5554', // device name
  app: '/Users/lakinduhewawasam/Desktop/AppiumAutomation/android/app/build/outputs/apk/debug/app-debug.apk',
};

const driver = wd.promiseChainRemote('localhost', PORT); // connect to appium server

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(3000); // let app to load
});

test('testShouldGreetUserSuccessfully', async () => {
  const TEXT_INPUT_ACCESSIBILITY_ID = 'name-input';
  const GREETING_BUTTON_ACCESSIBILITY_ID = 'greet-button';
  // get text input element by test id
  const textInput = await driver.elementByAccessibilityId(
    TEXT_INPUT_ACCESSIBILITY_ID,
  );
  // type text to text input
  await textInput.type('Lakindu');
  // get greeting button element by test id
  const greetingButton = await driver.elementByAccessibilityId(
    GREETING_BUTTON_ACCESSIBILITY_ID,
  );
  // click greeting button
  await greetingButton.click();
});
