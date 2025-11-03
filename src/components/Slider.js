import React, { useState, useEffect } from "react";

// Массив изображений Рика и Морти для карусели
// Если у вас есть локальные файлы, поместите их в папку public/images/ 
// и используйте пути вида '/images/filename.jpg'
// Или используйте прямые URL изображений из интернета

// ========================================
// НАСТРОЙКА ИЗОБРАЖЕНИЙ ДЛЯ КАРУСЕЛИ
// ========================================
// Вариант 1: Используйте локальные файлы (поместите их в public/images/)
// Вариант 2: Используйте прямые URL изображений из интернета
// Вариант 3: Используйте URL из бесплатных сервисов (Imgur, Unsplash и т.д.)

// РЕКОМЕНДУЕТСЯ: Замените эти пути на URL ваших изображений или добавьте файлы в public/images/
// Пример использования URL:
// const images = [
//     'https://example.com/path/to/image1.jpg',
//     'https://example.com/path/to/image2.jpg',
//     ...
// ];

// ========================================
// МАССИВ ИЗОБРАЖЕНИЙ ДЛЯ КАРУСЕЛИ
// ========================================
// Если вы используете локальные файлы, поместите их в папку public/images/
// и обновите пути ниже на имена ваших файлов
const images = [
    '/images/rick-morty-freddy.jpg',        // Рик, Морти и инопланетянин с лезвиями
    '/images/rick-morty-spaceship.jpg',     // Рик и Морти в космическом корабле
    '/images/reporter-giant-head.jpg',      // Репортер и гигантская голова над городом
    '/images/animals-mech-suits.jpg',       // Два животных в механических экзоскелетах
    '/images/rick-nimbus-shop.jpg'          // Рик и Мистер Нимбус в антикварной лавке
];

// Если вы хотите использовать URL напрямую, замените массив выше на:
// const images = [
//     'https://your-image-url-1.jpg',
//     'https://your-image-url-2.jpg',
//     // ... и так далее
// ];

// Описания для улучшения доступности
const imageDescriptions = [
    'Рик и Морти в зловещей сцене с инопланетянином, похожим на Фредди Крюгера, в красном свете',
    'Рик и Морти управляют космическим кораблем, окруженные зеленой жидкостью',
    'Репортер сообщает о гигантской голове, парящей над городскими зданиями',
    'Два маленьких животных в механических экзоскелетах в лабораторной обстановке',
    'Рик Санчез и Мистер Нимбус в антикварной лавке, полной странных артефактов'
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
                    alt={imageDescriptions[index] || `Эпизод Рика и Морти ${index + 1}`}
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        borderRadius: '15px',
                        transition: 'opacity 0.5s ease-in-out',
                        opacity: fade ? 1 : 0,
                        height: '500px',
                        objectFit: 'cover',
                        border: '3px solid #A8E063',
                        boxShadow: '0 0 30px rgba(168, 224, 99, 0.5)',
                        backgroundColor: 'rgba(26, 26, 46, 0.5)'
                    }}
                    onError={(e) => {
                        // Если изображение не загрузилось, показываем placeholder с описанием
                        if (!e.target.src.includes('placeholder') && !e.target.src.includes('data:')) {
                            const currentIndex = index;
                            const episodeNames = ['Фредди-инопланетянин', 'Космический корабль', 'Гигантская голова', 'Механические костюмы', 'Антикварная лавка'];
                            e.target.src = `https://via.placeholder.com/800x500/1a1a2e/A8E063?text=${encodeURIComponent(episodeNames[currentIndex] + ' - Изображение ' + (currentIndex + 1))}`;
                            e.target.style.opacity = '1';
                            e.target.alt = 'Placeholder: ' + imageDescriptions[currentIndex];
                        }
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
