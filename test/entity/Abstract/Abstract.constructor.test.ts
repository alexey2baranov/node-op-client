import Abstract from "../../../src/entity/Abstract/Abstract";
import body from "../../EntityManager/fotch.body";
import {IPartialWPBody} from "../../../src/entity/WP/WP";

describe('Abstract constructor', () => {
  it('empty', async () => {
    const wp = new Abstract();
    expect(wp.body.id).toBeUndefined();
    expect(wp.body._links.self).toBeUndefined();
  })
  it('number', async () => {
    const wp = new Abstract(1);
    expect(wp.body.id).toBe(1);
    expect(wp.body._links.self).toMatchObject({
      href: '/should_be_defined/1'
    })
  })
/*
  // посмотрим нужны ли string
  it.skip('string', async () => {
    const wp = new Abstract( '/should_be_defined/1');
    expect(wp.body.id).toBe(1);
    expect(wp.body._links.self).toMatchObject({
      href: '/should_be_defined/1'
    })
  })
  */
  it('self', async () => {
    const wp = new Abstract({href: '/should_be_defined/1'});
    expect(wp.body.id).toBe(1);
    expect(wp.body._links.self).toMatchObject({
      href: '/should_be_defined/1'
    })
  })
  it('IEntity', async () => {
    const wpJson= body.work_package
    const wp = new Abstract(wpJson as IPartialWPBody);
    expect(wp.body.id).toBe(wpJson.id);
    expect(wp.body._links.self).toEqual(wpJson._links.self)
  })
})
