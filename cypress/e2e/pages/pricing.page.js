import Base from "./base";

class PricingPage extends Base {

  baseUrl = 'https://telnyx.com/pricing';
  pricingMessagingUrl = '/messaging';

  elements = {
    smsApiProductTitle: () => cy.get('.fzYIYy li:nth-child(3) h2'),
    seePricingLink: () => cy.xpath('//a[contains(@href,"/pricing/messaging") and contains(@class,"dVfoAV ")]'),
    selectButton: () => cy.xpath('//button//span[contains(text(),"States")]'),
    ukraineLink: () => cy.get('a[href="/pricing/messaging/ua"]'),
    messagingPricingTitle: () => cy.xpath('//h2[contains(text(),"In-Depth")]')
  }

  openPricingPage() {
    cy.visit(`${this.baseUrl}`);
    cy.url().should('include', '/pricing');
  }

  scrollSmsApiProductTitle() {
    this.scrollElement(this.elements.smsApiProductTitle());
  }

  clickSeePricingLink() {
    this.clickElement(this.elements.seePricingLink());
    cy.url().should('include', '/messaging');
  }

  clickSelectButton() {
    this.clickElement(this.elements.selectButton());
  }

  clickUkraineLink() {
    this.clickElement(this.elements.ukraineLink());
  }

  scrollMessagingPricingTitle() {
    this.scrollElement(this.elements.messagingPricingTitle());
  }

}

module.exports = new PricingPage();
