import dotenv from "dotenv";
dotenv.config(); // must be called **before** using mongoURL

const port = process.env.PORT || 3000;
const mongoURL = process.env.MONGO_URL;
const jwtAccessKey = process.env.ACCESS_KEY;
const fbId = process.env.FB_ID;
const fbSecret = process.env.FB_SECRET;
const jwtSecretKey = process.env.SECRET_KEY;
const smtpUsername = process.env.SMTP_USERNAME;
const smtpPassword = process.env.SMTP_PASSWORD;

export {
  fbId,
  fbSecret,
  jwtAccessKey,
  jwtSecretKey,
  mongoURL,
  port,
  smtpPassword,
  smtpUsername,
};
