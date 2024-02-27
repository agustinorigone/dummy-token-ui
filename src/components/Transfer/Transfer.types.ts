import { AnyAction, Dispatch } from "redux";
import { TransferRequestAction } from "../../modules/wallet/actions";

export type Props = {
  error: string | null;
  onTransfer: (amount: string, address: string) => void;
};

export type MapStateProps = Pick<Props, "error">;
export type MapDispatchProps = Pick<Props, "onTransfer">;
export type MapDispatch = Dispatch<TransferRequestAction | AnyAction>;
