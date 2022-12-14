import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async getTesteo1() {
    return element(by.css('app-root .main-header')).getText();
  }

  async getTesteo2():Promise<string> {
    return element(by.css('app-root p')).getText();
  }

  async getQue_es_lo_que_hace_un_taxista_seduciendo_a_la_vida():Promise<string> {
    return element(by.css('app-root .btnenviar')).getText();
  }

}