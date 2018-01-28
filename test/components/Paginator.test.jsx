import 'jsdom-global/register'; 
import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer';
import  Enzyme, { mount } from 'enzyme';
import { Paginator } from '../../src/components/Paginator';

let props = {
	page: 0,
	size: 10,
	pageSize: 5,
	onChange: jest.fn()
};

describe('Renders Paginator', () => {
	beforeEach(()=> {
		Enzyme.configure({ adapter: new Adapter() });
		props = {
			page: 0,
			size: 10,
			pageSize: 5,
			onChange: jest.fn()
		};
	});
	it('render without crash', ()=> {
		const rendered = renderer.create(<Paginator {...props} />);
		const tree = rendered.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('render without crash', ()=> {
		props = {
			page: 0,
			size: 50,
			pageSize: 5,
			onChange: jest.fn()
		};
		const rendered = renderer.create(<Paginator {...props} />);
		const tree = rendered.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should render the correct number of links for 2 pages', ()=> {
		let paginator = mount(<Paginator {...props} />);
		let links = paginator.find('li');
		expect(links.length).toEqual(2);
	});
	it('should render the correct number of links for 5 pages',()=> {
		props = {
			page: 0,
			size: 50,
			pageSize: 5,
			onChange: jest.fn()
		};
        
		const paginator = mount(<Paginator {...props} />);
		const links = paginator.find('li');
		expect(links.length).toEqual(10);
	});
    
	it('should paginate correclty and go to the first link', ()=> {
		props = {
			page: 0,
			size: 50,
			pageSize: 5,
			onChange: jest.fn()
		};
		const paginator = mount(<Paginator {...props} />);

		const firstLink = paginator.find('[data-action="paginator:first:link"]');
		firstLink.at(0).props().onClick();
		expect(props.onChange.mock.calls.length).toEqual(1);
		expect(props.onChange.mock.calls[0][0]).toEqual(
			{'page': 0}
		);
	});
	it('should paginate correclty and go to the last link', ()=> {
		props = {
			page: 0,
			size: 50,
			pageSize: 5,
			onChange: jest.fn()
		};
		const paginator = mount(<Paginator {...props} />);
        
		const lastLink = paginator.find('[data-action="paginator:last:link"]');
		lastLink.at(0).props().onClick();
		expect(props.onChange.mock.calls.length).toEqual(1);
		expect(props.onChange.mock.calls[0][0]).toEqual(
			{'page': 9}
		);
	});
	it('should paginate correclty and go to the others links (not first netiher last)', ()=> {
		props = {
			page: 0,
			size: 50,
			pageSize: 5,
			onChange: jest.fn()
		};
		const paginator = mount(<Paginator {...props} />);
        
		const pages = Array.from(new Array(8),(val,index)=>index).slice(1);
		pages.forEach((page, index) => {
            
			const currentPage = index + 2;
			const pageLink = paginator.find(`[data-action="paginator:${currentPage}:link"]`);
			pageLink.at(0).props().onClick();
			expect(props.onChange.mock.calls.length).toEqual(index + 1);
			expect(props.onChange.mock.calls[index][0]).toEqual(
				{'page': currentPage}
			);
		});
	});
});
