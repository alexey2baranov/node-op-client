import {CO, Duration, EntityManager, Project, Status, StatusEnum, Type, WP, TypeEnum, User} from "../src";
import {config} from "dotenv";

console.warn(`
 * WARNING !!!
 * Check out you had started OpenProject server, configured OAUth2.0 client and filled .env file before start example.
 * If you haven't your own open project run "npm run server:up" to start demo server.
 `);

// reading ENVIRONMENT from .env file
config();

(async () => {
  // create EntityManager instance
  const em = new EntityManager({
    baseUrl: process.env.BASE_URL,
    oauthOptions: {
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    createLogger: () => console
  });

  // get Work Package by id
  const wp = await em.get<WP>(WP, 12)

  // modify Work package
  wp.type = new Type(TypeEnum.Epic)
  wp.subject = 'Quick start Demo'
  wp.estimatedTime = new Duration({days: 24, hours: 15})
  wp.startDate = new Date()
  await em.patch(wp, false);   // or patch some fields only eg em.patch(wp, false, ['startDate','_links.type']);

  // create new Work Package
  const wp2 = new WP()
  wp2.type = new Type(TypeEnum.Task)
  wp2.project= new Project(1)
  wp2.subject = 'Read all examples'
  wp.assignee= new User(1)
  await em.create(wp2)
  console.log(wp2.createdAt) // -> current date

  // get Work package collection by filters
  const wpCollection = await em.getMany<WP>(WP, {
    offset: 2,
    pageSize: 5,
    filters: [{
      project: {
        operator: "!",
        values: 2
      },
    }]
  })
  console.log(wpCollection[2].subject) // -> Upload presentations to website

  // get Type by id
  const type = await em.get<Type>(Type, TypeEnum.Milestone);
  console.log(type.self.title) // ->Milestone

  // get Project by id
  const project = await em.get<Project>(Project, 1);
  console.log(project.self.title) // ->Demo project

  // get Status by id
  const status = await em.get<Status>(Status, StatusEnum.InProgress);
  console.log(status.self.title) // ->In Progress

  // get Custom Option by id
  try {
    const co = await em.get<CO>(CO, 1);
    console.log(co.self.title) // ->In progress
  }
  // this will throw error if you haven't at least one CustomOptions
  catch(err){
    console.log(err.message) // ->404 [urn:openproject-org:api:v3:errors:NotFound] The requested resource could not be found.
  }

  // get User by id
  const user = await em.get<User>(User, 1);
  console.log(user.self.title) // ->System
})()
