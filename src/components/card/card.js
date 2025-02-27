import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <>
            {isLoading ? (
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
            ) : (
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <div className="cards">
                        {!imageLoaded && <div className="cards__placeholder" />} {/* Placeholder for loading */}
                        <img
                            className={`cards__img ${imageLoaded ? "fade-in" : "hidden"}`} // Add fade-in effect
                            src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
                            onLoad={handleImageLoad}
                            alt={movie ? movie.original_title : ""}
                        />
                        <div className="cards__overlay">
                            <div className="card__title">{movie ? movie.original_title : ""}</div>
                            <div className="card__runtime">
                                {movie ? movie.release_date : ""}
                                <span className="card__rating">
                                    {movie ? movie.vote_average : ""}
                                    <i className="fas fa-star" />
                                </span>
                            </div>
                            <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
};

export default Cards;