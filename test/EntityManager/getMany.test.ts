import WP from "../../src/entity/WP/WP";
import em from "../em";
import Type from "../../src/entity/Type/Type";
import Project from "../../src/entity/Project/Project";
import createWP from "./createWP";
import CO from "../../src/entity/CO/CO";
import User from "../../src/entity/User/User";

// https://urz.open.ru:8091/projects/dash/work_packages/96
describe('EntityManager#getMany', () => {
  describe('filters', () => {

    it('filter wp by status (from OP doc site)', async () => {
      const res = await em.getMany(WP, {
        filters: [{
          status_id: {
            operator: "o",
            values: null
          }
        }]
      })
      expect(res).toBeInstanceOf(Array);
      expect(res.length).toBeGreaterThan(1);
    })

    it('filter wp by parent', async () => {
      const parent= await createWP(),
        child= await createWP({
          _links:{
            parent: parent.self,
          }
        })

      const children = await em.getMany<WP>(WP, {
        filters: [{
          parent_id: {
            operator: '=',
            values: parent.id,
          },
        }]
      })
      expect(children).toBeInstanceOf(Array);
      expect(children.length).toBe(1);
      expect(children[0].id).toEqual(child.id);
    })

    it('write types', async () => {
      const res = await em.getMany<Type>(Type, {})
      expect(res).toBeInstanceOf(Array);
      expect(res.length).toBeGreaterThan(5);
      expect(res[0]).toBeInstanceOf(Type);
      console.log(
        res
          .sort((a, b) => a.id < b.id ? -1 : 1)
          .reduce((accumulator, type)=>{accumulator[type.self.title]= type.id; return accumulator}, {})
      )
    })

    it('write projects', async () => {
      const res = await em.getMany<Project>(Project, {})
      expect(res).toBeInstanceOf(Array);
      expect(res.length).toBeGreaterThan(1);
      expect(res[0]).toBeInstanceOf(Project);
      console.table(
        res
          .map(item => ({id: item.body.id, title: item.body._links.self.title,}))
          .sort((a, b) => a.id < b.id ? -1 : 1)
      )
    })

    it.skip('write custom options', async () => {
      const res = await em.getMany<CO>(CO, {})
      expect(res).toBeInstanceOf(Array);
      expect(res[0]).toBeInstanceOf(CO);
      console.table(
        res
          .map(item => ({id: item.body.id, title: item.body._links.self.title,}))
          .sort((a, b) => a.id < b.id ? -1 : 1)
      )
    })

    it('User', async () => {
      const users = await em.getMany<User>(User)
      expect(users[0]).toBeInstanceOf(User);
    })
  })
})
