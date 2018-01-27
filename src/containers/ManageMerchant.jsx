import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import Button from '../components/Button';


const Toolbar = styled.div`
    display: inline;

    button {
        margin-right: 10px;
    }
`;

const Form = styled.div`
    margin: 20px 0;

    div {
        margin: 10px 0;
    }
`;


const Input = styled.input`
    display: block;
    width: ${(props) => props.width || '98%'};
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
`;

const customStyles = {
	content : {
		top: '50%',
		left: '55%',
		width: '900px',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

class ManageMerchant extends Component {
	constructor(props){
		super(props);
		this.state = {
			merchant: props.merchant
		};
	}

	render() {
		Modal.setAppElement('body');
		const { description, contentLabel, onRequestClose, dispatch, saveAction, action } = this.props;
		const { merchant } = this.state;
		return (
			<Modal
				isOpen={true}
				onRequestClose={onRequestClose}
				contentLabel={contentLabel}
				content={
					{
						position: 'absolute',
						top: '40px',
						left: '20%',
						right: '20%',
						bottom: '40px',
						border: '1px solid #ccc',
						background: '#fff',
						overflow: 'auto',
						WebkitOverflowScrolling: 'touch',
						borderRadius: '4px',
						outline: 'none',
						padding: '20px'
					}
				}
				style={customStyles}
			>
				<h1>{contentLabel}</h1>
				<p>{description}</p>
				<Form>
					<div>
						<label>First Name:</label>
						<Input 
							value={merchant.firstname}
							onChange={({target})=> {
								const { merchant } = this.state;
								merchant.firstname = target.value;
								this.setState({
									merchant
								});
							}
							}
						/>
					</div>
					<div>
						<label>Last Name:</label>
						<Input 
							value={merchant.lastname}
							onChange={({target})=> {
								const { merchant } = this.state;
								merchant.lastname = target.value;
								this.setState({
									merchant
								});
							}
							}
						/>
					</div>
					<div>
						<label>Email:</label>
						<Input 
							value={merchant.email}
							type="email"
							onChange={({target})=> {
								const { merchant } = this.state;
								merchant.email = target.value;
								this.setState({
									merchant
								});
							}
							}
						/>
					</div>
					<div>
						<label>Phone:</label>
						<Input 
							value={merchant.phone}
							onChange={({target})=> {
								const { merchant } = this.state;
								merchant.phone = target.value;
								this.setState({
									merchant
								});
							}
							}
						/>
					</div>
					<div>
						<label>Is Premiun?:</label>
						<Input 
							type="checkbox"
							checked={merchant.hasPremiun}
							width="0"
							onChange={({target})=> {
								const { merchant } = this.state;
								merchant.hasPremiun = target.checked;
								this.setState({
									merchant
								});
							}
							}
						/>
					</div>
					<div>
						<label>Url Picture:</label>
						<Input 
							value={merchant.avatarUrl}
							onChange={({target})=> {
								const { merchant } = this.state;
								merchant.avatarUrl = target.value;
								this.setState({
									merchant
								});
							}
							}
						/>
					</div>
				</Form>
				<Toolbar>
					<Button
						label={saveAction}
						type="PRIMARY"
						onClick={()=> {
							dispatch(action({ merchant: this.state.merchant }));
							onRequestClose();
						}}
					/>
					<Button
						label="Cancel"
						type="DANGER"
						onClick={onRequestClose}
					/>
				</Toolbar>
			</Modal>
		);
	}
}

ManageMerchant.propTypes = {
	merchant: PropTypes.object,
	description: PropTypes.string,
	contentLabel: PropTypes.string,
	onRequestClose: PropTypes.func,
	dispatch: PropTypes.func,
	saveAction: PropTypes.string,
	action: PropTypes.func
};

export default connect()(ManageMerchant);
