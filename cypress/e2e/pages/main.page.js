class MainPage {

  baseUrl = 'https://telnyx.com/';

  elements = {
    // testMenu: () => cy.get(':nth-child(8) > .sc-7b3980dc-6 ~ div'),
    // companyTab: () => cy.get('//ul[contains(@class,"jgxzDd")]//li[5]'),
    companyTab: () => cy.get(':nth-child(8) > .sc-7b3980dc-6'),
    aboutTelnyxLink: () => cy.get('//span[contains(text(),"About") and contains(@class,"dlshfZ")]'),
    cookiePopUp: () => cy.get('.jRrWoh'),
    switchFormTitle: () => cy.get('.sc-1e626587-2 > .mchNoDecorate > span'),
    tollFreeInput: () => cy.get('#toll-free-numbers'),
    programmableVoiceInput: () => cy.get('#no'),
    compareCostsColumnTitle: () => cy.get('div.spZHp')
  }

  openMainPage() {
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
    this.elements.switchFormTitle()
      .scrollIntoView({ easing: 'linear' })
      .should('be.visible');
  }

  clickTillFreeInput() {
    this.elements.tollFreeInput().click();
    this.elements.programmableVoiceInput().click();
    this.elements.compareCostsColumnTitle()
      .scrollIntoView({ easing: 'linear' })
      .should('be.visible');
  }

}

module.exports = new MainPage();
