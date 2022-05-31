export function mapper(hits) {
    return hits.map(item => ({
        id: item.id,
        title: item.title,
    })
    )
}