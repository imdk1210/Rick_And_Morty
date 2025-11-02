import React, { useState, useEffect } from "react";

const images = [
    'https://s4.afisha.ru/mediastorage/62/d1/da2b0810e19c40e0ab76fa58d162.jpg',
    'https://thumbs.dfs.ivi.ru/storage0/contents/d/3/cb359e5712417994c4a2ac58bacf47.jpg',
    'https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE5/6803760d64f4429560f95ce6/IMAGE_2_3_XL.jpg'
];

function Slider() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                // Используем функциональный вызов для обновления state
                setIndex(prev => (prev + 1) % images.length);
                setFade(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const next = () => {
        setFade(false);
        setTimeout(() => {
            setIndex(prev => (prev + 1) % images.length);
            setFade(true);
        }, 500);
    };

    const prev = () => {
        setFade(false);
        setTimeout(() => {
            setIndex(prev => (prev - 1 + images.length) % images.length);
            setFade(true);
        }, 500);
    };

    return (
        <div style={{ textAlign: 'center', margin: '30px 20px 10px 20px', padding: '20px' }}>
            <div style={{
                display: 'inline-block',
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(168, 224, 99, 0.1) 0%, rgba(123, 44, 191, 0.1) 100%)',
                borderRadius: '20px',
                border: '2px solid #A8E063',
                boxShadow: '0 8px 30px rgba(168, 224, 99, 0.3)'
            }}>
                <img
                    src={images[index]}
                    alt="slide"
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        borderRadius: '15px',
                        transition: 'opacity 0.5s ease-in-out',
                        opacity: fade ? 1 : 0,
                        height: '500px',
                        objectFit: 'cover',
                        border: '3px solid #A8E063',
                        boxShadow: '0 0 30px rgba(168, 224, 99, 0.5)'
                    }}
                />
                <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
                    <button 
                        onClick={prev} 
                        style={{ 
                            background: 'rgba(168, 224, 99, 0.15)',
                            border: '1px solid #A8E063',
                            color: '#A8E063',
                            padding: '8px 20px',
                            fontSize: '14px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontFamily: "'Comic Neue', sans-serif",
                            transition: 'all 0.3s ease',
                            fontWeight: 'normal'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(168, 224, 99, 0.25)';
                            e.target.style.borderColor = '#00C851';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(168, 224, 99, 0.15)';
                            e.target.style.borderColor = '#A8E063';
                        }}
                    >
                        ⬅️ Предыдущий
                    </button>
                    <button 
                        onClick={next}
                        style={{ 
                            background: 'rgba(168, 224, 99, 0.15)',
                            border: '1px solid #A8E063',
                            color: '#A8E063',
                            padding: '8px 20px',
                            fontSize: '14px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontFamily: "'Comic Neue', sans-serif",
                            transition: 'all 0.3s ease',
                            fontWeight: 'normal'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(168, 224, 99, 0.25)';
                            e.target.style.borderColor = '#00C851';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(168, 224, 99, 0.15)';
                            e.target.style.borderColor = '#A8E063';
                        }}
                    >
                        Следующий ➡️
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slider;
