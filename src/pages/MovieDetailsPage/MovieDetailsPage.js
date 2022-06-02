import { useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import Loader from 'components/Loader';
import MovieCardRender from 'components/MovieCardRender';
import GoBackButton from 'components/GoBackButton';

import themoviedbAPI from 'services/themoviedbAPI/themoviedbAPI';
import { messenger } from 'utils/messenger';
// import styles from './MovieDetailsPage.module.css'

const DEFAULT_LOCATION_STATE = {
    location: {
        pathname: '/',
        search: '',
    }

}
export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);

    const location = useLocation();
    const fromLocation = location?.state?.from ?? DEFAULT_LOCATION_STATE;

    const navigate = useNavigate();

    /* 
    do: fetch by id
     */
    useEffect(() => {
        fetchDetails(movieId);

        /* function fetchDetails
        do: - set status=pending
            - fetch
                <> set movies
                <> set status=resolve
            <-> if error
                <> set error
                <> set status=reject
        */
        function fetchDetails(movieId) {
            setStatus('pending');
            themoviedbAPI.fetchFilmDetails(movieId)
                .then(movieDataWrite)
                .then((movie) => {
                    setMovie(movie);
                    setStatus("resolve");
                })
                .catch((error) => {
                    setError(error);
                    setStatus('reject');
                })
        }
    }, [movieId])

    /* function GoBackHandler
    do: navigate to custom url
     */
    const GoBackHandler = () => {
        navigate(fromLocation.location);
        // вернуться на home або на movies
        // з касту або обзорів перехід на home або на movies (а не закривання касту)
        // перехід на movies (повернути пошукове поле)
    }

    return (
        <>
            {status === 'pending' && <Loader />}
            {status === 'resolve' &&
                <>
                    <GoBackButton onClickHandler={GoBackHandler} />
                    <MovieCardRender movie={movie} fromLocation={fromLocation} />
                </>}
            {status === 'reject' && messenger.errorMessage('Error', error)}

        </>
    )
}

/* function movieDataWrite
in: - "response" of fetch
do: - destruction of "response" object
    - set "movie" object properties
out:- movie    
 */
function movieDataWrite(response) {
    const { id, backdrop_path, title, release_date, popularity, overview, genres } = response;
    const movie = {
        id,
        backdrop_path,
        title,
        release_date,
        popularity,
        overview,
        genres
    }
    return movie;
}