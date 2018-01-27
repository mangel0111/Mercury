import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonBase = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;    
    color: #fff;
    background-color: ${props => bgColorChooser(props.type)};
    border-color: ${props => bgColorChooser(props.type)};
`;

const bgColorChooser = (type) => {
	switch(type){
	case 'PRIMARY': 
		return  '#28a745';
	case 'SECONDARY':
		return '#6c757d';
	case 'DANGER': 
		return '#dc3545';
	case 'NEUTRAL':
	default: 
		return '#f8f9fa';
	}
};

class Button extends Component {
	render(){
		const { label, onClick, type = 'NEUTRAL'} = this.props;
		return (
			<ButtonBase
				type={type}
				onClick={onClick}
			>
				{label}
			</ButtonBase>
		);
	}
}

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string
};

export default Button;
