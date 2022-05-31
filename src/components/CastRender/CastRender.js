import { messenger } from "utils/messenger"
import defaultUserImage from 'default-user-image.png'

const IMG_CONFIG = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w500'
}
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
                        ? <img src={defaultUserImage} alt={name} />
                        : <img src={`${imgBaseUrl}${imgPath}`} alt={name} />
                    }
                    <p>{name}</p>
                    <p>{character}</p>
                </li>)}
        </ul>
    )
}