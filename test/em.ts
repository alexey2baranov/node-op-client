import EntityManager from "../src/EntityManager/EntityManager";
import dotenv from "dotenv"

dotenv.config();
export default new EntityManager({
  baseUrl: process.env.BASE_URL,
  oauthOptions: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
  apiOptions: {
  },
  createLogger(){
    return console
  }
})
