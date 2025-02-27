
# MovieVerse 
MovieVerse is a modern web application that allows users to discover and explore popular movies. Built with React and integrated with The Movie Database (TMDb) API, MovieVerse provides a seamless user experience for movie enthusiasts.

![localhost_3000_ (3) (1)](https://github.com/user-attachments/assets/49c3f72e-74eb-4e1e-bc46-6bb3a237478e)
![screencapture-localhost-3000-movies-upcoming-2025-02-27-23_55_21](https://github.com/user-attachments/assets/7c6ddaa3-d5a0-4f17-9360-7c2822062ddb)

## Features
- Fetches popular movies from TMDB API
- Displays movies in a responsive carousel
- Movie details page with additional information
- Reusable components for better structure
  

## Project Structure

```
MovieVerse/
│-- public/
│   ├── images/                  # Stores static images
│-- src/
│   ├── components/              
│   │   ├── card/
│   │   │   ├── Card.js
│   │   │   ├── Card.css
│   │   ├── header/
│   │   │   ├── Header.js
│   │   │   ├── Header.css
│   │   ├── movielist/
│   │       ├── movielist.js
│   │       ├── movielist.css
│   ├── pages/                   
│   │   ├── home/
│   │   │   ├── Home.js
│   │   │   ├── Home.css
│   │   ├── moviedetail/
│   │       ├── Moviedetail.js
│   │       ├── Moviedetail.css
│   ├── App.js                    
│   ├── index.js                  
│-- package.json                   
│-- README.md                     
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/MovieVerse.git
   ```

2. Navigate into the project directory:
   ```sh
   cd MovieVerse
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm start
   ```

## Dependencies
- React
- React Router DOM
- React Responsive Carousel
- FontAwesome

## API Usage
This project uses TMDB API to fetch movie data. Ensure you have a valid API key.

## License
This project is open-source and available under the MIT License.





>>>>>>> 935fb3abf3abeeb88b0a8d42bb5c2b527673d0e5
