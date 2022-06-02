import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import themoviedbAPI from "services/themoviedbAPI/themoviedbAPI";
import { messenger } from "utils/messenger";

import Loader from "components/Loader";
import ReviewsRender from "components/ReviewsRender";

/* function Reviews
do: fetch reviews of a movie
 */
export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(movieId)

        function fetch(movieId) {
            setStatus('pending');
            themoviedbAPI
                .fetchFilmReviews(movieId)
                .then(({ results }) => {
                    setReviews(results);
                    setStatus('resolve');
                })
                .catch((error) => {
                    setStatus('reject');
                    setError(error);
                })
        }
    }, [movieId])
    return (
        <>
            {status === 'pending' && <Loader />}
            {status === 'resolve' && <ReviewsRender reviews={reviews} />}
            {status === 'reject' && messenger.errorMessage('Something wrong. Try again', error)}
        </>
    )
}

