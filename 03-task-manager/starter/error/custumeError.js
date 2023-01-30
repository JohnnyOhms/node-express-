class CustumeErrorHandler extends Error {
  constructor(mssg, statusCode) {
    super(mssg);
    this.statusCode = statusCode;
  }
}

const acessCustumeError = (mssg, statusCode) => {
  return new CustumeErrorHandler(mssg, statusCode);
};

module.exports = { CustumeErrorHandler, acessCustumeError };
