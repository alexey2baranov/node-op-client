import body from "./fotch.body";
import em from "../em";
import {WP} from "../../src";

describe('EntityManager#fotch', () => {
  it('get wp', async () => {
    const res = await em.fetch(new WP(1).self.href);
    expect(res.id).toBe(1);
  })
  it('get statuses', async () => {
    const res = await em.fetch('/api/v3/statuses')
    res._embedded.elements.forEach(each=>console.log(each))
  })

  it('patch estimatedTime', async () => {
    const res0 = await em.fetch(new WP(1).body._links.self.href)

    const res = await em.fetch(res0._links.updateImmediately.href, {
      method: 'PATCH',
      body: {
        lockVersion: res0.lockVersion,
        subject: new Date().toISOString(),
        // https://www.digi.com/resources/documentation/digidocs/90001437-13/reference/r_iso_8601_duration_format.htm
        estimatedTime: 'PT4H',
      }
    })
    expect(res).toHaveProperty('lockVersion', res0.lockVersion + 1);
  })
})
