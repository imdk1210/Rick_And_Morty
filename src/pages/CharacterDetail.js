import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CharacterDetail(){
    
    const {id} = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((data)=> {
            setCharacter(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Ошибка загрузки персонажа:', error);
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
            Загрузка персонажа из мультивселенной...
        </div>
    );

    if(!character) return (
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
            Персонаж не найден!
        </div>
    );

    const getStatusColor = (status) => {
        switch(status) {
            case 'Alive': return '#00C851';
            case 'Dead': return '#FF006E';
            default: return '#A8E063';
        }
    };

    return(
        <div style={{
            padding: '40px',
            maxWidth: '900px',
            margin: '0 auto',
            minHeight: '70vh'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '30px'
            }}>
                <img 
                    src={character.image} 
                    alt={character.name}
                    style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        border: '5px solid #A8E063',
                        boxShadow: '0 0 30px rgba(168, 224, 99, 0.5)',
                        marginBottom: '20px'
                    }}
                />
                <h2 style={{
                    color: '#A8E063',
                    fontFamily: "'Comic Neue', sans-serif",
                    fontSize: '32px',
                    fontWeight: 'bold',
                    textShadow: '0 0 6px rgba(168, 224, 99, 0.25)',
                    marginBottom: '15px'
                }}>
                    {character.name}
                </h2>
            </div>
            <div style={{
                background: 'linear-gradient(135deg, rgba(168, 224, 99, 0.1) 0%, rgba(123, 44, 191, 0.1) 100%)',
                padding: '30px',
                borderRadius: '15px',
                border: '2px solid #A8E063',
                boxShadow: '0 8px 30px rgba(168, 224, 99, 0.3)',
                marginBottom: '20px'
            }}>
                <div style={{ marginBottom: '15px' }}>
                    <p style={{
                        color: 'rgba(168, 224, 99, 0.95)',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        fontFamily: "'Comic Neue', sans-serif",
                        margin: '10px 0'
                    }}>
                        <strong style={{ color: '#A8E063' }}>Статус:</strong> 
                        <span style={{ 
                            color: getStatusColor(character.status),
                            marginLeft: '10px',
                            padding: '5px 15px',
                            borderRadius: '20px',
                            background: 'rgba(168, 224, 99, 0.1)'
                        }}>
                            {character.status}
                        </span>
                    </p>
                </div>
                <p style={{
                    color: 'rgba(168, 224, 99, 0.95)',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    fontFamily: "'Comic Neue', sans-serif",
                    margin: '10px 0'
                }}>
                    <strong style={{ color: '#A8E063' }}>Вид:</strong> {character.species}
                </p>
                <p style={{
                    color: 'rgba(168, 224, 99, 0.95)',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    fontFamily: "'Comic Neue', sans-serif",
                    margin: '10px 0'
                }}>
                    <strong style={{ color: '#A8E063' }}>Пол:</strong> {character.gender}
                </p>
                <p style={{
                    color: 'rgba(168, 224, 99, 0.95)',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    fontFamily: "'Comic Neue', sans-serif",
                    margin: '10px 0'
                }}>
                    <strong style={{ color: '#A8E063' }}>Происхождение:</strong> {character.origin?.name || 'Неизвестно'}
                </p>
                <p style={{
                    color: 'rgba(168, 224, 99, 0.95)',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    fontFamily: "'Comic Neue', sans-serif",
                    margin: '10px 0'
                }}>
                    <strong style={{ color: '#A8E063' }}>Местоположение:</strong> {character.location?.name || 'Неизвестно'}
                </p>
            </div>
        </div>
    );
}

export default CharacterDetail;

