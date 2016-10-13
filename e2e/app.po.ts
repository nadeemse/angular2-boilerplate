import { browser, element, by } from 'protractor/globals';

export class BarratPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('barrat-root h1')).getText();
  }
}
