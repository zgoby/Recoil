'use strict';

const plianObjectEqual = require('../Recoil_plainObjEqual');

describe('plianObjectEqual', () => {
  // test('check ', () => {
  //   expect(()=>plianObjectEqual(1, 1)).toThrow();
  //   expect(()=>plianObjectEqual(1, {})).toThrow();
  // });
  test('check return', () => {
    const testMap = [[test, 2]];
    const testSet = [test, 2];
    expect(plianObjectEqual({test: new Map()}, {test: new Map()})).toBe(true);
    expect(
      plianObjectEqual({test: new Map(testMap)}, {test: new Map(testMap)}),
    ).toBe(true);
    expect(plianObjectEqual({test: new Set()}, {test: new Set()})).toBe(true);
    expect(
      plianObjectEqual({test: new Set(testSet)}, {test: new Set(testSet)}),
    ).toBe(true);
    expect(plianObjectEqual(null, {})).toBe(false);
    expect(plianObjectEqual({test: new Set([1])}, {test: new Set()})).toBe(
      false,
    );
    expect(
      plianObjectEqual(
        {test: new Map([[test, 2]])},
        {test: new Map([[test, 3]])},
      ),
    ).toBe(false);
    expect(plianObjectEqual(null, null)).toBe(true);
  });
});
