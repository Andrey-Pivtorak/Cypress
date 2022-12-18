import mainPage from "../pages/main.page";
import productsPage from "../pages/products.page";

describe('Check products', () => {
  beforeEach(() => {
    cy.viewport(1200, 900)
    mainPage.openMainPage();
    mainPage.closeCookiePopUp();
    mainPage.clickExploreButton();
  });

  it('should display product categories', () => {
    productsPage.scrollMessagingCategory();
    productsPage.scrollNumbersCategory();
  })

  it('should products be clickability', () => {
    productsPage.clickWebrtcProduct();
    cy.wait(2000).go('back');
    productsPage.clickStorageProduct();
    cy.wait(2000).go('back');
  })
})
