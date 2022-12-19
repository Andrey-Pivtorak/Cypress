import mainPage from "../pages/main.page";
import productsPage from "../pages/products.page";

describe('Check products', () => {
  beforeEach(() => {
    mainPage.openMainPage();
    mainPage.closeCookiePopUp();
    mainPage.clickExploreButton();
  });

  it('should display product categories', () => {
    productsPage.scrollMessagingCategory();
    productsPage.scrollNumbersCategory();
  })

  it('should open products', () => {
    productsPage.clickWebrtcProduct();
    cy.wait(2000).go('back');
    productsPage.clickStorageProduct();
    cy.wait(2000).go('back');
  })
})
