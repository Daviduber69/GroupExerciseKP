
function fetchJoke(url, id) {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'yrgo-kprog-class'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Something went wrong: ", response.status);
            }
            return response.json();
        })
        .then(data => {
            let jokeDiv = document.getElementById(id);
            let inputId = document.getElementById("jokeId");
            let jokeId = data.id;
            inputId.value = jokeId;
            if (url === "https://icanhazdadjoke.com/") {
                jokeDiv.innerHTML += "<pre>" + data.joke;
                let rating = document.querySelector("input[name=rating]:checked").value ;
                jokeDiv.innerHTML += "Rating: "+rating;

            }
        })
        .catch(error => {
            console.error("Error: ", error);
        })
}

let jokeBox = document.getElementById("jokes");
let jokeButton = document.getElementById("jokeButton");
let submitRating = document.getElementById("ratingForm");

jokeButton.addEventListener("click", () => {
    fetchJoke("https://icanhazdadjoke.com/", "jokes");
})


submitRating.addEventListener("submit", (e) => {
    e.preventDefault();
    let rating = document.querySelector("input[name=rating]:checked").value ;
    console.log(rating, jokeId.value)
    fetchJoke("https://icanhazdadjoke.com/", "jokes");
});
