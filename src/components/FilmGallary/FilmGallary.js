import { Link, useLocation } from "react-router-dom"
import { messenger } from "utils/messenger";

export default function FilmGallary({ movies }) {
    const location = useLocation();
    console.log("FilmGallary.location:", location);
    if (movies.length === 0) {
        messenger.alertMessage('No film found');
        return;
    }
    return (
        <ul>
            {movies.map(({ id, title }) => {
                return (
                    <li key={id}>
                        <Link
                            to={`/movies/${id}`}
                            state={{
                                from: {
                                    location,
                                    label: 'Home'
                                },
                            }}
                        >{title}</Link>
                    </li>
                )
            })}
        </ul >
    )
}