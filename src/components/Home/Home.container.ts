import { connect } from "react-redux";
import {
  getAddress,
  getBalance,
  getSymbol,
} from "../../modules/wallet/selectors";
import { RootState } from "../../modules/types";
import { MapStateProps } from "./Home.types";
import Home from "./Home";

const mapState = (state: RootState): MapStateProps => ({
  address: getAddress(state),
  balance: getBalance(state),
  symbol: getSymbol(state),
});

export default connect(mapState)(Home);
