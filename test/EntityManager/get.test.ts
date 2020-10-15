import WP from "../../src/entity/WP/WP";
import Status from "../../src/entity/Status/Status";
import em from "../em";
import CO from "../../src/entity/CO/CO";
import User from "../../src/entity/User/User";


// https://urz.open.ru:8091/projects/dash/work_packages/96
describe('em', () => {
  it('wp', async () => {
    const wp = await em.get(WP, 1)
    expect(wp.body).toHaveProperty('createdAt');
  })
  it('status', async () => {
    const wp = await em.get(Status, 1)
    expect(wp.body).toHaveProperty('name');
  })

  it('custom object', async () => {
    let result=[]
    for(let x=0; x<80; x++)    {
      try {
        const co = await em.get(CO, x)
        result.push({id:co.id, title: co.self.title})
      }
      catch(err){}
    }
    console.table(result)
  })
})
