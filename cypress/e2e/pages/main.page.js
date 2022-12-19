import Base from "./base";

class MainPage extends Base {

  baseUrl = 'https://telnyx.com/';

  elements = {
    companyTab: () => cy.get(':nth-child(8) > .sc-7b3980dc-6'),
    aboutTelnyxLink: () => cy.get('//span[contains(text(),"About") and contains(@class,"dlshfZ")]'),
    cookiePopUp: () => cy.get('.jRrWoh'),
    switchFormTitle: () => cy.get('.sc-1e626587-2 > .mchNoDecorate > span'),
    tollFreeInput: () => cy.get('#toll-free-numbers'),
    programmableVoiceInput: () => cy.get('#no'),
    compareCostsColumnTitle: () => cy.get('div.spZHp'),
    exploreButton: () => cy.get('.cNyeyR > .eKznVb > .hBNXWZ'),
    signUpButton: () => cy.get('.hhCIhu a[href="/sign-up"]'),
    loginButton: () => cy.get('.biNvWx :nth-child(4)')
  }

  openMainPage() {
    cy.viewport(1200, 900);
    cy.visit(`${this.baseUrl}`);
    cy.title().should('include', 'Telnyx | Communication APIs');
  }

  closeCookiePopUp() {
    this.elements.cookiePopUp().click();
  }

  // don't work
  clickCompanyTab() {
    // this.elements.companyTab().invoke('show').click();
    // cy.contains(`${this.elements.aboutTelnyxLink()}`).click();
    // this.elements.companyTab().click({ force: true });
    // this.elements.companyTab().contains('Company').next(`${this.elements.testMenu()}`).then($el => {
    //   cy.wrap($el).invoke('show');
    //   cy.wrap($el).contains('About Telnyx').click();
    // })
    // this.elements.companyTab().trigger('mousemove');
    // this.elements.aboutTelnyxLink().invoke('show').click();

    // this.elements.companyTab().trigger('mouseenter');
    // cy.contains('Company').click();

    // this.elements.aboutTelnyxLink().should('not.be.visible');
    // this.elements.companyTab().trigger('mouseover');
    // this.elements.aboutTelnyxLink().should('be.visible').wait(1000);
    // this.elements.companyTab().trigger('mouseout');
  }

  scrollToSwitchFormTitle() {
    this.scrollElement(this.elements.switchFormTitle());
  }

  clickTillFreeInput() {
    this.elements.tollFreeInput().click();
    this.elements.programmableVoiceInput().click();
    this.scrollElement(this.elements.compareCostsColumnTitle());
  }

  clickExploreButton() {
    this.clickElement(this.elements.exploreButton());
    cy.url().should('include', '/products');
  }

  clickSignUpButton() {
    this.clickElement(this.elements.signUpButton());
    cy.url().should('include', '/sign-up');
  }

  clickLoginButton() {
    this.clickElement(this.elements.loginButton());
    cy.url().should('include', '/login');
  }

}

module.exports = new MainPage();
