import { useState } from 'react';
import { Link } from 'react-router-dom'
import * as userService from '../../services/userService'

export const Login = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const loginHandler = (e) => {
        e.preventDefault();
        userService.login(formValues).then(res => console.log(res));
    }

    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={loginHandler}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={onChangeHandler}
                        placeholder="Sokka@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={onChangeHandler}
                    />

                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}