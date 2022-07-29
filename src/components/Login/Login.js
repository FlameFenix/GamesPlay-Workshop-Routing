import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext';

import * as userService from '../../services/userService'

export const Login = () => {
    const navigate = useNavigate();

    const { userLogin } = useContext(AuthContext);

    const loginHandler = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        userService.login({ email, password })
            .then(res => {
                userLogin(res)
                navigate('/catalogue')
            })
            .catch(err => {
                console.log(err);
                navigate('/404');
            });
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
                        placeholder="Sokka@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
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