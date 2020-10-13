import WP from "../../src/entity/WP/WP";
import Status from "../../src/entity/Status/Status";
import em from "../em";
import createWP from "./createWP";


// https://urz.open.ru:8091/projects/dash/work_packages/96
describe('em validate', () => {
  it('wp', async () => {
    const wp = await createWP()
    // delete wp.body.createdAt
    delete wp.body.updatedAt
    const result = await em.validate(wp)
    expect(result).toHaveProperty('createdAt')
  })
})
