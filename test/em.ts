import EntityManager from "../src/EntityManager/EntityManager";
import dotenv from "dotenv"

dotenv.config();
export default new EntityManager({
  oauthOptions: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    accessTokenUri: `http://${process.env.HOST}:${process.env.PORT}/oauth/token`,
  },
  apiOptions: {
    path: `http://${process.env.HOST}:${process.env.PORT}`
  },
  createLogger(){
    return console
  }
})
