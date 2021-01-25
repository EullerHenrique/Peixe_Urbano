import { PeixeUrbanoPage } from './app.po';

describe('peixe-urbano App', () => {
  let page: PeixeUrbanoPage;

  beforeEach(() => {
    page = new PeixeUrbanoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
