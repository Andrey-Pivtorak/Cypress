import Base from "./base";

class LoginPage extends Base {

  baseUrl = 'https://telnyx.com/sign-up';

  elements = {
    emailInput: () => cy.get('.fCOoik [name="email"]'),
    passwordInput: () => cy.get('[name="password"]'),
    rememberEmailCheckBox: () => cy.get('.fmuWIM svg'),
    loginButton: () => cy.get('[aria-label="loginForm"] button'),
  }

  inputValues = {
    email: 'autotesterlqc@outlook.com',
    password: '12345@!AQa23'
  }

  enterEmail() {
    this.enterInput(this.elements.emailInput(), this.inputValues.email);
  }

  enterPassword() {
    this.enterInput(this.elements.passwordInput(), this.inputValues.password);
  }

  clickRememberEmailCheckBox() {
    this.clickElement(this.elements.rememberEmailCheckBox());
  }

  clickLoginButton() {
    this.clickElement(this.elements.loginButton());
  }

}

module.exports = new LoginPage();
