function search() {
  const searchResult = document.getElementById("search-result");
  const searchTerm = document.getElementById("search-term");
  const keyword = document.getElementById("keyword");

  const movieData = document.getElementById("movie-data");
  const comments = document.getElementById("comments");

  movieData.style.visibility = "hidden";
  comments.style.visibility = "hidden";

  searchResult.style.display = "block";

  searchTerm.innerText = keyword.value;

  //fetching results related to the keyword value from the server

  return false;
}