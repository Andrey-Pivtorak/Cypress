import pricingPage from '../pages/pricing.page';
import mainPage from "../pages/main.page";

describe('Checking products price', () => {
  it('should show the product price', () => {
    pricingPage.openPricingPage();
    mainPage.closeCookiePopUp();
    pricingPage.scrollSmsApiProductTitle();
    pricingPage.clickSeePricingLink();
    pricingPage.clickSelectButton();
    pricingPage.clickUkraineLink();
    pricingPage.scrollMessagingPricingTitle();
  })
})
