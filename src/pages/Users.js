import React from "react";
import { useSelector } from "react-redux";

export default function Users(){
    const user = useSelector((state)=> state.auth.user);

    return(
        <div style={{ 
            textAlign: "center", 
            marginTop: "100px",
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px'
        }}>
            <div style={{
                background: 'linear-gradient(135deg, rgba(168, 224, 99, 0.1) 0%, rgba(123, 44, 191, 0.1) 100%)',
                padding: '40px',
                borderRadius: '20px',
                border: '2px solid #A8E063',
                boxShadow: '0 8px 30px rgba(168, 224, 99, 0.3)',
                maxWidth: '500px'
            }}>
                <h2 style={{
                    color: '#A8E063',
                    fontFamily: "'Comic Neue', sans-serif",
                    fontSize: '32px',
                    fontWeight: 'bold',
                    textShadow: '0 0 6px rgba(168, 224, 99, 0.25)',
                    marginBottom: '20px'
                }}>
                    Добро пожаловать, {user?.username}!
                </h2>
                <p style={{
                    color: 'rgba(168, 224, 99, 0.9)',
                    fontFamily: "'Comic Neue', sans-serif",
                    fontSize: '20px',
                    margin: 0
                }}>
                    WUBBA LUBBA DUB DUB! Портал открыт! 🎉
                </p>
            </div>
        </div>
    )

}