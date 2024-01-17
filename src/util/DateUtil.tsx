export function formatDate(timestamp: string) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = +now - +date;

    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) {
        return `${seconds} seconds ago`;
    }

    const minutes = Math.floor(diff / 1000 / 60);
    if (minutes < 60) {
        return `${minutes} minutes ago`;
    }

    const hours = Math.floor(diff / 1000 / 60 / 60);
    if (hours < 24) {
        return `${hours} hours ago`;
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

// function MyComponent() {
//     const timestamp = new Date('2023-01-12 00:00:00 GMT+03:00').getTime();
//     const formattedDate = formatDate(timestamp);
//     return (
//         <div>
//             {formattedDate}
//         </div>
//     );
// }
