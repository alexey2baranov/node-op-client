import {parse, toSeconds} from "iso8601-duration";
import {Duration as IDuration} from 'iso8601-duration'

export default class Duration implements IDuration {
  years: number = 0
  months: number = 0
  days: number = 0
  hours: number = 0
  minutes: number = 0
  seconds: number = 0
  weeks: number = 0

  static parse(durationString: string): Duration {
    const result = new Duration()
    Object.assign(result, parse(durationString))
    return result
  }

  constructor(parts?: {
    years?: number,
    months?: number,
    days?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    weeks?: number,
  }) {
    if (parts) {
      Object.assign(this, parts)
    }
  }

  toString(): string {
    if (this.isEmpty()){
      return 'PT0S'
    }
    else {
      return `P${this.years}Y${this.months}M${this.days}DT${this.hours}H${this.minutes}M${this.seconds}S`.replace(/(?<=[A-Z])0[A-Z]/g, '')
    }
  }

  isEmpty():boolean{
    return toSeconds(this)===0
  }
}
