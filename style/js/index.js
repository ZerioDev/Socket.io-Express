const socket = io();

socket.on('uptime', function (res) {
    const lastUptime = document.getElementById('uptime');
    const randomNumber = document.getElementById('number');

    lastUptime.textContent = `Last update ${new Date(Date.now()).toTimeString()}`;
    randomNumber.textContent = `Random number ${res.number}`;
});