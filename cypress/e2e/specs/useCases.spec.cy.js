import mainPage from "../pages/main.page";
import useCasesPage from '../pages/useCases.page';

describe('Check use cases clickability', () => {
  it('should click the use case', () => {
    useCasesPage.openUseCasesPage();
    mainPage.closeCookiePopUp();
    useCasesPage.scrollCallTrackingUseCaseTitle();
    useCasesPage.clickCallTrackingUseCaseTitle();
    cy.go('back');
    useCasesPage.scrollConferenceCallingTitle();
    useCasesPage.clickConferenceCallingTitle();
  })

})
