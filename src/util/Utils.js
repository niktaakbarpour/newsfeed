export function formatDate(timeMillis) {
    const date = new Date(timeMillis)

    return `${date.toDateString()} ${date.toLocaleTimeString('en', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })}`
}