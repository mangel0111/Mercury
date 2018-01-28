import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../../src/components/Header';


describe('Renders Header', () => {
	it('render without crash', ()=> {
		const rendered = renderer.create(<Header/>);
		const tree = rendered.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
