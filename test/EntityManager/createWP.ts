import IWPBody from "../../src/entity/WP/IWPBody";
import WP from "../../src/entity/WP/WP";
import Project from "../../src/entity/Project/Project";
import em from "../em";

export default async function createWP(body: Partial<Omit<IWPBody, '_links'> & IWPBody['_links']> = {}): Promise<WP> {
  const wp = new WP(Object.assign({
      subject: 'task ' + new Date().toISOString(),
    },
    body));
  wp.project = new Project(1)
  return await em.create<WP>(wp)
}
