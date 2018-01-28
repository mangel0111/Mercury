import * as types from '../constants/ActionTypes';
import { fetchMerchants, postMerchant, putMerchant, deleteMerchant } from '../api/merchant';

const receiveMerchants = merchants => ({
	type: types.RECEIVE_MERCHANTS,
	merchants
});

export const getAllMerchants = ({ page = 0, orderBy }) => dispatch => {	
	const response = fetchMerchants({page, orderBy });
	if(!response.error){
		dispatch(receiveMerchants({ merchants: response.data }));
	}
};

export const addMerchant = ({merchant}) => dispatch => {	
	putMerchant({ merchant });
	dispatch(getAllMerchants({ page: 0 }));
};

export const removeMerchant = ({merchant}) => dispatch => {	
	deleteMerchant({ merchant });
	dispatch(getAllMerchants({ page: 0 }));
};

export const editMerchant = ({merchant}) => dispatch => {	
	postMerchant({ merchant });
	dispatch(getAllMerchants({ page: 0 }));
};
