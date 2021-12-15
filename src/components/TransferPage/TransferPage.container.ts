import { connect } from 'react-redux'
import { connectWalletRequest, transferRequest } from '../../modules/wallet/actions'
import {
  getBalance,
  getError,
  isConnected,
  isConnecting,
} from '../../modules/wallet/selectors'
import { RootState } from '../../modules/types'
import { MapDispatch, MapDispatchProps, MapStateProps } from './TransferPage.types'
import TransferPage from './TransferPage'

const mapState = (state: RootState): MapStateProps => ({
  balance: getBalance(state),
  isConnected: isConnected(state),
  isConnecting: isConnecting(state),
  error: getError(state),
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onConnect: () => dispatch(connectWalletRequest()),
  onTransfer: (amount, address) => dispatch(transferRequest(amount, address)),
})

export default connect(mapState, mapDispatch)(TransferPage)
