// Connect Wallet
export const CONNECT_WALLET_REQUEST = '[Request] Connect Wallet'
export const CONNECT_WALLET_SUCCESS = '[Success] Connect Wallet'
export const CONNECT_WALLET_FAILURE = '[Failure] Connect Wallet'
export const TRANSFER_REQUEST = '[Request] Transfer'
export const TRANSFER_FAILURE = '[Failure] Transfer'

export function connectWalletRequest() {
  return {
    type: CONNECT_WALLET_REQUEST,
    payload: {},
  }
}

export function connectWalletSuccess(address: string, balance: string, symbol: string) {
  return {
    type: CONNECT_WALLET_SUCCESS,
    payload: {
      address,
      balance,
      symbol,
    },
  }
}

export function connectWalletFailure(error: string) {
  return {
    type: CONNECT_WALLET_FAILURE,
    payload: {
      error,
    },
  }
}

export function transferRequest(amount: string, address: string) {
  return {
    type: TRANSFER_REQUEST,
    payload: { 
      amount,
      address,
    },
  }
}

export function transferFailure(error: string) {
  return {
    type: TRANSFER_FAILURE,
    payload: {
      error,
    },
  }
}

export type ConnectWalletRequestAction = ReturnType<typeof connectWalletRequest>
export type ConnectWalletSuccessAction = ReturnType<typeof connectWalletSuccess>
export type ConnectWalletFailureAction = ReturnType<typeof connectWalletFailure>
export type TransferAction = ReturnType<typeof transferRequest>
export type TransferFailureAction = ReturnType<typeof transferFailure>
