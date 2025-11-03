import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";


function EpisodesPage(){
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(()=>{
    // Используем Rick and Morty API для получения персонажей
    fetch('https://rickandmortyapi.com/api/character')
    .then(res=>res.json())
    .then(data=>{
        setCharacters(data.results.slice(0, 20)); // Первые 20 персонажей
        setLoading(false);
    })
    .catch(error=>{
        console.error('Ошибка загрузки персонажей:', error);
        setLoading(false);
    });
}, []);

if (loading) return (
    <div style={{ 
        textAlign: 'center', 
        padding: '50px', 
        color: '#A8E063', 
        fontFamily: "'Comic Neue', sans-serif", 
        fontSize: '24px' 
    }}>
        Загрузка персонажей из мультивселенной...
    </div>
);

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
            👥 Все Персонажи Рика и Морти 👥
        </h2>
        <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px'
        }}>
            {characters.map(character=>(
                <li key={character.id} style={{
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
                    <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                        <img 
                            src={character.image} 
                            alt={character.name}
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                border: '3px solid #A8E063',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <Link 
                        to={`/characters/${character.id}`}
                        style={{
                            color: '#A8E063',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            fontFamily: "'Comic Neue', sans-serif",
                            textShadow: '0 0 5px rgba(168, 224, 99, 0.25)',
                            display: 'block',
                            textAlign: 'center',
                            marginBottom: '10px'
                        }}
                    >
                        {character.name}
                    </Link>
                    <p style={{
                        color: 'rgba(168, 224, 99, 0.8)',
                        fontSize: '14px',
                        textAlign: 'center',
                        fontFamily: "'Comic Neue', sans-serif",
                        margin: '5px 0'
                    }}>
                        {character.species} • {character.status}
                    </p>
                </li>
            ))}
        </ul>
    </div>
)
};

export default EpisodesPage;



