import { browser, by, element } from 'protractor';

export class HomePage {
  buttonChange = element(by.name('BtnChangeName'));
  buttonSave = element(by.name('BtnSave'));
  buttonEndGame = element(by.name('BtnEndGame'));
  formNamefield = element(by.name('Name'));

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getBtnChangeNameText(): Promise<string> {
    return this.buttonChange.getText() as Promise<string>;
  }

  getDisplayedPlayerNameText(): Promise<string> {
    return element(by.css('h1')).getText() as Promise<string>;
  }
}
