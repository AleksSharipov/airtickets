const key = `a48f0a4d6fmsh7b1c3551896bfb1p1d852ajsnb175f5d17f38`;

function getFlight() {
  return fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/us/RUB/eng/SVO-sky/JFK-sky/anytime/anytime", {
    method: "GET",
    headers: {
      "x-rapidapi-key": key,
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Шэф, усё пропало ${response.status}`))
    })
}

export { getFlight };