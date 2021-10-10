import { Redirect, Route } from 'react-router-dom';
import {getToken, getId} from "../utils/localRetrieve";



const isAuthenticated = () => !!getToken() && !!getId();

const AuthRoute = ({ children, ...rest }) => {
    return (
        <Route {...rest} render={() => {
            return isAuthenticated() ? children
                : <Redirect to='/' />
        }} />
    )
}

export default AuthRoute
