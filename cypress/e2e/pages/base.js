export default class Base {

  scrollElement(locator) {
    locator
      .scrollIntoView({ easing: 'linear' })
      .should('be.visible');
  }

  clickElement(locator) {
    locator
      .scrollIntoView()
      .should('be.visible')
      .click();
  }

}

