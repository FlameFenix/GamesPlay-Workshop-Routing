import { useState } from "react";
import { Link } from "react-router-dom";
import * as userService from '../../services/userService'

export const Register = () => {

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const registerHandler = (e) => {
        e.preventDefault();
        const password = formValues['password'];
        const confirmPassword = formValues['confirmPassword'];

        if (password !== confirmPassword) {
            return alert('Password and Confirm password are different')
        }

        const userData = { email: formValues.email, password: formValues.password };
        console.log(userData);
        userService.register(userData)
            .then(res => console.log(res));
    }

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={registerHandler}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={formValues.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={changeHandler}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        value="Register"
                    />
                    <p className="field">
                        <span>
                            If you already have profile click <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}