import * as types from '../constants/ActionTypes';
import { merchants } from '../constants/merchants';

const receiveMerchants = merchants => ({
	type: types.RECEIVE_MERCHANTS,
	merchants
});

const addMerchantToList = merchant => ({
	type: types.ADD_TO_MERCHANT,
	merchant
});

const DEFAULT_PAGE_SIZE = 5;

this.merchants = merchants;

export const getAllMerchants = ({ page = 0, orderBy=  'id'}) => dispatch => {	
	/* eslint-disable */
	console.log(this.merchants);
	const merchanToFilter = Object.assign({}, {}, { data: this.merchants.data });
	const merchantsFiltered = Object.assign({}, {
		data: merchanToFilter.data.slice(page * DEFAULT_PAGE_SIZE, (page * DEFAULT_PAGE_SIZE) + DEFAULT_PAGE_SIZE),
		page,
		orderBy,
		pageSize: DEFAULT_PAGE_SIZE,
		size: this.merchants.data.length
	});
	console.log(this.merchants);
	console.log(merchanToFilter);
	console.log(merchantsFiltered);
	dispatch(receiveMerchants({ merchants: merchantsFiltered }));
};

export const addMerchant = ({merchant}) => dispatch => {	
	dispatch(addMerchantToList(merchant));
};

export default { getAllMerchants, addMerchant };
