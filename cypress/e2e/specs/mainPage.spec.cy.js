import mainPage from "../pages/main.page"

describe('Check displaying "about us" page', () => {
  it('open the mainPage', () => {
    cy.viewport(1200, 900)
    mainPage.openMainPage();
    mainPage.closeCookiePopUp();
    // mainPage.clickCompanyTab();
  })
})
