import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaStar from 'react-icons/lib/fa/star';
import FaSquareO from 'react-icons/lib/fa/square-o';
import Paginator from '../components/Paginator';
import { getAllMerchants } from '../actions/index';

const Container = styled.div`
    margin-right: 0;
    margin-left: 0;
    border-width: .2rem;
`;

const Table = styled.table`
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;

    th, td {
        padding: .75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
    }

    thead th {
        text-align: inherit;
        vertical-align: bottom;
        border-bottom: 2px solid #dee2e6;
    }
`;

const Imagen = styled.img`
    border-radius: 6px;
    width: 80px;
`;

const Cell = styled.div`
    margin-top: 10px;
`;

const COLUMNS = [{
	name: '#',
	key: 'avatarUrl',
	type: 'AVATAR',
	cell: ({avatarUlr}) => avatarUlr
}, {
	name: 'First',
	type: 'TEXT',
	key: 'firstname',
	cell: ({firstname}) => firstname
}, {
	name: 'Last',
	key: 'lastname',
	type: 'TEXT',
	cell: ({lastname}) => lastname
}, {
	name: 'Email',
	key: 'email',
	type: 'TEXT',
	cell: ({email}) => email
}, {
	name:'Phone',
	key: 'phone',
	type: 'TEXT',
	cell: ({phone}) => phone
}, {
	name: 'Premiun',
	key: 'hasPremiun',
	type: 'ICON',
	cell: ({hasPremiun}) => hasPremiun
}, {
	name: '# Bids',
	key: 'bids',
	type: 'TEXT',
	cell: ({bids}) =>{
		return bids.length;
	}
}];

class MerchantTable extends Component {

	getHeader(){
		return(
			<thead>
				{COLUMNS.map(({name, key}) => <th key={key}>{name}</th>)}
			</thead>
		);
	}

	changePage(options){
		const { dispatch } = this.props;
		dispatch(getAllMerchants(options));
	}
    
	getCell({type, key, merchant, cell}){
		switch(type){
		case 'AVATAR': 
			return (<Imagen src={merchant[key]}/>);
		case 'TEXT':
			return <Cell>{cell(merchant)}</Cell>;
		case 'ICON':
			if(merchant[key]){
				return (<Cell><FaStar/></Cell>);
			}
			return (<Cell><FaSquareO/></Cell>);
		default: 
			return null;
		}
	}

	getBody(){
		const { merchants } = this.props;
		return (
			<tbody>
				{merchants.data.map(merchant => 
					<tr key={merchant.id}>
						{COLUMNS.map(
							({ key, type, cell}) => 
								<td key={key}>
									{this.getCell({
										key, 
										type,
										cell,
										merchant
									})}
									
								</td>
						)}
					</tr>
				)}
			</tbody>
		);
	}
    
	render(){
		const { merchants } = this.props;
		return (
			<Container>
				<Table>
					{this.getHeader()}
					{this.getBody()}
				</Table>
				<Paginator 
					{ 
					...Object.assign({},
						merchants,
						{
							onChange:(option) => this.changePage(option)
						}
					)}
				/>
			</Container>
		);
	}
}

MerchantTable.propTypes = {
	merchants: PropTypes.object,
	dispatch: PropTypes.func
};

export const mapStateToProps = (state) => ({
	merchants: state.merchants
});

export default connect(mapStateToProps)(MerchantTable);
