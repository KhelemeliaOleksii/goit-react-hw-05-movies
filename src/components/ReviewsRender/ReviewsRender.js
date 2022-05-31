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