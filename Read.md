
# React Movie App
This is a movie application built using React that consumes the Movie Database (TMDB) API to display a collection of movies. Users can browse movies on the discover page, search for specific movies, view movies based on genres, and click on movie posters to see more details about each movie.

## Getting Started
To use this application locally, follow these steps:

- Clone the repository from GitHub: git clone <repository-url>
- Change to the project directory: cd react-movie-app
- Install dependencies: npm install
- Start the development server: npm start
- Open your web browser and go to http://localhost:3000 to see the app running.

Note: You need to obtain an API key from TMDB by signing up for a free account at https://www.themoviedb.org/account/signup to use the TMDB API in this application.

## Features
This movie app has the following features:

### Discover Page
The discover page displays a list of popular movies by default, fetched from the TMDB API. Users can scroll through the list of movies, view movie posters, and click on them to see more details.

### Movie Search
Users can search for movies using the search functionality. They can enter a movie title in the search bar, and the app will fetch and display the matching movies from the TMDB API. Users can click on movie posters to see more details.

### Genre Filter
Users can filter movies by genre using the genre filter feature. The app fetches a list of movie genres from the TMDB API and displays them as options. Users can select a genre from the dropdown, and the app will fetch and display movies of that genre from the TMDB API. Users can click on movie posters to see more details.

### Movie Details
Users can click on a movie poster to see more details about the selected movie. The movie details page displays information such as movie title, release date, rating, overview, and cast. Users can also see similar movies related to the selected movie.

## Technologies Used
- React: A popular JavaScript library for building user interfaces.
- TMDB API: The Movie Database API for fetching movie data.

## Fork the repository
1. Create a new branch for your feature/bugfix: git checkout -b my-feature-branch
2. Make your changes and test thoroughly
3. Commit your changes: git commit -m "Add new feature"
4. Push to the branch: git push origin my-feature-branch
5. Create a pull request with a description of your changes

## License
This project is licensed under the MIT License. Feel free to use and modify the code for your own purposes.