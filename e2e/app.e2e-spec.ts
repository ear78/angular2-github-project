import { Angular2GithubProjectPage } from './app.po';

describe('angular2-github-project App', () => {
  let page: Angular2GithubProjectPage;

  beforeEach(() => {
    page = new Angular2GithubProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
