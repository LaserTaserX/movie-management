// Define the Movie class
class Movie {

  // title, cast, description, rating
  constructor(title, cast, description, rating) {
    this.title = title;
    this.cast = cast;
    this.description = description;
    this.rating = rating;
  }

  // Method to update the rating of the movie
  updateRating(newRating) {
    this.rating = newRating;
  }

  // Method to display the movie's information
  displayInfo() {
    document.getElementById("movie-info").innerHTML = `
      <p><strong>Title:</strong> ${this.title}</p>
      <p><strong>Cast:</strong> ${this.cast.join(", ")}</p>
      <p><strong>Description:</strong> ${this.description}</p>
      <p><strong>Rating:</strong> ${this.rating}/10</p>
    `;
  }
}


// Test your implementation
const movie = new Movie(
  "Inception",
  ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
  "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
  8.8
);
// Display the initial information of the movie
movie.displayInfo();
let movies = [];
movies.push(movie);
// Update the rating of the movie
function updateMovieRating(title, newRating) {
  let index = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title === title) {
      index.push(i);
    }
  }
  movies[index[0]].updateRating(newRating);
  document.getElementById("movie-info").innerHTML += `
    <p><strong>Title:</strong> ${movies[index[0]].title}</p>
    <p><strong>Cast:</strong> ${movies[index[0]].cast.join(", ")}</p>
    <p><strong>Description:</strong> ${movies[index[0]].description}</p>
    <p><strong>Rating:</strong> ${movies[index[0]].rating}/10</p>
  `;
}
// Display the updated information of the movie

updateMovieRating("Inception", 9.0);