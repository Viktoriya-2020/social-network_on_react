import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validator';
import { connect } from 'react-redux';
import {login, getAuth} from '../../Redux/auth-reduser'
import { Redirect } from 'react-router-dom';

 const maxLength30 = maxLengthCreator(30)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div><Field placeholder='email' name='email' component={Input} validate={[required, maxLength30]}/></div>
                <div><Field placeholder='password' name='password' component={Input} validate={[required, maxLength30]} /></div>
                <div><Field  component={Input} name={'rememberMe'} type={"checkbox"}/>remember me</div>
                <div><button>Login</button></div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
    
const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe);
       props.getAuth()
       
}


    return (
        <>
        {props.isAuth
         ? <Redirect to={'/profile'} />
        :<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>}
        </>
    )
}
let mapStateToProps = (state) => {
    return {
       isAuth: state.auth.isAuth,
     
    }
 }
export default connect(mapStateToProps, {login, getAuth})(Login);