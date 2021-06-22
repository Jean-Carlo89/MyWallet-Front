import {Link} from 'react-router-dom'
export default function Home(){
    return(
       <>
        <h1>katon</h1>

        <Link to="/sign-up">sign up</Link>
        <Link to="/home">home</Link>
    </>
    )
}