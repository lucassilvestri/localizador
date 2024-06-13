window.addEventListener('load', () => {
    // Obtener la fecha y hora actuales
    const currentDate = new Date();
    const date = currentDate.toDateString();
    const time = currentDate.toLocaleTimeString();

    // Mostrar la fecha y hora actuales en la página
    document.getElementById('date').innerText = `Date: ${date}`;
    document.getElementById('time').innerText = `Time: ${time}`;

    // Obtener la ubicación del usuario
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            // Mostrar la ubicación del usuario en la página
            document.getElementById('location').innerText = `Location: Latitude ${latitude}, Longitude ${longitude}`;
        });
    } else {
        document.getElementById('location').innerText = 'Location: Geolocation not supported';
    }
});
