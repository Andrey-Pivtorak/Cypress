class AboutUs {

  baseUrl = 'https://telnyx.com/company/about';

  elements = {
    addressTitle: () => cy.get('.vlWNC')
  }

}

module.exports = new AboutUs();
