import WP from "../../../src/entity/WP/WP";
import bt0 from "../task.body";
import IWPBody from "../../../src/entity/WP/IWPBody";

// https://urz.open.ru:8091/projects/test/work_packages/128/relations
describe('opi lib WP parent', () => {
  let bt:IWPBody

  beforeEach(()=>{
    bt= JSON.parse(JSON.stringify(bt0))
  })

  it('empty', () => {
    delete bt._links.children
    const wp= new WP(bt)
    expect(wp.children).toBeUndefined()
  })
  it('exists', () => {
    const wp= new WP(bt)
    expect(wp.children).toBeInstanceOf(Array)
    expect(wp.children.length).toBeGreaterThan(0)
  })
})
