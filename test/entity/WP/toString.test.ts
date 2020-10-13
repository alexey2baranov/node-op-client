import WP from "../../../src/entity/WP/WP";
import body0 from "../task.body";
import IWPBody from "../../../src/entity/WP/IWPBody";

// https://urz.open.ru:8091/projects/test/work_packages/128/relations
describe('op WP toString', () => {
  let body:IWPBody

  beforeEach(()=>{
    body= JSON.parse(JSON.stringify(body0))
  })

  it('toString', () => {
    const wp= new WP(body)
    expect(`${wp}`).toBe('477 Task(1) parent')
  })
})
