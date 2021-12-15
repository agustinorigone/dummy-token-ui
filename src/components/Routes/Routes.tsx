import { Switch, Route } from 'react-router-dom'

import { locations } from '../../modules/routing/locations'
import { TransferPage } from '../TransferPage'
import { App } from '../App'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={locations.transfer()} component={TransferPage} />
      <Route exact path={locations.root()} component={App} />
    </Switch>
  )
}

export default Routes