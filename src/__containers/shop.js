import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as beerActions from '../__actions/beerActions'
import * as shopActions from '../__actions/shopActions'

import ShopComponent from '../components/Shop'

const mapStateToProps = (state) => {
  return {
    beers: state.beers.beers.beers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    beerActions: bindActionCreators(beerActions, dispatch),
    shopActions: bindActionCreators(shopActions, dispatch),
  }
}

const Shop = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopComponent)

export default Shop