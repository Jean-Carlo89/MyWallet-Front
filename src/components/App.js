/*--import de styled-components*/
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import GlobalStyle from '../GlobalStyles.js'

/*---Import de rotas--*/
import Login from './Login.js'
import SignUp from './Sign-up'
import Home from './Home.js'
import NewEntry from './Actions/NewEntry.js'
import newWithdraw from './Actions/NewWithdraw.js'
import NewWithdraw from './Actions/NewWithdraw.js'

export default function App(){
  return (
  <Router>
    <GlobalStyle/>
      <Switch>
        <Route path = "/" exact>
          <Login/>
        </Route>

        <Route path = "/sign-up" exact>
          <SignUp/>
        </Route>

        <Route path = "/home" exact>
          <Home/>
        </Route>


        <Route path = "/newEntry" exact>
          <NewEntry/>
        </Route>

        <Route path = "/newWithdraw" exact>
          <NewWithdraw/>
        </Route>


        
      </Switch>
   
  </Router>
  )
}
