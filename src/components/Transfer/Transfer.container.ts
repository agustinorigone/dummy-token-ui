import { connect } from "react-redux";
import { transferRequest } from "../../modules/wallet/actions";
import { getError } from "../../modules/wallet/selectors";
import { RootState } from "../../modules/types";
import { MapDispatch, MapDispatchProps, MapStateProps } from "./Transfer.types";
import Transfer from "./Transfer";

const mapState = (state: RootState): MapStateProps => ({
  error: getError(state),
});

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onTransfer: (amount: string, address: string) =>
    dispatch(transferRequest(amount, address)),
});

export default connect(mapState, mapDispatch)(Transfer);
