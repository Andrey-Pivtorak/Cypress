import Base from "./base";

class SignUpPage extends Base {

  baseUrl = 'https://telnyx.com/sign-up';

  elements = {
    emailInput: () => cy.get('#email'),
    fullNameInput: () => cy.get('#full_name'),
    passwordInput: () => cy.get('#password'),
    termsCheckBox: () => cy.get('[aria-labelledby="terms-label"]'),
    receiveEmailsCheckBox: () => cy.get('.ilzycq div:nth-child(2) svg'),
    createAccountButton: () => cy.get('.jdjrgE')
  }

  inputValues = {
    email: 'autotesterlqc@outlook.com',
    fullName: 'John Trace',
    password: '12345@!AQa23'
  }

  enterEmail() {
    this.enterInput(this.elements.emailInput(), this.inputValues.email);
  }

  enterFullName() {
    this.enterInput(this.elements.fullNameInput(), this.inputValues.fullName);
  }

  enterPassword() {
    this.enterInput(this.elements.passwordInput(), this.inputValues.password);
  }

  clickTermsCheckBox() {
    this.clickElement(this.elements.termsCheckBox());
  }

  clickReceiveEmails() {
    this.clickElement(this.elements.receiveEmailsCheckBox());
  }

  clickCreateAccountButton() {
    this.clickElement(this.elements.createAccountButton());
  }

}

module.exports = new SignUpPage();
