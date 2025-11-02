import React, {useEffect, useState} from "react";
import "./PostsList.css";

function PostList(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
        .then((res) => res.json())
        .then((data) => {
            setPosts(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    if (loading) return (
        <div style={{ textAlign: 'center', padding: '50px', color: '#A8E063', fontFamily: "'Comic Neue', sans-serif", fontSize: '24px' }}>
            Загрузка мультивселенных...
        </div>
    )
    if (error) return (
        <div style={{ textAlign: 'center', padding: '50px', color: '#FF006E', fontFamily: "'Comic Neue', sans-serif", fontSize: '24px' }}>
            ❌ Ошибка портала! Попробуйте снова...
        </div>
    )

    return (
        <div className="posts-list">
            <h2>Популярные фильмы</h2>
            <div className="posts-grid">
                {posts.map((post)=>(
                    <div key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                        <p>{post.body.slice(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default PostList;
