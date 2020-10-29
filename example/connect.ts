import {config} from "dotenv";
import {EntityManager, WP} from "../src";

// reading ENVIRONMENT from .env file
config();

// create EntityManager instance
const em = new EntityManager({
  baseUrl: process.env.BASE_URL,
  oauthOptions: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
  createLogger() {
    return console
  }
})

export default em
