import { Link } from 'react-router-dom'

export const Header = ({ email }) => {

    return (
        <header>
            {/* Navigation */}
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to="catalogue">All games</Link>
                {/* Logged-in users */}
                {email &&
                    <div id="user">
                        <Link to="create">Create Game</Link>
                        <Link to="logout">Logout</Link>
                    </div>
                }

                {/* Guest users */}
                {!email &&
                    <div id="guest">
                        <Link to="login">Login</Link>
                        <Link to="register">Register</Link>
                    </div>
                }
            </nav>
        </header>
    );
}