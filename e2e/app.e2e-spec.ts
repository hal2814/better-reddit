import { BetterRedditPage } from './app.po';

describe('better-reddit App', () => {
  let page: BetterRedditPage;

  beforeEach(() => {
    page = new BetterRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
