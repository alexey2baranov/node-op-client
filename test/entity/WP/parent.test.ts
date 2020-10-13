import WP from "../../../src/entity/WP/WP";
import body0 from "../task.body";
import IWPBody from "../../../src/entity/WP/IWPBody";
import em from "../../em";

// https://urz.open.ru:8091/projects/test/work_packages/128/relations

describe('opi lib WP parent', () => {
  let body: IWPBody

  beforeEach(()=>{
    body= JSON.parse(JSON.stringify(body0))
  })

  it('empty', () => {
    body._links.ancestors=[]
    const wp= new WP(body)
    expect(wp.parent).toBeNull()
  })
  it('exists', async () => {
    const wp= new WP(body)
    expect(wp.parent).toBeInstanceOf(WP)
    expect(wp.parent.id).toBe(470)
  })
})
