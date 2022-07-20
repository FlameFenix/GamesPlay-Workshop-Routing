import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EditGame = ({ games }) => {

    const [values, setValues] = useState({
    });

    const params = useParams();

    const game = games.find(x => x._id === params.gameId);

    useEffect(() => {
        setValues(state => ({
            ...state,
            title: game.title,
            category: game.category,
            imageUrl: game.imageUrl,
            maxLevel: game.maxLevel,
            summary: game.summary
        }))
    }, [])

    const valuesChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value

        }))
    }

    const editGameHandler = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={editGameHandler}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={valuesChangeHandler} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={valuesChangeHandler} />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        value={game.maxLevel}
                        onChange={valuesChangeHandler}
                    />
                    <label htmlFor="game-img">Image:</label>
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