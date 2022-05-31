import FilmGallary from "components/FilmGallary";
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

export default function HomePage() {
    // const { idle, pending, resolve, reject } = STATUS;
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.idle);
    const [error, setError] = useState(null);
    // const [page, setPage] = useState(1);
    useEffect(() => {
        // setLoading(true);
        setStatus(STATUS.pending);
        try {
            console.log("Fetch Trends");
            themoviedbAPI
                .fetchTrendingMovies()
                .then(({ results, total_results: total }) => {
                    messenger.successMessage(`We found ${total} movies`);

                    setMovies(mapper(results));
                    setStatus(STATUS.resolve);
                })
        } catch (error) {
            setError(error);
            setStatus(STATUS.reject);
        }
    }, []);
    return (
        <>
            <PageHeading>Trending today</PageHeading>
            {status === STATUS.pending && <Loader />}
            {status === STATUS.resolve && <FilmGallary movies={movies} />}
            {status === STATUS.reject && messenger.errorMessage(error)};
        </>
    )
}