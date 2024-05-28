const jwt = require("jsonwebtoken");

const get_access_token = (userId, unique_uuid, username, email, isAdmin) => {
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
  const timestamp = Math.floor(Date.now() / 1000);
  const expirationTime = timestamp + 60 * 2; // expires in 2 minute
  const payload = {
    user_id: userId,
    unique_uuid: unique_uuid,
    username: username,
    email: email,
    timestamp: timestamp,
    exp: expirationTime,
    isAdmin: isAdmin,
  };
  const token = jwt.sign(payload, accessTokenSecret);
  return token;
};

const get_refresh_token = (userId, unique_uuid, username, email, isAdmin) => {
  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
  const timestamp = Math.floor(Date.now() / 1000);
  const expirationTime = timestamp + 60 * 60 * 24 * 7; // expires in 1 week
  const payload = {
    user_id: userId,
    unique_uuid: unique_uuid,
    username: username,
    email: email,
    timestamp: timestamp,
    exp: expirationTime,
    isAdmin: isAdmin,
  };
  const token = jwt.sign(payload, refreshTokenSecret);
  return token;
};

module.exports = { get_access_token, get_refresh_token };
