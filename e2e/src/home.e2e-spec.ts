import { HomePage } from './home.po';
import { browser, logging, element, by } from 'protractor';

describe('Homepage tests', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('can set player name, start playing, come back and change name', () => {
    page.navigateTo();
    // change name
    page.formNamefield.clear().then(() => { page.formNamefield.sendKeys('TestUser'); });
    page.buttonSave.click();
    // navigated to newGame, then come back
    browser.waitForAngular();
    page.buttonEndGame.click();
    browser.waitForAngular();
    // check
    expect(page.getDisplayedPlayerNameText()).toEqual('TestUser');
    // change name
    page.buttonChange.click();
    page.formNamefield.clear().then(() => { page.formNamefield.sendKeys('TestUser_2'); });
    page.buttonSave.click();
    // check
    expect(page.getDisplayedPlayerNameText()).toEqual('TestUser_2');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
