import MovieGallary from "components/MovieGallary";
import Loader from "components/Loader";
import PageHeading from "components/PageHeading";
import { useEffect, useState } from "react"

import themoviedbAPI from "services/themoviedbAPI/themoviedbAPI";
import { mapper } from "utils/mapper";
import { messenger } from 'utils/messenger'

const STATUS = {
    idle: 'idle',
    resolve: 'resolve',
    reject: 'reject',
    pending: 'pending',
}

/* function MoviesPage
do: - request on trends movies
    - render gallary of trends movies 
use: useState() - save "movies" - result array of search request
                - save 'error' - error object if request return error
                - save 'status' - machine state of request procedure
out: - search form
    "pending" - Loader
    "resolve" - Gallary
    "reject" - Error
 */
export default function HomePage() {

    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.idle);
    const [error, setError] = useState(null);

    /* 
    do: only first rendering
     */
    useEffect(() => {
        fetchTrends();

        /* function fetchSearch
        do: - set status=pending
            - fetch
                <> set movies
                <> set status=resolve
            <-> if error
                <> set error
                <> set status=reject
        */
        function fetchTrends() {
            setStatus(STATUS.pending);
            themoviedbAPI
                .fetchTrendingMovies()
                .then(({ results, total_results: total }) => {
                    messenger.successMessage(`We found ${total} movies`);
                    setMovies(mapper(results));
                    setStatus(STATUS.resolve);
                })
                .catch((error) => {
                    setError(error);
                    setStatus(STATUS.reject);
                })
        }

    }, []);


    return (
        <>
            <PageHeading>Trending today</PageHeading>
            {status === STATUS.pending && <Loader />}
            {status === STATUS.resolve && <MovieGallary movies={movies} />}
            {status === STATUS.reject && messenger.errorMessage(error)};
        </>
    )
}

