import mainPage from "../pages/main.page";
import signUpPage from '../pages/signUp.page';

describe('Create a new account', () => {
  it('should get a new user', () => {
    mainPage.openMainPage();
    mainPage.closeCookiePopUp();
    mainPage.clickSignUpButton();
    signUpPage.enterEmail();
    signUpPage.enterFullName();
    signUpPage.enterPassword();
    signUpPage.clickTermsCheckBox();
    signUpPage.clickReceiveEmails();
    signUpPage.clickCreateAccountButton();
  })

})
