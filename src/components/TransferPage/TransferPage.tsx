import React, { useState } from 'react'
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
  balance,
  isConnected,
  onConnect,
  isConnecting,
  onTransfer,
  error,
}) => {
  
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [isInvalidAmount, setIsInvalidAmount] = useState(false)
  const [isInvalidAddress, setIsInvalidAddress] = useState(false)
  
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
                <Field
                  label="Amount"
                  type="text"
                  error={isInvalidAmount && amount !== ''}
                  message={
                    isInvalidAmount && amount !== ''
                      ? "Invalid Amount"
                      : undefined
                  }
                  value={amount}
                  placeholder="10"
                  onChange={(_event, props) => {
                    setAmount(props.value)
                    setIsInvalidAmount(parseInt(props.value) > parseInt(balance.toString()))
                  }}
                />
                <Field
                  label="Address"
                  type="address"
                  error={isInvalidAddress && address !== ''}
                  message={
                    isInvalidAddress && address !== ''
                      ? "Invalid Address"
                      : undefined
                  }
                  value={address}
                  placeholder="0x..."
                  onChange={(_event, props) => {
                    setAddress(props.value)
                    const isValid =
                      !props.value ||
                      /^0x[a-fA-F0-9]{40}$/g.test(props.value)
                    setIsInvalidAddress(!isValid)
                  }}
                />
              </Modal.Content>
              <Modal.Actions>
                <Button primary
                  onClick={() => onTransfer(amount, address)}
                  disabled={isInvalidAddress || isInvalidAmount || address === '' || amount === ''}
                >
                  Transfer
                </Button>
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
