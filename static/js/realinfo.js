document.getElementById('timezone').textContent = Intl.DateTimeFormat().resolvedOptions().timeZone.toUpperCase();
document.getElementById('browser-language').textContent = navigator.language.toUpperCase();

function updateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    let formattedDate = now.toLocaleDateString('en-US', options).toUpperCase();
    formattedDate = formattedDate.replace(',', ''); // Remove comma between day and year
    formattedDate = formattedDate.replace(
    formattedDate.split(' ')[1],
    formattedDate.split(' ')[1].slice(0, 3)
    );
    document.getElementById('current-date').textContent = formattedDate;
    document.getElementById('current-time').textContent = now.toLocaleTimeString();
    const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    document.getElementById('day-of-week').textContent = daysOfWeek[now.getDay()];
    }
    setInterval(updateTime, 1000);
updateTime();