
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
            if (url === "https://icanhazdadjoke.com/") {
                jokeDiv.innerHTML = "<pre>"+data.joke;
            }
        })
        .catch(error => {
            console.error("Error: ", error);
        })
}



let jokeBox = document.getElementById("jokes");
let jokeButton = document.getElementById("jokeButton");
let rating = document.getElementById("ratingForm");

jokeButton.addEventListener("click", () => {
    fetchJoke("https://icanhazdadjoke.com/", "jokes");
})

rating.addEventListener("submit", ()=>{

});