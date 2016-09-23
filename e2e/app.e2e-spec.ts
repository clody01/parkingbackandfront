import { FrontparkingNg2Page } from './app.po';

describe('frontparking-ng2 App', function() {
  let page: FrontparkingNg2Page;

  beforeEach(() => {
    page = new FrontparkingNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
