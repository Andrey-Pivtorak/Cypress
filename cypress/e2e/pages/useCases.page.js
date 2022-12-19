import Base from "./base";

class UseCasesPage extends Base {

  baseUrl = 'https://telnyx.com/use-cases';

  elements = {
    callTrackingUseCaseTitle: () => cy.get('ul.epRMTm a[href="/use-cases/call-tracking"]'),
    conferenceCallingTitle: () => cy.get('ul.epRMTm a[href="/use-cases/conference-calling"]')
  }

  openUseCasesPage() {
    cy.viewport(1200, 900);
    cy.visit(`${this.baseUrl}`);
    cy.url().should('include', '/use-cases');
  }

  scrollCallTrackingUseCaseTitle() {
    this.scrollElement(this.elements.callTrackingUseCaseTitle());
  }

  clickCallTrackingUseCaseTitle() {
    this.clickElement(this.elements.callTrackingUseCaseTitle());
    cy.url().should('include', '/call-tracking');
  }

  scrollConferenceCallingTitle() {
    this.scrollElement(this.elements.conferenceCallingTitle());
  }

  clickConferenceCallingTitle() {
    this.clickElement(this.elements.conferenceCallingTitle());
    cy.url().should('include', '/conference-calling');
  }

}

module.exports = new UseCasesPage();
