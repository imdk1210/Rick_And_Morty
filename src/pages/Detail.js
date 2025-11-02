import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail(){
    
    const {id} = useParams(); // получим id из URL
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data)=> setMovie(data));
    }, [id]);

    if(!movie) return (
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
            Загрузка вселенной...
        </div>
    )

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
                🎬 {movie.title}
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
                    fontFamily: "'Comic Neue', sans-serif"
                }}>
                    {movie.body}
                </p>
            </div>
            <p style={{
                color: '#A8E063',
                fontSize: '16px',
                fontFamily: "'Comic Neue', sans-serif",
                background: 'rgba(168, 224, 99, 0.1)',
                padding: '15px',
                borderRadius: '10px',
                border: '2px solid #A8E063',
                display: 'inline-block'
            }}>
                <b>ID Вселенной:</b> {movie.id}
            </p>
        </div>
    );
}

export default Detail;