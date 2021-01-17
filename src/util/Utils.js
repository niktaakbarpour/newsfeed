export function formatDate(timeMillis) {
    const date = new Date(timeMillis)

    return `${date.toDateString()} ${date.toLocaleTimeString('en', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })}`
}

export function sortNewsByDate(news) {
    return news.sort((a, b) => b.dateMillies - a.dateMillies)
}

export function getBrief(text, limit) {
    if (text.length > limit) {
        return text.substring(0, limit) + "..."
    }
    return text
}