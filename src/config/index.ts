import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  url: process.env.DB_URL,
};
