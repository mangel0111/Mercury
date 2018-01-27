import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../../src/components/Header';


test('Renders Header', () => {
	const rendered = renderer.create(<Header/>);
	const tree = rendered.toJSON();
	expect(tree).toMatchSnapshot();
});
