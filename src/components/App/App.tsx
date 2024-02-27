import React from "react";
import { Button, Center, Page } from "decentraland-ui";
import { Props } from "./App.types";

import "./App.css";

const App: React.FC<Props> = ({
  isConnected,
  onConnect,
  isConnecting,
  error,
  children,
}) => {
  return (
    <>
      <Page className="App">
        <Center>
          {!isConnected ? (
            <>
              <Button primary onClick={onConnect} loading={isConnecting}>
                Connect
              </Button>
              {error ? <p className="error">{error}</p> : null}
            </>
          ) : (
            children
          )}
        </Center>
      </Page>
    </>
  );
};

export default App;
