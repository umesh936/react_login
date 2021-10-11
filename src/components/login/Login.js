import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import { validateEmail, postData } from '../../utils/utils';
import { LoginPage, Form, Title } from './LoginElements';
import {storeUser} from "../../utils/localStore";
import {useState} from "react";


const Login = ({ toast }) => {
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
    const {register, handleSubmit, errors } = useForm();

    //Post phone number and proceeds to next page to verify otp
    const submitHandler = async () => {
       let  data  =  {
            username: username.value,
            password:password.value
        }
        console.log("daaaataaaaaaa : "+JSON.stringify(data))
        try {
            const response = await postData('POST', data, 'v1/emailer/auth/demo');
            if (response !== undefined) {

                storeUser(response.accessToken, response.clientId);
                history.push('/dashboard');
                toast.success('Logged In')
            }
        } catch (err) {
            history.push('/dashboard')
            toast.success(err.message);
        }
    }


    return (
        <LoginPage>
            <Title>
                <h1>Welcome to App!</h1>
            </Title>
            <div >
                <label>Email Id</label><br />
                <input type='text'
                       name='username'
                       autoFocus={true}
                       {...username}
                /><br />
                {errors.email && <p>{errors.email.message}</p>}<br />
                <label>Password</label><br />
                <input type='password'
                       name='password'
                       autoFocus={true}
                       {...password}
                /><br />
                {errors.password && <p>{errors.password.message}</p>}<br />
                <button onClick={submitHandler} >Login</button>
            </div>

            {/*<Form onSubmit={handleSubmit(submitHandler)}>*/}
            {/*    <label>Email Id</label><br />*/}
            {/*    <input type='text'*/}
            {/*           name='username'*/}
            {/*           autoFocus={true}*/}
            {/*    /><br />*/}
            {/*    {errors.email && <p>{errors.email.message}</p>}<br />*/}
            {/*    <label>Password</label><br />*/}
            {/*    /!*<input type='password'*!/*/}
            {/*    /!*       name='password'*!/*/}
            {/*    /!*       autoFocus={true}*!/*/}
            {/*    /!*      /><br />*!/*/}
            {/*    /!*{errors.password && <p>{errors.password.message}</p>}<br />*!/*/}
            {/*    <button onClick={}>Login</button>*/}
            {/*</Form>*/}
        </LoginPage>

    )


}

export default Login
