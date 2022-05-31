import CastRender from "components/CastRender";
import Loader from "components/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import themoviedbAPI from "services/themoviedbAPI/themoviedbAPI";
import { messenger } from "utils/messenger";

export default function Cast() {
    const { movieId } = useParams();
    // console.log("Cast movieId", movieId);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [actors, setActors] = useState();
    useEffect(() => {
        setStatus('pending');
        try {
            themoviedbAPI
                .fetchFilmCredits(movieId)
                .then(({ cast }) => {
                    console.log("Cast", cast);
                    setActors(mapper(cast));
                    setStatus('resolve');
                })

        } catch (error) {
            setError(error);
            setStatus('reject')
        }
    }, [])
    return (
        <>
            {status === 'pending' && <Loader />}
            {status === 'resolve' && <CastRender cast={actors} />}
            {status === 'reject' && messenger.errorMessage(error.msg)}
        </>
    )
}

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