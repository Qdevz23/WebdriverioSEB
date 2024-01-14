class loginPage {
  get headerTitle() {
    return $("h2=Test login");
  }

  get form() {
    return $("#form");
  }

  get usernameTextField() {
    return $("#username");
  }

  get passwordTextField() {
    return $("#password");
  }

  get submitButton() {
    return $("#submit");
  }

  get logoutButton() {
    return $("#loop-container a");
  }

  get errorMsgLoginCredentials() {
    return $("#error");
  }

  async verifyHeader(headerName) {
    await expect(this.headerTitle).toHaveText(headerName);
  }

  async verifyFormIsExisting() {
    await this.form.waitForExist({
      timeoutMsg: "The Login form does not exist",
    });
  }

  async login(username, password) {
    await this.usernameTextField.setValue(username);
    await this.passwordTextField.setValue(password);
  }
}
module.exports = new loginPage();
