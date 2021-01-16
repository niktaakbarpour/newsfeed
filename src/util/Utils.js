export function formatDate(time) {
    const date = new Date(time)

    return `${date.toDateString()} ${date.toLocaleTimeString('en', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })}`
}

export function sortNewsByDate(news) {
    return news.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
}