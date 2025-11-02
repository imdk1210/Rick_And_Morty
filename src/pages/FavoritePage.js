import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavourite } from "../store/slices/favoriteSlice";

function FavoritesPage() {
    const favorites = useSelector((state) => state.favorite.list);
    const dispatch = useDispatch();

    return (
        <div style={{ padding: "30px" }}>
            <h2 style={{ 
                textAlign: "center",
                color: '#A8E063',
                fontFamily: "'Comic Neue', sans-serif",
                fontSize: '36px',
                fontWeight: 'bold',
                textShadow: '0 0 6px rgba(168, 224, 99, 0.25)',
                marginBottom: '30px'
            }}>
                ⭐ Избранные Вселенные
            </h2>
            {favorites.length === 0 ? (
                <p style={{ 
                    textAlign: "center",
                    color: 'rgba(168, 224, 99, 0.8)',
                    fontSize: '24px',
                    fontFamily: "'Comic Neue', sans-serif",
                    marginTop: '50px'
                }}>
                    Портал пуст... Добавьте фильмы в избранное!
                </p>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {favorites.map((movie) => (
                        <div
                            key={movie.id}
                            style={{
                                background: "linear-gradient(135deg, rgba(168, 224, 99, 0.1) 0%, rgba(123, 44, 191, 0.1) 100%)",
                                padding: "20px",
                                borderRadius: "15px",
                                border: "2px solid #A8E063",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 15px rgba(168, 224, 99, 0.2)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(168, 224, 99, 0.5)';
                                e.currentTarget.style.borderColor = '#00C851';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(168, 224, 99, 0.2)';
                                e.currentTarget.style.borderColor = '#A8E063';
                            }}
                        >
                            <h3 style={{
                                color: '#A8E063',
                                fontFamily: "'Comic Neue', sans-serif",
                                fontWeight: 'bold',
                                textShadow: '0 0 5px rgba(168, 224, 99, 0.25)',
                                marginBottom: '12px'
                            }}>
                                🎬 {movie.title}
                            </h3>
                            <p style={{
                                color: 'rgba(168, 224, 99, 0.9)',
                                fontFamily: "'Comic Neue', sans-serif",
                                marginBottom: '15px'
                            }}>
                                {movie.body.slice(0, 100)}...
                            </p>
                            <button 
                                onClick={() => dispatch(removeFavourite(movie.id))}
                                style={{ width: '100%' }}
                            >
                                🗑️ Удалить из портала
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavoritesPage;
