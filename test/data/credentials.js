const validCred = {
  userName: "student",
  password: "Password123",
};

const invalidUsername = {
  userName: "notstudent",
  password: "Password123",
};

const invalidPassword = {
  userName: "student",
  password: "Password",
};

module.exports = {
  validCred,
  invalidUsername,
  invalidPassword,
};
