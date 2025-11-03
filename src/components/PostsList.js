import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/slices/postsSlice";
import { addFavorite, removeFavourite } from "../store/slices/favoriteSlice";
import "./PostsList.css";

function PostList(){
    const dispatch = useDispatch();
    const {items: posts, loading, error} = useSelector((state)=>state.post);
    const favorites = useSelector((state) => state.favorite.list);

    useEffect(()=>{
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return (
        <div style={{ textAlign: 'center', padding: '50px', color: '#A8E063', fontFamily: "'Comic Neue', sans-serif", fontSize: '24px' }}>
            Загрузка эпизодов из мультивселенной...
        </div>
    )
    if (error) return (
        <div style={{ textAlign: 'center', padding: '50px', color: '#FF006E', fontFamily: "'Comic Neue', sans-serif", fontSize: '24px' }}>
            ❌ Ошибка портала! Попробуйте снова...
        </div>
    )

    return (
        <div className="posts-list">
            <h2>Популярные эпизоды</h2>
            <div className="posts-grid">
                {posts.map((post)=>{
                    const isFav = favorites.some((fav)=> fav.id === post.id);
                    return(
                        <div key={post.id} className="post-card">
                            <h3>{post.title}</h3>
                            <p>{post.body.slice(0, 100)}....</p>
                            <button 
                            onClick={()=>
                                isFav
                                ?dispatch(removeFavourite(post.id))
                                :dispatch(addFavorite(post))
                            }
                            >
                                {isFav ? "🗑️ Удалить из избранного": "⭐ Добавить в избранные"}

                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );

}
export default PostList;
