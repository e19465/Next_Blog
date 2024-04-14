const jwt = require("jsonwebtoken");

const verify_access_token = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
          console.log(err);
          return res.status(403).json({ error: "Invalid access token" });
        }
        req.user = payload;
        next();
      });
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

const verify_access_token_and_admin = (req, res, next) => {
  verify_access_token(req, res, () => {
    if (req.user.isAdmin || req.user.user_id === req.params.user_id) {
      next();
    } else {
      return res.status(403).json({ error: "Unauthorized" });
    }
  });
};

const verify_refresh_token = (req, res, next) => {
  const refresh_token = req.body.token;

  if (refresh_token) {
    jwt.verify(
      refresh_token,
      process.env.REFRESH_TOKEN_SECRET,
      (err, payload) => {
        if (err) {
          console.log(err);
          return res.status(403).json({ error: "Invalid refresh token" });
        }
        next();
      }
    );
  } else {
    return res.status(401).json({ error: "Refresh token required" });
  }
};

module.exports = {
  verify_access_token,
  verify_access_token_and_admin,
  verify_refresh_token,
};
