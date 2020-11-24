
import Link from "../../../src/entity/decorators/Link";
import Project from "../../../src/entity/Project/Project";
import {Abstract} from "../../../src";

class LinkContainer extends Abstract {
  @Link('project', Project)
  project: Project
}

describe('@Link', () => {
  it('getter', async () => {
    console.log('line 13')
    const entity = new LinkContainer();
    (entity.body as any)._links = {
      project: {
        href: '/asfasfas/projects/1'
      }
    }
    expect(entity.project).toBeInstanceOf(Project);
    expect(entity.project.self).toBe((entity.body._links as any).project);
    expect(entity.project.id).toBe(1);
  })

  it('getter = undefined', async () => {
    const entity = new LinkContainer();

    expect(entity.project).toBeUndefined();
  })

  it('setter', async () => {
    const entity = new LinkContainer();
    entity.project = new Project(1)
    expect(entity.project).toBeInstanceOf(Project);
    expect(entity.project.id).toBe(1);
  })

  it('persistent link', async () => {
    const entity = new LinkContainer()
    const link= new Project(1)
    entity.project = link
    expect(entity.project).toBe(link)
  })

  it('container and @link refers the same body', async () => {
    const entity = new LinkContainer()
    entity.project = new Project(1)
    expect(entity.project.body._links.self).toBe((entity.body._links as any).project)
  })

  it('container._links is modified via @link', async () => {
    const entity = new LinkContainer()
    const link= new Project(1)
    entity.project = link
    link.id= 777
    expect((entity.body._links as any).project.href).toBe('/api/v3/projects/777')
  })
})
