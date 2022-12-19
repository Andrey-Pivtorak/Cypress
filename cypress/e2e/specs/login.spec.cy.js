import mainPage from "../pages/main.page";
import loginPage from '../pages/login.page';

describe('Check log in using valid credentials', () => {
  it('should show the "Verify your phone number" message', () => {
    mainPage.openMainPage();
    mainPage.closeCookiePopUp();
    mainPage.clickLoginButton();
    loginPage.enterEmail();
    loginPage.enterPassword();
    loginPage.clickRememberEmailCheckBox();
    loginPage.clickLoginButton();
  })

})
