import { PlaygroundProjectPage } from './app.po';

describe('playground-project App', () => {
  let page: PlaygroundProjectPage;

  beforeEach(() => {
    page = new PlaygroundProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
