import { useEffect, useState } from "react";

import FilmGallary from "components/FilmGallary";
import SearchBarFilm from "components/SearchBarFilm";
import Loader from "components/Loader";

import themoviedbAPI from "services/themoviedbAPI/themoviedbAPI";
import { mapper } from "utils/mapper";
import { messenger } from "utils/messenger";

const STATUS = {
    idle: 'idle',
    resolve: 'resolve',
    reject: 'reject',
    pending: 'pending',
}

export default function MoviesPage() {
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(STATUS.idle);
    const [page, setPage] = useState(1);
    const [isFirstMounting, setIsFirstMounting] = useState(true);

    useEffect(() => {
        if (isFirstMounting) {
            setIsFirstMounting(false);
            return;
        }

        if (searchValue === '') {
            setMovies([]);
            messenger.alertMessage('There is no movies')
            return;
        }

        try {
            themoviedbAPI
                .fetchByName(searchValue, page)
                .then(({ results, total_results }) => {
                    setMovies((prev) => [...prev, ...mapper(results)])
                    setStatus(STATUS.resolve);
                    messenger.successMessage(`${total_results} movies have been found`)
                })

        } catch (error) {
            setStatus(STATUS.reject);
            setError(error);
        }
    }, [searchValue, page, isFirstMounting])
    const submitSearchForm = (value) => {
        setSearchValue(value);
        setPage(1);
        setMovies([]);
        setStatus(STATUS.idle);
    }

    return (
        <>
            <SearchBarFilm onSubmitFormHandler={submitSearchForm} />
            {status === STATUS.pending && <Loader />}
            {status === STATUS.resolve && <FilmGallary movies={movies} />}
            {status === STATUS.reject && messenger.errorMessage(error)}
        </>
    )
}