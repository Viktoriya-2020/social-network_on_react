import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validator';
 const maxLength10 = maxLengthCreator(10)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div><Field placeholder='login' name='login' component={Input} validate={[required, maxLength10]}/></div>
                <div><Field placeholder='password' name='password' component={Input} validate={[required, maxLength10]} /></div>
                <div><Field  component={Input} name={'rememberMe'} type={"checkbox"}/>remember me</div>
                <div><button>Login</button></div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
    const onSubmit = (formData) => {
            console.log(formData)
    }
const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;