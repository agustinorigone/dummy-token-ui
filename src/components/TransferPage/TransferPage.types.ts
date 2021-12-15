import { Dispatch } from 'redux'
import { transferRequest,
         TransferAction,
         ConnectWalletRequestAction
} from '../../modules/wallet/actions'

export type Props = {
  balance: string
  isConnected: boolean
  isConnecting: boolean
  error: string | null
  onTransfer: typeof transferRequest
  onConnect: () => void
}

export type MapStateProps = Pick<
  Props,
  'balance' | 'isConnected' | 'isConnecting' | 'error'
>
export type MapDispatchProps = Pick<Props, 'onConnect' | 'onTransfer'>
export type MapDispatch = Dispatch<ConnectWalletRequestAction | TransferAction>
