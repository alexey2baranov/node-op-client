import body from "../../EntityManager/fotch.body";
import Field from "../../../src/entity/decorators/Field";
import Link from "../../../src/entity/decorators/Link";
import Project from "../../../src/entity/Project/Project";
import {Abstract} from "../../../src";

class LinkContainer extends Abstract {
  @Link('project', Project)
  project: Project
}

describe('@Link', () => {
  it('getter', async () => {
    const entity = new LinkContainer();
    (entity.body as any)._links = {
      project: {
        href: '/asfasfas/projects/1'
      }
    }
    expect(entity.project).toBeInstanceOf(Project);
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


})
