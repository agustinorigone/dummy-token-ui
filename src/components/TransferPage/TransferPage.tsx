import React from 'react'
import {
  Button,
  Center,
  Field,
  Footer,
  Modal,
  Page,
} from 'decentraland-ui'
import { Props } from './TransferPage.types'

const TransferPage: React.FC<Props> = ({
  address,
  balance,
  isConnected,
  onConnect,
  isConnecting,
  error,
}) => {
  return (
    <>
      <Page className="TransferPage">
        <Center>
          {!isConnected ? (
            <>
              <Button primary onClick={onConnect} loading={isConnecting}>
                Connect
              </Button>
              {error ? <p className="error">{error}</p> : null}
            </>
          ) : (
            <Modal size="small" open={true}>
              <Modal.Header>Transfer</Modal.Header>
              <Modal.Content>
                <Field label="Amount" placeholder="10" />
                <Field label="Address" placeholder="0x" />
              </Modal.Content>
              <Modal.Actions>
                <Button primary>Transfer</Button>
              </Modal.Actions>
            </Modal>
          )}
        </Center>
      </Page>
      <Footer />
    </>
  )
}

export default TransferPage
