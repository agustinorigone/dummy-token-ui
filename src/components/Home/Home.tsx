import React from "react";
import { Button, Card, Center, Footer, Page } from "decentraland-ui";
import { Props } from "./Home.types";
import { Header } from "../Header";

import "./Home.css";

const App: React.FC<Props> = ({ address, balance, symbol }) => {
  return (
    <>
      <Header />
      <Page className="Home">
        <Center>
          <Card>
            <p>
              <strong>Address:</strong>&nbsp;
              {address.slice(0, 6) + "..." + address.slice(-4)}
            </p>
            <p>
              <strong>Balance:</strong>&nbsp;
              {balance + " " + symbol + " "}
            </p>
          </Card>
        </Center>
      </Page>
      <Footer />
    </>
  );
};

export default App;
