import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/Button';
import FaStar from 'react-icons/lib/fa/star';
import FaSquareO from 'react-icons/lib/fa/square-o';
import Paginator from '../components/Paginator';
import ManageMerchant from './ManageMerchant';
import { getAllMerchants, removeMerchant, editMerchant } from '../actions/index';


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

const Toolbar = styled.div`
    display: inline;

    button {
        margin-right: 10px;
    }
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
	sortable: true,
	key: 'firstname',
	cell: ({firstname}) => firstname
}, {
	name: 'Last',
	key: 'lastname',
	sortable: true,
	type: 'TEXT',
	cell: ({lastname}) => lastname
}, {
	name: 'Email',
	key: 'email',
	sortable: true,
	type: 'TEXT',
	cell: ({email}) => email
}, {
	name:'Phone',
	key: 'phone',
	sortable: true,
	type: 'TEXT',
	cell: ({phone}) => phone
}, {
	name: 'Premiun',
	key: 'hasPremiun',
	sortable: true,
	type: 'ICON',
	cell: ({hasPremiun}) => hasPremiun
}, {
	name: '# Bids',
	key: 'bids',
	sortable: true,
	type: 'TEXT',
	cell: ({bids}) =>{
		return bids.length;
	}
}, {
	name: '',
	key: 'actions',
	type: 'ACTION',
	cell: () =>{
		return '';
	}
}];

class MerchantTable extends Component {

	constructor (props){
		super(props);
		this.state = {
			editMerchant: false,
			merchant: undefined
		};
	}

	getHeader(){
		return(
			<thead>
				{COLUMNS.map(({name, key, sortable}) => 
					<th key={key}
						onClick={
							() => {
								const { dispatch } = this.props;
								if(sortable) {
									dispatch(getAllMerchants({
										orderBy: key
									}));
								}
							}
						}
					>
						{name}
					</th>)}
			</thead>
		);
	}

	changePage(options){
		const { dispatch } = this.props;
		dispatch(getAllMerchants(options));
	}

	createEditModal({ merchant }){
		if(!merchant){
			return null;
		}
		return (
			<ManageMerchant
				action={editMerchant}
				saveAction="Edit"
				merchant={merchant}
				contentLabel="Edit Merchant"
				description="Here you can edit this merchant"
				onRequestClose={() => this.setState({
					editMerchant: false
				})}
			/>
		);
	}
    
	getCell({type, key, merchant, cell}){
		switch(type){
		case 'AVATAR': 
			return (<Imagen src={merchant[key]}/>);
		case 'TEXT':
			return <Cell>{cell(merchant)}</Cell>;
		case 'ACTION':
			return (
				<Cell>
					<Toolbar>
						<Button
							label={'Edit'}
							type="PRIMARY"
							onClick={()=> {
								this.setState({ 
									editMerchant: true,
									merchant
								});
							}}
						/>
						<Button
							label={'Delete'}
							type="DANGER"
							onClick={()=> {
								const { dispatch }= this.props;
								dispatch(removeMerchant({ merchant }));
							}}
						/>
					</Toolbar>
				</Cell>
			) ;
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
		const { editMerchant, merchant } = this.state;
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
				{editMerchant && this.createEditModal({ merchant })}
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
