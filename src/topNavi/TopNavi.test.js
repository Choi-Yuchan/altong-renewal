
let temp;
describe("simple test", () => {
  beforeEach(() => {
    temp = 1;
  });
  
  afterEach(() => {
    temp = 0;
  });
  
  test('1 is 1', () => {
    expect(1).toBe(1);
  });
  
})