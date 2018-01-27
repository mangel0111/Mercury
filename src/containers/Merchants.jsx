import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MerchandTable from './MerchantTable';
import { getAllMerchants } from '../actions/index';

const Panel = styled.div`
    margin-top: 60px;
`;

const Dashboard = styled.div`
    padding: 10px 80px;
    margin: 120px 150px;
    border: solid #f7f7f9;
    border-width: .2rem;
`;

const Toolbar = styled.h2`
    display: flex;
`;

const LeftAction = styled.div`
    margin-left: auto;
    margin-top: 45px;
`;

const Button = styled.button`
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
    background-color: #28a745;
    border-color: #28a745;
`;

class Merchants extends Component {
	constructor(props){
		super(props);
	}
    
	componentWillMount() {
		this.searchMerchants({ page: 0});
	}
    
	searchMerchants ({ page = 0}) {
		const { dispatch } = this.props;
		dispatch(getAllMerchants({ page }));
	}
    
	render(){
		return(
			<Panel>
				<Dashboard>
					<Toolbar>
						<div>
							<h2>
                            Merchants!
							</h2>
						</div>
						<LeftAction>
							<Button> Create </Button>
						</LeftAction>
					</Toolbar>
					<p>
                        From here you can manage all the merchants in your company, you can edit, create or even delete 
                        a merchant.
					</p>
					<MerchandTable/>
				</Dashboard>
			</Panel>
		);
	}
}

Merchants.propTypes = {
	dispatch: PropTypes.func
};

export default connect()(Merchants);
