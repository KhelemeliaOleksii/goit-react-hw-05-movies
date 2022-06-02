import CastRender from "components/CastRender";
import Loader from "components/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import themoviedbAPI from "services/themoviedbAPI/themoviedbAPI";
import { messenger } from "utils/messenger";

/* function Cast
do: fetch a cast of a movie
 */
export default function Cast() {
    const { movieId } = useParams();
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [actors, setActors] = useState();

    useEffect(() => {
        fetch(movieId);

        function fetch(movieId) {
            setStatus('pending');
            themoviedbAPI
                .fetchFilmCredits(movieId)
                .then(({ cast }) => {
                    setActors(mapper(cast));
                    setStatus('resolve');
                })
                .catch((error) => {
                    setError(error);
                    setStatus('reject')
                })
        }
    }, [movieId])
    return (
        <>
            {status === 'pending' && <Loader />}
            {status === 'resolve' && <CastRender cast={actors} />}
            {status === 'reject' && messenger.errorMessage(error.msg)}
        </>
    )
}

/* function mapper
do: create and return an array of objects with nessery properties
*/
function mapper(array) {
    return array.map(({ id, profile_path: imgPath, name, character }) => {
        return {
            id,
            imgPath,
            name,
            character,
        }
    })
}