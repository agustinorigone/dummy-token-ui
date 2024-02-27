import React, { ChangeEvent, useState } from "react";
import { Button, Card, Center, Form, Input, Page } from "decentraland-ui";
import { Header } from "../Header";
import { Props } from "./Burn.types";
import "./Burn.css";
import { useSelector } from "react-redux";

const Transfer: React.FC<Props> = ({
  isConnected,
  isConnecting,
  onConnect,
  onBurn,
  error,
}) => {
  const [amount, setAmount] = useState("0");

  const handleSetAmount = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    //TODO: validate amount
    setAmount(value);
  };

  return (
    <>
      <Header />
      <Page className="Burn">
        <Center>
          {!isConnected ? (
            <>
              <Button primary onClick={onConnect} loading={isConnecting}>
                Connect
              </Button>
              {error ? <p className="error">{error}</p> : null}
            </>
          ) : (
            <Card>
              <Input
                type="text"
                name="amount"
                placeholder="0"
                value={amount}
                onChange={handleSetAmount}
              />
              <Form onSubmit={() => onBurn(amount)}>
                <Button type="submit">Burn</Button>
              </Form>
              {error ? <p className="error">{error}</p> : null}
            </Card>
          )}
        </Center>
      </Page>
    </>
  );
};

export default Transfer;
