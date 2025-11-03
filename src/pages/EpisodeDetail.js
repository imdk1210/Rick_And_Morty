import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EpisodeDetail(){
    
    const {id} = useParams();
    const [episode, setEpisode] = useState(null);
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        .then((res) => res.json())
        .then((data)=> {
            setEpisode(data);
            setLoading(false);
            // Загружаем информацию о персонажах из эпизода
            if (data.characters && data.characters.length > 0) {
                const characterIds = data.characters.map(url => 
                    url.split('/').pop()
                ).join(',');
                
                fetch(`https://rickandmortyapi.com/api/character/${characterIds}`)
                .then((res) => res.json())
                .then((chars) => {
                    setCharacters(Array.isArray(chars) ? chars : [chars]);
                })
                .catch(error => {
                    console.error('Ошибка загрузки персонажей:', error);
                });
            }
        })
        .catch(error => {
            console.error('Ошибка загрузки эпизода:', error);
            setLoading(false);
        });
    }, [id]);

    if(loading) return (
        <div style={{ 
            textAlign: 'center', 
            padding: '50px', 
            color: '#A8E063', 
            fontFamily: "'Comic Neue', sans-serif", 
            fontSize: '24px',
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            Загрузка эпизода из мультивселенной...
        </div>
    );

    if(!episode) return (
        <div style={{ 
            textAlign: 'center', 
            padding: '50px', 
            color: '#FF006E', 
            fontFamily: "'Comic Neue', sans-serif", 
            fontSize: '24px',
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            Эпизод не найден!
        </div>
    );

    return(
        <div style={{
            padding: '40px',
            maxWidth: '900px',
            margin: '0 auto',
            minHeight: '70vh'
        }}>
            <h2 style={{
                color: '#A8E063',
                fontFamily: "'Comic Neue', sans-serif",
                fontSize: '32px',
                fontWeight: 'bold',
                textShadow: '0 0 6px rgba(168, 224, 99, 0.25)',
                marginBottom: '25px'
            }}>
                📺 {episode.name}
            </h2>
            <div style={{
                background: 'linear-gradient(135deg, rgba(168, 224, 99, 0.1) 0%, rgba(123, 44, 191, 0.1) 100%)',
                padding: '30px',
                borderRadius: '15px',
                border: '2px solid #A8E063',
                boxShadow: '0 8px 30px rgba(168, 224, 99, 0.3)',
                marginBottom: '20px'
            }}>
                <p style={{
                    color: 'rgba(168, 224, 99, 0.95)',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    fontFamily: "'Comic Neue', sans-serif",
                    margin: '10px 0'
                }}>
                    <strong style={{ color: '#A8E063' }}>Серия:</strong> {episode.episode}
                </p>
                <p style={{
                    color: 'rgba(168, 224, 99, 0.95)',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    fontFamily: "'Comic Neue', sans-serif",
                    margin: '10px 0'
                }}>
                    <strong style={{ color: '#A8E063' }}>Дата выхода:</strong> {episode.air_date}
                </p>
                <p style={{
                    color: 'rgba(168, 224, 99, 0.95)',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    fontFamily: "'Comic Neue', sans-serif",
                    margin: '10px 0'
                }}>
                    <strong style={{ color: '#A8E063' }}>Количество персонажей:</strong> {characters.length}
                </p>
            </div>
            
            {characters.length > 0 && (
                <div style={{
                    background: 'linear-gradient(135deg, rgba(168, 224, 99, 0.1) 0%, rgba(123, 44, 191, 0.1) 100%)',
                    padding: '30px',
                    borderRadius: '15px',
                    border: '2px solid #A8E063',
                    boxShadow: '0 8px 30px rgba(168, 224, 99, 0.3)',
                    marginBottom: '20px'
                }}>
                    <h3 style={{
                        color: '#A8E063',
                        fontFamily: "'Comic Neue', sans-serif",
                        fontSize: '24px',
                        fontWeight: 'bold',
                        marginBottom: '20px'
                    }}>
                        Персонажи в эпизоде:
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                        gap: '15px'
                    }}>
                        {characters.map(char => (
                            <div key={char.id} style={{ textAlign: 'center' }}>
                                <img 
                                    src={char.image} 
                                    alt={char.name}
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        border: '2px solid #A8E063',
                                        objectFit: 'cover',
                                        marginBottom: '10px'
                                    }}
                                />
                                <p style={{
                                    color: 'rgba(168, 224, 99, 0.9)',
                                    fontSize: '12px',
                                    fontFamily: "'Comic Neue', sans-serif"
                                }}>
                                    {char.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default EpisodeDetail;



