import React from 'react';
import Num3Comma from './Num3Comma';
import TestRenderer from 'react-test-renderer'


describe('test Num3Comma',() => {
    test('num3comma(1234) is 1,234', () => {
        const result = TestRenderer.create(<Num3Comma num={1234}></Num3Comma>);
        expect(JSON.stringify(result)).toBe(JSON.stringify("1,234"));
    })
});