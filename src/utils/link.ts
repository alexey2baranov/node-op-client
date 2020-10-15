import {WP} from "../index";

export default function link(wp: WP) {
  return process.env.baseUrl+wp.self.href
}
