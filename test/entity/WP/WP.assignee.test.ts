// import User from "../../../src/entity/User/User";
// import WP from "../../../src/entity/WP/WP";

import * as opClient from "../../../src";
import {User, WP} from "../../../src";
import IWPBody from "../../../src/entity/WP/IWPBody";
import body from "../../EntityManager/fotch.body";

describe('WP#ssignee', () => {
  it('set', async () => {
    const wp = new WP();
    wp.assignee= new User(1);
  })
  it('get', async () => {
    const wp = new WP(body.work_package as IWPBody);
    expect(wp.assignee).toBeInstanceOf(User);
  })
})
