function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);

    // Update DOM
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = formattedDate;
}

setInterval(updateClock, 1000); // Update every second
updateClock(); // Initialize clock immediately