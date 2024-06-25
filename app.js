document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const zipCode = document.getElementById('zipCode').value;
    const apiKey = 'f966d439d010488d819195852242106'; // Your API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${zipCode}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Debugging: log the entire response
            const city = data.location.name;
            const temp = data.current.temp_f; // Assuming the temperature is in Fahrenheit
            document.getElementById('result').innerText = `City: ${city}, Temperature: ${temp}°F`;
        })
        .catch(error => {
            document.getElementById('result').innerText = `Error: ${error.message}`;
            console.error('There was a problem with the fetch operation:', error);
        });
});
