import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import * as gameService from '../../services/gameService'

export const GameDetails = ({ addGameComment }) => {

    const [game, setGame] = useState([]);

    const [comment, setComment] = useState({
        username: '',
        comment: ''
    });

    let params = useParams();

    useEffect(() => {
        gameService.getOne(params.gameId)
            .then(game => {
                setGame(game)
                console.log(game);
            })
    }, []);

    const inputHandler = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const addCommentHandler = (e) => {
        e.preventDefault();
        addGameComment(game._id, `${comment.username}: ${comment.comment}`)
        console.log(game._id, comment);
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for current game (If any) */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* Display paragraph: If there are no games in the database */}
                    <p className="no-comment">No comments.</p>
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link to={`/edit/${game._id}`} className="button">
                        Edit
                    </Link>
                    <a href="#" className="button">
                        Delete
                    </a>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={comment.username}
                        onChange={inputHandler}
                    />
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={comment.comment}
                        onChange={inputHandler}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
}