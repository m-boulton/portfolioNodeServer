// Check for authentication
const auth = (req, res, next) => {
  if (req.body.auth) {
    next();
  } else {
    console.log(
      `Posting priveleges have been denied by ${JSON.stringify(
        req.headers.host
      )}`
    );
    res.json({
      message: "Incorrect Password",
      error: true,
      errorData: "Incorrect password",
    });
  }
};

module.exports = auth;
