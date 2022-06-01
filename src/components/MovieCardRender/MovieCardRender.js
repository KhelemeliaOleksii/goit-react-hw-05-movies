import { NavLink, Outlet, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './MovieCardRender.module.css'
import defaultMovieImage from 'default-movie-image.jpg'

const IMG_CONFIG = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w500'
}
export default function MovieCardRender({ movie, fromLocation }) {
    const { id, backdrop_path, title, release_date, popularity, overview, genres } = movie;
    const { base_url, size } = IMG_CONFIG;
    const imgPath = `${base_url}${size}${backdrop_path}`;

    return (
        <>
            <div className={styles['card__info--general']}>
                <div className={styles['img__wrapper']}>
                    {/* <img src={imgPath} alt={title} /> */}
                    {!backdrop_path
                        ? <img src={defaultMovieImage} alt={title} />
                        : <img src={`${imgPath}`} alt={title} />
                    }

                </div>
                <div className={styles['details__wrapper']}>
                    <h2 >
                        <span>{title}</span>
                        <span>({getRelizeYear(release_date)})</span>
                    </h2>
                    <p> User score: {getUserScore(popularity)} %</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h4>Genres</h4>
                    <p>{getGenresNames(genres)}</p>

                </div>
            </div>
            <div className={styles['card__info--additional']}>
                <h5>Additional information</h5>
                <ul>
                    <li>
                        <NavLink
                            to={`/movies/${id}/cast`}
                            state={{
                                from: fromLocation
                            }}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/movies/${id}/reviews`}
                            state={{
                                from: fromLocation
                            }}>Reviews</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

MovieCardRender.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        backdrop_path: PropTypes.string,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired).isRequired,
    }).isRequired,
    fromLocation: PropTypes.shape({
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired,
            search: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired
}

function getRelizeYear(date) {
    const today = new Date(date);
    return today.getFullYear();
}
function getUserScore(data) {
    return Math.round(data);
}
function getGenresNames(data) {
    return data.map(({ name }) => name).join(', ');
}

