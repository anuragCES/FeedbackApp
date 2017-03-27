import { FeedBackAppPage } from './app.po';

describe('feed-back-app App', () => {
  let page: FeedBackAppPage;

  beforeEach(() => {
    page = new FeedBackAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
