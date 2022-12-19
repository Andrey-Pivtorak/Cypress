import mainPage from "../pages/main.page";

describe('Check displaying "about us" page', () => {
  it('open the mainPage', () => {
    mainPage.openMainPage();
    mainPage.closeCookiePopUp();
    // mainPage.clickCompanyTab();
  })
})
