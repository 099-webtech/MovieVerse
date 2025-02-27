import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure Font Awesome is available
import "./home.css";
import MovieList from "../../components/movielist/movielist";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                }
                const data = await response.json();
                setMovies(data.results || []); 
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={false}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {movies.map(movie => (
                        <Link 
                            key={movie.id} 
                            style={{ textDecoration: "none", color: "white" }} 
                            to={`/movie/${movie.id}`}
                        >
                            <div className="posterImage">
                                <img 
                                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                                    alt={movie.original_title} 
                                />
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">
                                    {movie.original_title}
                                </div>
                                <div className="posterImage__runtime">
                                    {movie.release_date}
                                    <span className="posterImage__rating">
                                        {movie.vote_average}
                                        <i className="fas fa-star" />{" "} {/* ✅ Fix: Ensure Font Awesome is imported */}
                                    </span>
                                </div>
                                <div className="posterImage__description">
                                    {movie.overview}
                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
                <MovieList />

            </div>
        </>
    );
};

export default Home;
