import { useState } from "react";
import { useParams } from "react-router-dom";

export const EditGame = ({ games, editGameHandler }) => {

    const { gameId } = useParams();

    const game = games.find(x => x._id === gameId);

    const [values, setValues] = useState({
        _id: game._id,
        title: game.title,
        category: game.category,
        maxLevel: game.maxLevel,
        imageUrl: game.imageUrl,
        summary: game.summary,
        comments: game.comments
    });

    const valuesChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value

        }))
    }

    const editGame = (e) => {
        e.preventDefault();
        editGameHandler(game._id, values);
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={editGame}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={valuesChangeHandler} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={valuesChangeHandler} />
                    <label htmlFor="maxLevel">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        value={values.maxLevel}
                        onChange={valuesChangeHandler}
                    />
                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={valuesChangeHandler} />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={valuesChangeHandler} />
                    <input
                        className="btn submit"
                        type="submit"
                        value="Edit Game"
                    />
                </div>
            </form>
        </section>
    );
}