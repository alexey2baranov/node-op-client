import date2str from "../../../src/entity/utils/date2str";

describe('date2str', () => {
  it('full', async () => {
    const result = date2str(new Date(2020,0,1));
    expect(result).toBe('2020-01-01');
  })
})
