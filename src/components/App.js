/*--import de styled-components*/
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import GlobalStyle from '../GlobalStyles.js'

/*---Import de rotas--*/
import Login from './Login.js'
import SignUp from './Sign-up'
import Home from './Home.js'
import NewTransaction from './Actions/NewTransaction.js'

import UserContext from './UserContext.js'
import {useState} from 'react'



export default function App(){

  const [user,setUser] = useState(localStorage.length !== 0 ? JSON.parse(localStorage.getItem('info')):[])
  
  return (
    <UserContext.Provider value={{user,setUser}}> 
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


              <Route path = "/newTransaction/:type" exact>
                <NewTransaction/>
              </Route>
            </Switch>
        </Router>
    </UserContext.Provider> 
  )
}
