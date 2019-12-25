import { connect } from 'react-redux';

import HeaderComponent from '../components/Header';

const mapStateToProps = state => {
	return {
		cart: state.cart,
		wishlist: state.wishlist,
	};
};

const Header = connect(mapStateToProps, null)(HeaderComponent);

export default Header;
