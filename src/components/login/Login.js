import "./login.css";
import 'bootstrap3/dist/css/bootstrap.min.css';
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom';
import {LoginPage, Title} from './LoginElements';
import {storeUser} from "../../utils/localStore";
import {useState} from "react";
import {postData} from "../../utils/utils";


const Login = ({toast}) => {
    const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);

        const handleChange = e => {
            setValue(e.target.value);
        }
        return {
            value,
            onChange: handleChange
        }
    }
    const history = useHistory();
    const username = useFormInput('');
    const password = useFormInput('');
    const {register, handleSubmit, errors} = useForm();

    //Post phone number and proceeds to next page to verify otp
    const submitHandler = async () => {
        let data = {
            username: username.value,
            password: password.value
        }
        try {
            const response = await postData('POST', data, 'v1/emailer/auth/');
            if (response !== undefined) {

                storeUser(response.accessToken, response.clientId);
                history.push('/dashboard');
                toast.success('Logged In')
            }
        } catch (err) {
            history.push('/dashboard')
            console.log(err.message)
            toast.success(err.message);
        }
    }


    return (
        <LoginPage>
            <Title>
                <h1>Welcome to App!</h1>
            </Title>
            <div>
                <div>
                    <label>Email Id</label><br/>
                    <input type='text'
                           name='username'
                           className="form-control"
                           autoFocus={true}
                           {...username}
                    /><br/>
                    {errors.email && <p>{errors.email.message}</p>}<br/>
                    <label>Password</label><br/>
                    <input type='password'
                           name='password'
                           className="form-control"
                           autoFocus={true}
                           {...password}
                    /><br/>
                    {errors.password && <p>{errors.password.message}</p>}<br/>
                    <button className="btn btn-lg btn-primary btn-block btn-signin" onClick={submitHandler}>Login
                    </button>
                </div>
            </div>
        </LoginPage>
    )
}

export default Login
