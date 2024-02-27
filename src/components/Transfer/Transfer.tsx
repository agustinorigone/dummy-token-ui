import React, { ChangeEvent, useState } from "react";
import {
  Button,
  Card,
  Center,
  Footer,
  Form,
  Input,
  Page,
} from "decentraland-ui";
import "./Transfer.css";
import { Header } from "../Header";

import { Props } from "./Transfer.types";
const Transfer: React.FC<Props> = ({ onTransfer, error }) => {
  const [amount, setAmount] = useState<string>("0");
  const [address, setAddress] = useState<string>("");

  const handleSetAmount = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    //TODO: validate amount
    setAmount(value);
  };

  const handleSetAddress = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    //TODO: validate address
    setAddress(value);
  };

  return (
    <>
      <Header />
      <Page className="Transfer">
        <Center>
          <Card>
            <Input
              type="text"
              name="amount"
              placeholder="0"
              value={amount}
              onChange={handleSetAmount}
            />
            <Input
              type="text"
              name="address"
              placeholder="0x..."
              value={address}
              onChange={handleSetAddress}
            />
            <Form onSubmit={() => onTransfer(amount, address)}>
              <Button type="submit">Transfer</Button>
            </Form>
            {error ? <p className="error">{error}</p> : null}
          </Card>
        </Center>
      </Page>
      <Footer />
    </>
  );
};

export default Transfer;
