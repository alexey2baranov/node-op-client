import WP from "../../../src/entity/WP/WP";
import Status from "../../../src/entity/Status/Status";
import IWPBody from "../../../src/entity/WP/IWPBody";
import body from "../../EntityManager/fotch.body";

describe('WP#status', () => {
  it('set', async () => {
    const wp = new WP();
    wp.status= new Status(1);
    expect(wp.body._links.status).toHaveProperty('href', '/api/v3/statuses/1');
  })
  it('get', async () => {
    const wp = new WP(body.work_package as IWPBody)
    expect(wp.status.self).toEqual(body.work_package._links.status)
  })
})
