document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("eventName").value;
  const date = document.getElementById("eventDate").value;
  const location = document.getElementById("eventLocation").value;

  // Display event details dynamically
  document.getElementById("displayEventName").textContent = name;
  document.getElementById("displayEventDate").textContent = date;
  document.getElementById("displayEventLocation").textContent = location;

  // Reveal the card
  document.getElementById("eventDisplay").classList.remove("d-none");
});

document
  .getElementById("getWeather")
  .addEventListener("click", async function () {
    const location = document.getElementById("eventLocation").value;
    const apiKey = "YOUR_WEATHER_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      document.getElementById("weatherDetails").innerHTML = `
      <div class="alert alert-info">
        <strong>Temperature:</strong> ${data.main.temp}°C<br>
        <strong>Condition:</strong> ${data.weather[0].description}
      </div>`;
    } catch (error) {
      document.getElementById("weatherDetails").innerHTML = `
      <div class="alert alert-danger">Unable to fetch weather data!</div>`;
    }
  });
