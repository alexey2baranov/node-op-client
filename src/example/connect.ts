import {CO, Duration, EntityManager, Project, Status, StatusEnum, Type, WP, TypeEnum} from "../index";

(async () => {
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
  });

  // get Work Package by id
  const wp = await em.get<WP>(WP, 12)
  // get Work package collection by filters
  const wpCollection = await em.getMany<WP>(WP, {
    offset: 2,
    pageSize: 25,
    filters: [{
      project: {
        operator: "!",
        values: 14
      },
    }]
  })

  // modify Work package
  wp.type = new Type(TypeEnum.Epic)
  wp.subject = 'Demo subject'
  wp.estimatedTime = new Duration({days: 24, hours: 15})
  wp.startDate = new Date(2020, 10, 1)
  wp.dueDate = new Date(2020, 11, 31)

  // patch Work Package
  await em.patch(wp, false);
  // or patch some fields only
  await em.patch(wp, false, ['startDate','_links.type']);



  // get Type by id
  const type = await em.get<Type>(Type, 4);

  // get Project by id
  const project = await em.get<Project>(Project, 1);

  // get Status by id
  const status = await em.get<Status>(Status, StatusEnum.InProgress);

  // get Custom Option by id
  const co = await em.get<CO>(CO, 1);

})()
