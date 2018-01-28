import { merchants } from '../constants/merchants';

const DEFAULT_PAGE_SIZE = 5;
this.merchants = merchants;
this.orderBy = 'id';

///////////////////////////////
//// Mocked APIs //////////////
///////////////////////////////

export const fetchMerchants = ({ orderBy, page }) => {
	const merchanToFilter = Object.assign({}, {}, { data: this.merchants.data });
	
	let sortParam = this.orderBy;
	if(orderBy){
		this.orderBy = orderBy;
		sortParam = orderBy;
	} 

	merchanToFilter.data.sort(function(previousMerchant, postMerchant ) {
		if(sortParam === 'bids') {
			return  postMerchant[sortParam].length - previousMerchant[sortParam].length;
		}
		if(previousMerchant[sortParam] < postMerchant[sortParam]) return -1;
		if(previousMerchant[sortParam] > postMerchant[sortParam]) return 1;
		return 0;
	});
	
	const merchantsFiltered = Object.assign({}, {
		data: merchanToFilter.data.slice(page * DEFAULT_PAGE_SIZE, (page * DEFAULT_PAGE_SIZE) + DEFAULT_PAGE_SIZE),
		page,
		orderBy,
		pageSize: DEFAULT_PAGE_SIZE,
		size: this.merchants.data.length
	});
	return {
		error: false,
		data: merchantsFiltered
	};
};

export const putMerchant = ({merchant}) => {	
	// This is not the best way, but we don't have a DB to persist info and we cann't generate IDs
	merchant.id = ++this.merchants.data.length;
	this.merchants.data.push(merchant);
	return { error: false };
};

export const deleteMerchant = ({merchant}) => {	
	this.merchants.data = this.merchants.data.filter(({ id }) => merchant.id !== id );
	return { error: false };
};

export const postMerchant = ({merchant}) => {	
	const merchanthFinded = this.merchants.data.filter(({ id }) => merchant.id === id );
	merchanthFinded.forEach((merchantToEdit, index, merchants) => merchants[index] = merchant);
	return { error: false };
};
