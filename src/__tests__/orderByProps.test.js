import orderByProps from '../orderByProps';

test('should sort by name and level', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    deffence: 40,
  };
  const order = ['name', 'level'];
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'deffence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, order)).toEqual(result);
});

test('should work without correct order arguments', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    deffence: 40,
  };
  const order = ['name', 'balance'];
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'deffence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ];
  expect(orderByProps(obj, order)).toEqual(result);
});

test('should work without order arguments', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    deffence: 40,
  };
  const order = [];
  const result = [
    { key: 'attack', value: 80 },
    { key: 'deffence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(orderByProps(obj, order)).toEqual(result);
});
