import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavourite } from "../store/slices/favoriteSlice";
import "./EpisodesCarousel.css";

function EpisodesCarousel() {
    const dispatch = useDispatch();
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const favorites = useSelector((state) => state.favorite.list);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(res => res.json())
            .then(data => {
                setEpisodes(data.results.slice(0, 10)); // Первые 10 эпизодов для главной
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка загрузки эпизодов:', error);
                setLoading(false);
            });
    }, []);

    const scrollLeft = () => {
        const container = document.getElementById('episodes-carousel-container');
        if (container) {
            container.scrollBy({ left: -400, behavior: 'smooth' });
            setScrollPosition(container.scrollLeft - 400);
        }
    };

    const scrollRight = () => {
        const container = document.getElementById('episodes-carousel-container');
        if (container) {
            container.scrollBy({ left: 400, behavior: 'smooth' });
            setScrollPosition(container.scrollLeft + 400);
        }
    };

    if (loading) return (
        <div style={{ 
            textAlign: 'center', 
            padding: '50px', 
            color: '#A8E063', 
            fontFamily: "'Comic Neue', sans-serif", 
            fontSize: '24px' 
        }}>
            Загрузка эпизодов из мультивселенной...
        </div>
    );

    return (
        <div className="episodes-carousel-section">
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '25px',
                padding: '0 20px'
            }}>
                <h2 className="episodes-carousel-title">📺 Популярные Эпизоды</h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        onClick={scrollLeft}
                        className="carousel-nav-button"
                        aria-label="Прокрутить влево"
                    >
                        ⬅️
                    </button>
                    <button 
                        onClick={scrollRight}
                        className="carousel-nav-button"
                        aria-label="Прокрутить вправо"
                    >
                        ➡️
                    </button>
                </div>
            </div>
            
            <div className="episodes-carousel-wrapper">
                <div 
                    id="episodes-carousel-container"
                    className="episodes-carousel-container"
                >
                    {episodes.map(episode => {
                        const isFav = favorites.some((fav) => fav.id === episode.id);
                        return (
                            <div key={episode.id} className="episode-card">
                                <Link 
                                    to={`/episodes/${episode.id}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className="episode-card-content">
                                        <h3 className="episode-card-title">{episode.name}</h3>
                                        <p className="episode-card-code">{episode.episode}</p>
                                        <p className="episode-card-date">📅 {episode.air_date}</p>
                                    </div>
                                </Link>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        isFav
                                            ? dispatch(removeFavourite(episode.id))
                                            : dispatch(addFavorite(episode));
                                    }}
                                    className={`episode-favorite-btn ${isFav ? 'favorited' : ''}`}
                                >
                                    {isFav ? "⭐ В избранном" : "⭐ Добавить в избранное"}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default EpisodesCarousel;

