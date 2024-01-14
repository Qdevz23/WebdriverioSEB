//const startPageConfig = require("./start-page-config");
const loginPage = require("../pages/login");
const credentials = require("../data/credentials");
const headerTitle = "Test login";

describe("Login page", function () {
  this.retries(1); //reexecute the testscenario if it fails. It will retry 1 time

  beforeEach(async () => {
    await browser.url("practice-test-login/");
  });

  it("Navigate to page", async () => {
    await loginPage.verifyHeader(headerTitle);
    await loginPage.verifyFormIsExisting();
  });

  xit("Navigate to page", async () => {
    await startPageConfig.clickUserDropDown();
    await browser.pause(5000);
    let currentLang = await startPageConfig.getCurrentlanguageSelection();
    expect(currentLang).toBe("Svenska");
    await startPageConfig.changeLanguageTo("English");
    currentLang = await startPageConfig.getCurrentlanguageSelection();
    expect(currentLang).toBe("English");
    await startPageConfig.changeLanguageTo("Svenska");
    currentLang = await startPageConfig.getCurrentlanguageSelection();
    expect(currentLang).toBe("Svenska");
  });

  it("Login with valid credentials", async () => {
    //await browser.url("practice-test-login/");
    await loginPage.login(
      credentials.validCred.userName,
      credentials.validCred.password
    );
    await loginPage.submitButton.click();
    await expect(browser).toHaveUrlContaining("logged-in-successfully/");
    await loginPage.logoutButton.click();
  });

  it("Login with invalid username", async () => {
    //await browser.url("practice-test-login/");
    await loginPage.login(
      credentials.invalidUsername.userName,
      credentials.invalidUsername.password
    );
    await loginPage.submitButton.click();
    await expect(loginPage.errorMsgLoginCredentials).toHaveText(
      "Your username is invalid!"
    );
  });

  it("Login with invalid password", async () => {
    //await browser.url("practice-test-login/");
    await loginPage.login(
      credentials.invalidPassword.userName,
      credentials.invalidPassword.password
    );
    await loginPage.submitButton.click();
    await expect(loginPage.errorMsgLoginCredentials).toHaveText(
      "Your password is invalid!"
    );
  });
});
