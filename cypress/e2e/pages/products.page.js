import Base from "./base";

class ProductsPage extends Base {

  baseUrl = 'https://telnyx.com/products';

  elements = {
    messagingCategory: () => cy.get('.hHhvep :nth-child(3) > .czgqGc'),
    numbersCategory: () => cy.get('.hHhvep :nth-child(7) > .czgqGc'),
    webrtcProduct: () => cy.get('.cAMRli :nth-child(7) .kfkKpY'),
    storageProduct: () => cy.xpath('//a[@href="/products/cloud-vpn"]/../following-sibling::li')
  }

  scrollMessagingCategory() {
    this.scrollElement(this.elements.messagingCategory());
  }

  scrollNumbersCategory() {
    this.scrollElement(this.elements.numbersCategory());
  }

  clickWebrtcProduct() {
    this.clickElement(this.elements.webrtcProduct());
  }

  clickStorageProduct() {
    this.clickElement(this.elements.storageProduct());
  }

}

module.exports = new ProductsPage();
