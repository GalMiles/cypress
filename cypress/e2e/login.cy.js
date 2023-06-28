
describe("Login Main Page", () => {
  
  beforeEach(() => {
    cy.visit("https://stgchrome.paradox.ai/automation-engineer-assignment/");
  });

  //1
  it("visit main page", () => {
    cy.visit("https://stgchrome.paradox.ai/automation-engineer-assignment/");
  });

  //2
  it("enter email, click Next and checkbox", () => {
    cy.get('[data-test="email-login-input"]').type("rnd.extension+galmiles@paradox.ai");
    cy.get('[data-test="email-login-submit-button"]').click();
    cy.get('input[type="checkbox"]').click({ force: true });
  });

  //3
  //check it
  it("mark and unmark checkbox", () => {
    cy.get('input[type="checkbox"]').click({ force: true }); //unmark
    cy.get('input[type="checkbox"]').click({ force: true }); //mark
  });

  
  //5
  it("insert invalid email address", () => {
    cy.get('[data-test="email-login-input"]').type("thisemaildoesntexist@not.exist");
    cy.get('[data-test="email-login-submit-button"]').click();
  });

  //6
  it("insert valid email address", () => {
    cy.get('[data-test="email-login-input"]').type("rnd.extension+galmiles@paradox.ai");
    cy.get('[data-test="email-login-submit-button"]').click();
  });

  //7
  it("confirm elements", () => {
    //confirm email
    cy.get('[data-test="email-login-input"]').type("rnd.extension+galmiles@paradox.ai");
    cy.get('[data-test="email-login-submit-button"]').click();

    //confirm sign-in button
    cy.get('[data-test="signin-button"]');

    //confirm cancel button
    cy.get('[data-test="submit-password-cancel"]');

    //confirm checkbox
    cy.get('[data-test="keep-me-signed-in-checkbox"]');

    //confirm forgot password
    cy.get('[data-test="forgot-password"]');
  });

  //9
  it("check next button", () => {
    cy.get('[data-test="email-login-input"]').type("rnd.extension+galmiles@paradox.ai");
    cy.get('[data-test="email-login-submit-button"]').click();
  });


  describe("Password Page", () => {
    beforeEach(() => {
      cy.get('[data-test="email-login-input"]').type("rnd.extension+galmiles@paradox.ai");
      cy.get('[data-test="email-login-submit-button"]').click();
    });

    //8
    it("check cancel button", () => {
      cy.get('[data-test="submit-password-cancel"]').click();
    });

    //here I treid to check the href attribute that is the right url, but it didnt work
    it("check forgot password", () => {
      cy.get('[data-test="forgot-password"]').click();
      cy.get('[data-test="forgot-password"]').invoke('attr', 'href').should('eq', 'https://stgchrome.paradox.ai/automation-engineer-assignment/forgot-password');
    });

    it("incorrect 2FA", () => {
      cy.get('[data-test="password-input"]').type("1234");
      cy.get('[data-test="signin-button"]').click();

      //here I would get the data-test "2fa-input-field" and maybe check children length to confirm it and then get.(.v-text-field__slot > :nth-child(1) input) and then get into it the value
      
    });

  });

});
