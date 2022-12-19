import mainPage from "../pages/main.page";

describe('Check the "Switch + Save" form work', () => {
  it('should Telnyx sum/mo differs from 2578', () => {
    // cy.viewport(1200, 900);
    mainPage.openMainPage();
    mainPage.closeCookiePopUp();
    mainPage.scrollToSwitchFormTitle();
    mainPage.clickTillFreeInput();
  })
})
