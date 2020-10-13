import em from "../em";
import WP from "../../src/entity/WP/WP";
import IWPBody from "../../src/entity/WP/IWPBody";
import task from "../entity/tesk.created.body";
import Project from "../../src/entity/Project/Project";
import createWP from "./createWP";

// https://urz.open.ru:8091/projects/dash/work_packages/96
describe('opi lib WP patch', () => {
  it('error', async () => {
    try {
      let wp = await createWP()
      wp = await em.get<WP>(WP, wp.id)
      wp.body.subject = ''
      const patched = await em.patch(wp)
      throw new Error('should not be hire');
    }
    catch(err) {
      expect(err.message).toContain('Subject can\'t be blank');
    }
  })


  it('ok', async () => {
    const wp = await createWP()
    wp.body.subject='1234'
    await em.patch(wp)
    expect(wp.body.subject).toBe('1234');
    expect(wp.body.lockVersion).toBe(1);
  })

  it('without lockVersion', async () => {
    let wp = await createWP()
    delete wp.body.lockVersion
    await em.patch(wp)
  })


  it('scope', async () => {
    const wp = await createWP()
    wp.body.estimatedTime = 'wrong time hire be be be'

    await em.patch(wp, false, ['subject'])
  })
})
