import { messenger } from "utils/messenger"
import defaultUserImage from 'default-user-image.png'
import PropTypes from 'prop-types'
import styles from './CastRender.module.css'
const IMG_CONFIG = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w500'
}

/* function CastRender
do: render a cast list of a movie:
    -if cast available 
        <>image
        <>name
        <>character
     <-> "no info found"   
 */
export default function CastRender({ cast }) {
    const { base_url, size } = IMG_CONFIG;
    const imgBaseUrl = `${base_url}${size}`;
    if (cast.length === 0) {
        messenger.alertMessage('No info found')
    }
    return (
        <ul>
            {cast.map(({ id, imgPath, name, character, }) =>
                <li key={id}>
                    {!imgPath
                        ? <img src={defaultUserImage} alt={name} className={styles.img} />
                        : <img src={`${imgBaseUrl}${imgPath}`} alt={name} className={styles.img} />
                    }
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>)}
        </ul>
    )
}

CastRender.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            imgPath: PropTypes.string,
            name: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}