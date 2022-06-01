import { Link, useLocation } from "react-router-dom"
import { messenger } from "utils/messenger";
import PropTypes from "prop-types"

export default function MovieGallary({ movies }) {
    const location = useLocation();

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
                                },
                            }}
                        >{title}</Link>
                    </li>
                )
            })}
        </ul >
    )
}

MovieGallary.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired
    )
}