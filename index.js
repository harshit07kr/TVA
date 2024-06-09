let selectedTimezone = 'Asia/Kolkata'; // Default time zone

function getFormattedDate(timezone) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: timezone };
    return today.toLocaleDateString('en-US', options);
}

function getFormattedTime(timezone) {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: timezone };
    return now.toLocaleTimeString('en-US', options);
}

function updateDateTime() {
    document.getElementById('date').innerText = getFormattedDate(selectedTimezone);
    document.getElementById('time').innerText = getFormattedTime(selectedTimezone);
}

document.addEventListener('DOMContentLoaded', () => {
    updateDateTime(); // Initialize with default timezone

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            selectedTimezone = event.target.getAttribute('data-timezone');
            updateDateTime(); // Update immediately after selection
        });
    });

    setInterval(updateDateTime, 1000); // Update time every second
});
