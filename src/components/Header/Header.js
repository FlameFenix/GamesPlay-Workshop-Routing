import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom'

export const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <header>
            {/* Navigation */}
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                
            <span style={{color: "#fff", marginRight: "10px"}}> {user.email || ''} </span>

                <Link to="catalogue">All games</Link>
                {/* Logged-in users */}
                {user.email &&
                    <div id="user">
                        <Link to="create">Create Game</Link>
                        <Link to="logout">Logout</Link>
                    </div>
                }

                {/* Guest users */}
                {!user.email &&
                    <div id="guest">
                        <Link to="login">Login</Link>
                        <Link to="register">Register</Link>
                    </div>
                }
            </nav>
        </header>
    );
}