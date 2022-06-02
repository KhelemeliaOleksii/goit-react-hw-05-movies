import PropTypes from 'prop-types'

/* function ReviewsRender
do: render a reviews list of a movie
    - if reviews available
        <>author
        <>review
        <>date
    <-> "We don't have any review for this movie"
  */
export default function ReviewsRender({ reviews }) {
    if (reviews.length === 0) {
        return <div>We don't have any review for this movie</div>
    }
    return (
        <ul>
            {
                reviews.map(({ author, content, created_at }) => {
                    return (
                        <li key={`${author}${created_at}`}>
                            <h5>
                                <span>{author}</span>
                            </h5>
                            <p>{content}</p>
                            <span> created at: {created_at}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

ReviewsRender.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created_at: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}