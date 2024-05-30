const jwt = require("jsonwebtoken");

function tokenVerification(req, res, next) {
  var token = req.header("Authorization");
  if (!token)
    return res.status(200).send({
      message: "Token is required",
      data: "user is not login"
    });
  try {
    token = token.replace("Bearer ", "");
    const SECRET_KEY = "codefortomorrowtaskproject"
    jwt.verify(token, SECRET_KEY, function (err, decoded) {
      req.user = decoded;
      if (err)
        return res.status(200).send({
          message: "Token is required",
          data: "invalid token"
        });
      next();
    });
  } catch (err) {
    return res.status(200).send({
      message: "something is wrong"
    });
  }

}
module.exports = {
  tokenVerification: tokenVerification
};
