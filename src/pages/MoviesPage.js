import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";


function MoviePage(){
    const [movies, setMovies] = useState([]);


useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
    .then(res=>res.json())
    .then(data=>setMovies(data))
}, []);

return(
    <div style={{
        padding: '30px'
    }}>
        <h2 style={{
            color: '#A8E063',
            fontFamily: "'Comic Neue', sans-serif",
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            textShadow: '0 0 6px rgba(168, 224, 99, 0.25)',
            marginBottom: '30px'
        }}>
            🎬 Вселенные Фильмов 🎬
        </h2>
        <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px'
        }}>
            {movies.map(movie=>(
                <li key={movie.id} style={{
                    background: 'linear-gradient(135deg, rgba(168, 224, 99, 0.1) 0%, rgba(123, 44, 191, 0.1) 100%)',
                    padding: '20px',
                    borderRadius: '15px',
                    border: '2px solid #A8E063',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(168, 224, 99, 0.2)'
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
                    <Link 
                        to={`/movies/${movie.id}`}
                        style={{
                            color: '#A8E063',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            fontFamily: "'Comic Neue', sans-serif",
                            textShadow: '0 0 5px rgba(168, 224, 99, 0.25)',
                            display: 'block'
                        }}
                    >
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)
};

export default MoviePage;