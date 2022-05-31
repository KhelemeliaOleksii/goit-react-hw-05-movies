import { useEffect, useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader';
import MovieCardRender from 'components/MovieCardRender';
import themoviedbAPI from 'services/themoviedbAPI/themoviedbAPI';
import { messenger } from 'utils/messenger';
import GoBackButton from 'components/GoBackButton';
// import styles from './MovieDetailsPage.module.css'


export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);
    // const navigate = useNavigate();
    const location = useLocation();
    const navigate = useNavigate();
    console.log("Movie details.location:", location);

    useEffect(() => {
        try {
            setStatus('pending');
            themoviedbAPI.fetchFilmDetails(movieId)
                .then(movieDataWrite)
                .then((movie) => {
                    setMovie(movie);
                    setStatus("resolve");
                });
        } catch (error) {
            setError(error);
            setStatus('reject');
        }
    }, [movieId])


    const GoBackHandler = () => {
        console.log("Go back");
        navigate(location?.state?.from?.location ?? '/')
        // вернуться на home або на movies
        // з касту або обзорів перехід на home або на movies (а не закривання касту)
    }

    return (
        <>
            {status === 'pending' && <Loader />}
            {status === 'resolve' &&
                <>
                    <GoBackButton onClickHandler={GoBackHandler} />
                    <MovieCardRender movie={movie} />
                </>}
            {status === 'reject' && messenger.errorMessage('Error')}

        </>
    )
}

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