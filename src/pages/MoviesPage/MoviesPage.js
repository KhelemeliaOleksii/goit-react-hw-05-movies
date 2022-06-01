
import { useEffect, useState } from "react";

import MovieGallary from "components/MovieGallary";
import SearchBarFilm from "components/SearchBarFilm";
import Loader from "components/Loader";

import themoviedbAPI from "services/themoviedbAPI/themoviedbAPI";
import { mapper } from "utils/mapper";
import { messenger } from "utils/messenger";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

// machine state
const STATUS = {
    idle: 'idle',
    resolve: 'resolve',
    reject: 'reject',
    pending: 'pending',
}

/* function MoviesPage
do: - render search form
    - save "searchValue" to url as search parameter
        "query=searchValue"
    - if "query" is present do request with "searchValue"
        else return
    - render result of 
use: useState() - save "movies" - result array of search request
                - save 'error' - error object if request return error
                - save 'status' - machine state of request procedure
    useLocation() - get current url location
    useNavigate() - refresh url for search parameter
    URLSearchParams() - get search parameter 
    createSearchParams().toString() - produce string type: query=searchValue 
out: - search form
    "pending" - Loader
    "resolve" - Gallary
    "reject" - Error
 */
export default function MoviesPage() {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(STATUS.idle);

    const location = useLocation();
    const navigate = useNavigate();

    const searchValue = new URLSearchParams(location.search).get('query') ?? '';

    /* 
    dp: - searchValue
        - page
    do: - if "searchValue" empty - early return
        - fetch 
    */
    useEffect(() => {
        if (searchValue === "") {
            return;
        }

        fetchSearch(searchValue);

        /* function fetchSearch
        in: - search value
        do: - set status=pending
            - fetch
                <> set movies
                <> set status=resolve
            <-> if error
                <> set error
                <> set status=reject
        */
        function fetchSearch(value) {
            setStatus(STATUS.pending);
            themoviedbAPI
                .fetchByName(searchValue)
                .then(({ results }) => {
                    setMovies((prev) => [...prev, ...mapper(results)])
                    setStatus(STATUS.resolve);
                })
                .catch(error => {
                    setStatus(STATUS.reject);
                    setError(error);
                })
        }
    }, [searchValue])


    /* function configSearchParams
        in: - value - search value
        do: - create search parameters to url
            - set search parameter to current url
    */
    const configSearchParams = (value) => {
        const seachParam = {
            query: value.toLowerCase(),
        };
        navigate({
            ...location,
            search: createSearchParams(seachParam).toString(),
        });
    }

    /* function resetStates
    do: reset to initial state
     */
    const resetStates = () => {
        setMovies([]);
        setStatus(STATUS.idle);
        setError(null);
    }

    /*function submitSearchForm
    in: -value- search parameter
    do: - if search parameter is empty early return
        - reset to initial state
        - configure search parameter into url
          */
    const submitSearchForm = (value) => {
        if (value.trim() === '') {
            messenger.alertMessage('Input valid value')
            return;
        }
        resetStates();
        configSearchParams(value);
    }

    return (
        <>
            <SearchBarFilm onSubmitFormHandler={submitSearchForm} />
            {status === STATUS.pending && <Loader />}
            {status === STATUS.resolve && <MovieGallary movies={movies} />}
            {status === STATUS.reject && messenger.errorMessage(error)}
        </>
    )
}