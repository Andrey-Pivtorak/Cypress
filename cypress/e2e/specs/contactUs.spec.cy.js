import mainPage from "../pages/main.page";
import contactUsPage from '../pages/contactUs.page';

describe('Check the connection with an expert using valid credentials', () => {
  it('should show the "Thank you..." message', () => {
    mainPage.openMainPage();
    mainPage.closeCookiePopUp();
    mainPage.clickTalkExpertButton();
    contactUsPage.enterReasonValue();
    contactUsPage.enterFirstName();
    contactUsPage.enterLastName();
    contactUsPage.enterEmail();
    contactUsPage.selectPhoneCode();
    contactUsPage.enterPhoneNumber();
    contactUsPage.enterWebSite();
    contactUsPage.enterAddInfo();
    contactUsPage.clickReceiveEmailsCheckBoxCheckBox();
    contactUsPage.clickSubmitButton();
  })

})
