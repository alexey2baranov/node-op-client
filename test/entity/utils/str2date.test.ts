import str2date from "../../../src/entity/utils/str2date";

describe('str2date', () => {
  it('timezone', async () => {
    const result = str2date('2020-01-01');

    expect(result.getTimezoneOffset()).toEqual(new Date().getTimezoneOffset());
  })
  it('parts', async () => {
    const result = str2date('2020-01-01');
    expect(result.getHours()).toBe(0);
  })

  it('parts Z', async () => {
    const date = new Date()
    const result = str2date(date.toISOString());
    expect(result.getHours()).toBe(date.getHours());
  })
})
