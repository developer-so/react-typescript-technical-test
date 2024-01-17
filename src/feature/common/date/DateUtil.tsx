export function formatDate(timestamp: string) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = +now - +date;

    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) {
        return `${seconds} sec ago`;
    }

    const minutes = Math.floor(diff / 1000 / 60);
    if (minutes < 60) {
        return `${minutes} min ago`;
    }

    const hours = Math.floor(diff / 1000 / 60 / 60);
    if (hours < 24) {
        return `${hours} hr ago`;
    }

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    if (days < 30) {
        return `${days} days ago`;
    }

    const months = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
    if (months < 12) {
        return `${months} months ago`;
    }

    const years = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
    return `${years} years ago`;
}