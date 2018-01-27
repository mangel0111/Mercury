import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderNav = styled.header`
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    z-index: 2;
    background-color: #000;
    color: #fff;
`;

const Container = styled.div`
    margin-right: 10%;
    margin-left: 10%;
    padding-left: 15px;
    padding-right: 15px;
`;

const Nav = styled.div`
    display: flex;
    margin: 10px;
    font-size: 20px;
    font-weight: lighter;
`;

const Menu = styled.div`
    margin-left: auto;
`;

export class Header extends Component{
	render (){
		return (
			<HeaderNav>
				<Container>
					<Nav>
						<div>
                            Mercury
						</div>
						<Menu>
                            Home
						</Menu>
					</Nav>
				</Container>
			</HeaderNav>
		);
	}
}

export default Header;
