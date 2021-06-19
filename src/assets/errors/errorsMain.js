async function errorReporter(location, Dependancies = []) {
  if (location === "queryCheck") {
    const logMessage = await errorLogger(location, dependancies);
    return console.log(logMessage);
  }

  //
  //
  return { message: "error", error: "uncaught parameter for error reporting" };
}
module.exports = errorReporter;
