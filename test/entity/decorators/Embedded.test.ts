import Project from "../../../src/entity/Project/Project";
import {Abstract} from "../../../src";
import Embedded from "../../../src/entity/decorators/Embedded";

class EmbeddedContainer extends Abstract {
  @Embedded('project', Project)
  project: Project
}

describe('@Embedded', () => {
  it('getter', async () => {
    const entity = new EmbeddedContainer();
    (entity.body as any)._embedded = {
      project: {
        href: '/asfasfas/projects/1'
      }
    }
    expect(entity.project).toBeInstanceOf(Project);
    expect(entity.project.id).toBe(1);
  })

  it('getter = undefined', async () => {
    const entity = new EmbeddedContainer();
    expect(entity.project).toBeUndefined();
  })

  it('setter', async () => {
    const entity = new EmbeddedContainer();
    entity.project = new Project(1)
    expect(entity.project).toBeInstanceOf(Project);
    expect(entity.project.id).toBe(1);
  })


})
