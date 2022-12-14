import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba 1',  () => {
     page.navigateTo();
     expect( page.getTesteo1()).toContain('');
  });

  it('Prueba 2', async () => {
   onPrepare:async() => {
     page.navigateTo();
     expect( await page.getTesteo2()).toContain('Podras generar Codigos QR para tu respectiva clase');
   }
  });

  it('Prueba 3', async () => {
   onPrepare:async() => {
     page.navigateTo();
     expect( await page.getQue_es_lo_que_hace_un_taxista_seduciendo_a_la_vida()).toContain('Bienvenido');
   }
  });


});