import React from 'react';
import NaviItem from './NaviItem';
import TestRenderer from 'react-test-renderer'

describe('NaviItem test',() => {
    test('NaviItem matching', () => {
        const result = TestRenderer.create(<NaviItem></NaviItem>);
        expect(JSON.stringify(result)).toBe(JSON.stringify({"type":"li","props":{"className":"sc-bdvvaa bzZbkP"},"children":[{"type":"a","props":{"className":"sc-gsDJrp cnaGFP"},"children":[{"type":"div","props":{"className":"sc-dkPtyc gcVcmn"},"children":null},{"type":"span","props":{},"children":null},{"type":"i","props":{"className":"sc-hKwCoD bAGGRe"},"children":[""]}]}]}));
    });
});