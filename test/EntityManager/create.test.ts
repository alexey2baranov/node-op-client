import em from "../em";
import WP from "../../src/entity/WP/WP";
import IWPBody from "../../src/entity/WP/IWPBody";
import task from "../entity/tesk.created.body";
import Project from "../../src/entity/Project/Project";
import Type from "../../src/entity/Type/Type";

// https://urz.open.ru:8091/projects/dash/work_packages/96
describe('em create', () => {
  it('OK', async () => {
    const wp = new WP();
    wp.body.subject='Task 1'
    wp.type=new Type(1)
    wp.project= new Project(1)
    const result= await em.create(wp)
    expect(result.id).not.toBeUndefined()
  })
})
