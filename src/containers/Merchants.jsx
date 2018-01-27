import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/Button';
import MerchandTable from './MerchantTable';
import ManageMerchant from './ManageMerchant';
import { getAllMerchants, addMerchant } from '../actions/index';

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

class Merchants extends Component {
	constructor(props){
		super(props);
		this.state = {
			createMerchant: false
		};
	}
    
	componentWillMount() {
		this.searchMerchants({ page: 0});
	}
    
	searchMerchants ({ page = 0}) {
		const { dispatch } = this.props;
		dispatch(getAllMerchants({ page }));
	}

	createMerchantModal(){
		return (
			<ManageMerchant
				merchant={{
					bids: []
				}}
				action={addMerchant}
				saveAction="Create"
				contentLabel="Create Merchant"
				description="Here you can create a ner merchant"
				onRequestClose={() => this.setState({
					createMerchant: false
				})}
			/>
		);
	}
    
	render(){
		const { createMerchant } = this.state;
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
							<Button
								label="Create"
								type="PRIMARY"
								onClick={()=> this.setState({ createMerchant: true })}
							/>
						</LeftAction>
					</Toolbar>
					<p>
                        From here you can manage all the merchants in your company, you can edit, create or even delete 
                        a merchant.
					</p>
					<MerchandTable/>
				</Dashboard>
				{
					createMerchant && this.createMerchantModal()
				}
			</Panel>
		);
	}
}

Merchants.propTypes = {
	dispatch: PropTypes.func
};

export default connect()(Merchants);
