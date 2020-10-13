import Abstract from "../../../src/entity/Abstract/Abstract";
import Field from "../../../src/entity/decorators/Field";
import Duration from "../../../src/entity/Abstract/Duration";

class CustomFieldContainer extends Abstract {
  @Field('customField1', Date)
  startDate: Date

  @Field('customField2')
  message: string

  @Field('customField3', Duration)
  duration: Duration
}

describe('@Field', () => {
  it('get date', async () => {
    const entity = new CustomFieldContainer();
    (entity.body as any).customField1 = '2020-01-01'
    expect(entity.startDate).toBeInstanceOf(Date);
    expect(entity.startDate).toEqual(new Date(2020, 0, 1));
  })
  it('get duration', async () => {
    const entity = new CustomFieldContainer();
    (entity.body as any).customField3 = 'P1DT2H'
    expect(entity.duration).toBeInstanceOf(Duration);
    expect(entity.duration).toMatchObject({
      days: 1,
      hours: 2
    });
  })
  it('set date', async () => {
    const entity = new CustomFieldContainer();
    entity.startDate = new Date(2020, 0, 1)
    expect((entity.body as any).customField1).toBe('2020-01-01');
  })
  it('set duration', async () => {
    const entity = new CustomFieldContainer();
    entity.duration = new Duration({
      years: 1,
      hours: 1,
    })
    expect((entity.body as any).customField3).toBe('P1YT1H');
  })

  it('get string', async () => {
    const entity = new CustomFieldContainer();
    (entity.body as any).customField2 = 'qwerty'
    expect(entity.message).toBe('qwerty');
  })

  it('get = undefined', async () => {
    const entity = new CustomFieldContainer();
    expect(entity.message).toBeUndefined();
  })
  it('set string', async () => {
    const entity = new CustomFieldContainer();
    entity.message = 'qwerty'
    expect((entity.body as any).customField2).toBe('qwerty');
  })


})
