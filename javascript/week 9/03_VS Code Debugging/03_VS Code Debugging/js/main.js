const APIKey = "b0aaca8a"
const APIURL = `http://www.omdbapi.com/?apikey=${APIKey}&`

const searchBox = document.getElementById('searchBox')
const searchButton = document.getElementById('searchButton')
const errorMessage = document.getElementById('errorMessage')
const movieTitle = document.getElementById('movieTitle')
const movieImage = document.getElementById('movieImage')
const movieText = document.getElementById('movieText')
const movieCard = document.getElementById('movieCard')
errorMessage.style.display = "none"
movieCard.style.display = 'none'

searchButton.addEventListener('click', search)

function search() {
    const query = searchBox.value
    loadData(query)
}

async function loadData(query) {
    try {
        const response = await fetch(APIURL + `t=${query}`)
        const data = await response.json()
        displayData(data)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

function displayData(data) {
    if (data.Error) {
        errorMessage.style.display = "block"
        errorMessage.innerHTML = data.Error
        console.log(data.Error)
    } else {
        movieCard.style.display = 'block'
        errorMessage.style.display = "none"
        movieTitle.innerHTML = data.Title
        if (data.Poster == "N/A") {
            movieImage.src = './img/placeholder.jpg'
        } else {
            movieImage.src = data.Poster
        }
        movieText.innerHTML = data.Plot
    }
}