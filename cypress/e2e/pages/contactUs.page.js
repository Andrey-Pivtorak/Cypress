import Base from "./base";

class ContactUsPage extends Base {

  baseUrl = 'https://telnyx.com/contact-us';

  elements = {
    reasonSelect: () => cy.get('#Reason_for_Contact__c'),
    firstNameInput: () => cy.get('#FirstName'),
    lastNameInput: () => cy.get('#LastName'),
    emailInput: () => cy.get('#Email'),
    phoneSelect: () => cy.get('#Phone_Number_Extension__c'),
    phoneInput: () => cy.get('#Phone_Number_Base__c'),
    webSiteInput: () => cy.get('#Website'),
    addInfoInput: () => cy.get('#Form_Additional_Information__c'),
    receiveEmailsCheckBox: () => cy.get('#mktoCheckbox_12147_0'),
    submitButton: () => cy.get('.mktoButtonRow')
  }

  inputValues = {
    firstName: 'Ivan',
    lastName: 'Fedorov',
    email: 'testerlqcompany@gmail.com',
    phoneCode: '+1242',
    phoneNumber: '3483798587',
    webSite: 'https://testcompany.com',
    addInfo: 'This is a test case by Andrii Pivtorak @2022!'
  }

  enterReasonValue() {
    this.elements.reasonSelect().select('Support');
  }

  enterFirstName() {
    this.enterInput(this.elements.firstNameInput(), this.inputValues.firstName);
  }
  enterLastName() {
    this.enterInput(this.elements.lastNameInput(), this.inputValues.lastName);
  }

  enterEmail() {
    this.enterInput(this.elements.emailInput(), this.inputValues.email);
  }

  selectPhoneCode() {
    this.elements.phoneSelect().select(`${this.inputValues.phoneCode}`);
  }

  enterPhoneNumber() {
    this.enterInput(this.elements.phoneInput(), this.inputValues.phoneNumber);
  }

  enterWebSite() {
    this.enterInput(this.elements.webSiteInput(), this.inputValues.webSite);
  }

  enterAddInfo() {
    this.enterInput(this.elements.addInfoInput(), this.inputValues.addInfo);
  }

  clickReceiveEmailsCheckBoxCheckBox() {
    this.clickElement(this.elements.receiveEmailsCheckBox());
  }

  clickSubmitButton() {
    this.clickElement(this.elements.submitButton());
  }

}

module.exports = new ContactUsPage();
