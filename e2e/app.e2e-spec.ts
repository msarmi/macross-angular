import { MacrossAngularPage } from './app.po';

describe('macross-angular App', () => {
  let page: MacrossAngularPage;

  beforeEach(() => {
    page = new MacrossAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
