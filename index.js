function timeAgo2(date) {
    const seconds = Math.floor((+new Date() - +new Date(date)) / 1000);

    let interval = seconds / 86400;

    if (interval > 7) {
        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const parsed = new Date(date);
        if (parsed.getFullYear() !== new Date(Date.now()).getFullYear()) {
            return month[parsed.getMonth()] + " " + parsed.getDate() + ", " + parsed.getFullYear();
        }
        return month[parsed.getMonth()] + " " + parsed.getDate();
    }
    if (interval > 1) {
        return Math.floor(interval) + "d";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + "h";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + "m";
    }
    return Math.floor(seconds) + "s";
}

module.exports = timeAgo2