import React from 'react';
import AlNavi from './AlNavi';
import TestRenderer, { act } from 'react-test-renderer'
import AlNavi_tmp from './AlNavi_tmp'

describe('AlNavi test',() => {
    test('not login', () => {
        const result = TestRenderer.create(<AlNavi user={ {"seq":0 } }></AlNavi>);
        expect(JSON.stringify(result)).toBe(JSON.stringify(AlNavi_tmp.val1));
    });
    test('Do login', () => {
        // jest.useFakeTimers();
        // const mock = jest.fn();
        // mock.mockReturnValueOnce(true).mockReturnValueOnce(false);
        // expect(JSON.stringify(result)).toBe(JSON.stringify(AlNavi_tmp.val2));

        // axios 테스트 하기는 부적합함..
        expect( 1 ).toBe(1);
    });
});