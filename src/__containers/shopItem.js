import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shopActions from '../__actions/shopActions';

import ShopItemComponent from '../components/ShopItem';

const mapStateToProps = state => {
	return {
		cart: state.cart,
		wishList: state.wishList
	};
};

const mapDispatchToProps = dispatch => {
	return {
		shopActions: bindActionCreators(shopActions, dispatch),
	};
};

const ShopItem = connect(mapStateToProps, mapDispatchToProps)(ShopItemComponent);

export default ShopItem;
