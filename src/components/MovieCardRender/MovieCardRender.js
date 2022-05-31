import { NavLink, Outlet } from 'react-router-dom'
import styles from './MovieCardRender.module.css'
const IMG_CONFIG = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w500'
}
export default function MovieCardRender({ movie }) {
    const { id, backdrop_path, title, release_date, popularity, overview, genres } = movie;
    const { base_url, size } = IMG_CONFIG;
    const imgUrl = `${base_url}${size}${backdrop_path}`;
    return (
        <>
            <div className={styles['card__info--general']}>
                <div className={styles['img__wrapper']}>
                    <img src={imgUrl} alt={title} />
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
                        <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
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