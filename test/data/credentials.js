const validCred = {
  userName: "student",
  password: "Password123",
  /*
  validCred: ["student", "Password123"],
  invalidUsername: ["notstudent", "Password123"],
  invalidPassword: ["student", "Password"],*/
};

const invalidUsername = {
  userName: "notstudent",
  password: "Password123",
  /*
  validCred: ["student", "Password123"],
  invalidUsername: ["notstudent", "Password123"],
  invalidPassword: ["student", "Password"],*/
};

const invalidPassword = {
  userName: "student",
  password: "Password",
  /*
    validCred: ["student", "Password123"],
    invalidUsername: ["notstudent", "Password123"],
    invalidPassword: ["student", "Password"],*/
};

module.exports = {
  validCred,
  invalidUsername,
  invalidPassword,
};
