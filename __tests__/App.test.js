/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, mount } from 'enzyme';
import App from '../src/App';

describe('jest', function() {
    // jest-environment jsdom is doing all the heavy lifting here
    test('should use jsdom in this test file', () => {
        const element = document.createElement('div');
        expect(element).not.toBeNull();
    });    
})

describe('App', function () {
    it('should render w/o error', function() {
        const component = render(<App />)
        expect(component).not.toBeUndefined()
        expect(component.html()).toContain('h1')
    })

    it('should mount w/o error', function() {
        const component = mount(<App />)
        expect(component).not.toBeUndefined()
        expect(component.html()).toContain('h1')

    })
});