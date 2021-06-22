/*--import de styled-components*/
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import GlobalStyle from '../GlobalStyles.js'

/*---Import de rotas--*/
import Login from './Login.js'
import SignUp from './Sign-up'
import Home from './Home.js'


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
      </Switch>
   
  </Router>
  )
}
