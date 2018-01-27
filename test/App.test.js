import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

jest.mock('../src/containers/Merchants', () => 'merchants');
jest.mock('../src/containers/MerchantTable');

test('renders without crashing', () => {
	const rendered = renderer.create(
		<App/>);
	const tree = rendered.toJSON();
	expect(tree).toMatchSnapshot();
});
