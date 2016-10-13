import { BarratPage } from './app.po';

describe('barrat App', function() {
  let page: BarratPage;

  beforeEach(() => {
    page = new BarratPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('barrat works!');
  });
});
