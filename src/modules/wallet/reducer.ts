import { AnyAction } from 'redux'
import {
  ConnectWalletFailureAction,
  ConnectWalletSuccessAction,
  CONNECT_WALLET_FAILURE,
  CONNECT_WALLET_REQUEST,
  CONNECT_WALLET_SUCCESS,
  TransferFailureAction,
  TRANSFER_FAILURE,
  TRANSFER_REQUEST,
} from './actions'
import { WalletState } from './types'

const INITIAL_STATE: WalletState = {
  address: null,
  balance: null,
  symbol: null,
  isConnecting: false,
  error: null,
}

export function walletReducer(
  state: WalletState = INITIAL_STATE,
  action: AnyAction
): WalletState {
  switch (action.type) {
    case CONNECT_WALLET_REQUEST: {
      return {
        ...state,
        isConnecting: true,
        error: null,
      }
    }
    case CONNECT_WALLET_SUCCESS: {
      const { address, balance, symbol } =
        action.payload as ConnectWalletSuccessAction['payload']
      return {
        ...state,
        isConnecting: false,
        address,
        balance,
        symbol,
        error: null,
      }
    }

    case CONNECT_WALLET_FAILURE: {
      const { error } = action.payload as ConnectWalletFailureAction['payload']
      return {
        ...state,
        isConnecting: false,
        error,
      }
    }

    case TRANSFER_REQUEST: {
      return {
        ...state,
        error: null,
      }
    }

    case TRANSFER_FAILURE: {
      const { error } = action.payload as TransferFailureAction['payload']
      return {
        ...state,
        error,
      }
    }

    default:
      return state
  }
}
