const jwt = require("jsonwebtoken");

const get_access_token = (userId, unique_uuid, username, email) => {
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
  const timestamp = Math.floor(Date.now() / 1000);
  const expirationTime = timestamp + 60 * 10; // expires in 10 minute
  const payload = {
    user_id: userId,
    unique_uuid: unique_uuid,
    username: username,
    email: email,
    timestamp: timestamp,
    exp: expirationTime,
  };
  const token = jwt.sign(payload, accessTokenSecret);
  return token;
};

const get_refresh_token = (userId) => {
  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
  const timestamp = Math.floor(Date.now() / 1000);
  const payload = {
    user_id: userId,
    timestamp: timestamp,
  };
  const token = jwt.sign(payload, refreshTokenSecret, { expiresIn: "1h" });
  return token;
};

module.exports = { get_access_token, get_refresh_token };
