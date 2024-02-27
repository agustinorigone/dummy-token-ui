export type Props = {
  address: string;
  balance: string;
  symbol: string;
};

export type MapStateProps = Pick<Props, "address" | "balance" | "symbol">;
