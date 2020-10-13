import task from "../tesk.created.body";
import Abstract from "../../../src/entity/Abstract/Abstract";

// https://urz.open.ru:8091/projects/dash/work_packages/96
describe('opi lib WP scope', () => {
  it('simple', () => {
    const wp = new Abstract({
      id: 1,
      _links: {
        self: {href: '123'}
      }
    });
    const scope = wp.bodyScope(['_links.self'])
    expect(scope).toEqual({
      _links:{
        self: wp.body._links.self
      }})
  })
})
