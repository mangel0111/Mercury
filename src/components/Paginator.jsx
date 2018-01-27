import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Navigator = styled.nav`
    display: flex;
`;

const PageNavigator =  styled.ul`
    margin-left: auto;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: .25rem;
    margin-top: .5rem;
    margin-bottom: .5rem;

    a {
        cursor: pointer;
    }
`;

const Link = styled.a`
    position: relative;
    display: block;
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: ${props => props.selected ? '#fff': '#007bff'};
    background-color: ${props => props.selected ? '#007bff': '#fff'};;
    border: 1px solid #dee2e6;
    margin-left: 0;
`;

const FirtsLink = styled(Link)`
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
`;

const LastLink = styled(Link)`
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;

`;

export class Paginator extends Component {
    
	getMidlePages() {
		const { pageSize, size } = this.props;
		let maxPages = Math.ceil(size / pageSize);
		if(maxPages <= 2){
			return [];
		}
		const pages = Array.from(new Array(--maxPages),(val,index)=>index);
		return pages.slice(1);
	}

	render(){
		const { pageSize, size, onChange, page } = this.props;
    
		if(!size || size <= pageSize) {
			return null;
		}
		const currentPage = Math.ceil(size / pageSize);
		return (
			<Navigator>
				<PageNavigator>
					<li>
						<FirtsLink
							selected={page===0}
							onClick={()=> onChange({page: 0})}
						>
                            Previous
						</FirtsLink>
					</li>
					{this.getMidlePages().map(pageItem => 
						(
							<li 
								key={pageItem}
							>
								<Link
									selected={pageItem === page}
									onClick={()=> onChange({page: --pageItem})}s
								>
									{++pageItem}
								</Link>
							</li>
						)
					)}
					<li>
						<LastLink
							selected={currentPage - 1 === page}
							onClick={()=> onChange({page: currentPage - 1})}
						>
                            Last
						</LastLink>
					</li>
				</PageNavigator>
			</Navigator>
		);
	}
}

Paginator.propTypes = {
	onChange: PropTypes.func,
	size: PropTypes.number,
	pageSize: PropTypes.number,
	page: PropTypes.number
};

export default Paginator;
