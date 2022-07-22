import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
export const GameDetails = ({ addGameComment, games }) => {

    const [comment, setComment] = useState({
        username: '',
        comment: ''
    });

    const { gameId } = useParams();

    const game = games.find(x => x._id === gameId);

    const inputHandler = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const addCommentHandler = (e) => {
        e.preventDefault();
        addGameComment(gameId, `${comment.username}: ${comment.comment}`)
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" alt="" src={game.imageUrl} />
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
                        {game.comments?.map(x =>
                            <li className="comment">
                                <p>{x}</p>
                            </li>
                        )
                        }

                        {!game.comments &&
                            < p className="no-comment">No comments.</p>
                        }
                </ul>
            </div>
            {/* Edit/Delete buttons ( Only for creator of this game )  */}
            <div className="buttons">
                <Link to={`/edit/${gameId}`} className="button">
                    Edit
                </Link>
                <Link to="Delete" className="button">
                    Delete
                </Link>
            </div>
        </div>
            {/* Bonus */ }
    {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */ }
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
        </section >
    );
}