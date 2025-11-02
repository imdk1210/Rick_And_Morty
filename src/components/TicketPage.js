import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets, bookTicket } from "../store/slices/ticketsSlice";

export default function TicketPage() {
  const dispatch = useDispatch();
  const { items, loading, booking, error } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  if (loading) return (
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
      Загрузка билетов на путешествия...
    </div>
  );
  if (error) return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      color: '#FF006E', 
      fontFamily: "'Comic Neue', sans-serif", 
      fontSize: '24px' 
    }}>
      ❌ {error}
    </div>
  );

  return (
    <div style={{ padding: "30px", minHeight: '70vh' }}>
      <h2 style={{
        color: '#A8E063',
        fontFamily: "'Comic Neue', sans-serif",
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: '0 0 6px rgba(168, 224, 99, 0.25)',
        marginBottom: '30px'
      }}>
        🎫 Билеты на Путешествия
      </h2>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {items.map((ticket) => (
          <li
            key={ticket.id}
            style={{
              background: ticket.booked 
                ? 'linear-gradient(135deg, rgba(168, 224, 99, 0.2) 0%, rgba(123, 44, 191, 0.2) 100%)'
                : 'linear-gradient(135deg, rgba(168, 224, 99, 0.1) 0%, rgba(123, 44, 191, 0.1) 100%)',
              border: `2px solid ${ticket.booked ? '#00C851' : '#A8E063'}`,
              borderRadius: "15px",
              padding: "20px",
              transition: 'all 0.3s ease',
              boxShadow: ticket.booked 
                ? '0 4px 20px rgba(0, 200, 81, 0.4)'
                : '0 4px 15px rgba(168, 224, 99, 0.2)'
            }}
            onMouseEnter={(e) => {
              if (!ticket.booked) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(168, 224, 99, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (!ticket.booked) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(168, 224, 99, 0.2)';
              }
            }}
          >
            <h3 style={{
              color: '#A8E063',
              fontFamily: "'Comic Neue', sans-serif",
              fontWeight: 'bold',
              textShadow: '0 0 5px rgba(168, 224, 99, 0.25)',
              marginBottom: '12px'
            }}>
              🎬 {ticket.title}
            </h3>
            <p style={{
              color: 'rgba(168, 224, 99, 0.9)',
              fontFamily: "'Comic Neue', sans-serif",
              marginBottom: '15px'
            }}>
              {ticket.body?.slice(0, 70)}...
            </p>
            <button
              onClick={() => dispatch(bookTicket(ticket.id))}
              disabled={ticket.booked || booking}
              style={{
                width: '100%',
                background: ticket.booked 
                  ? 'linear-gradient(135deg, #7B2CBF 0%, #5a1a8f 100%)'
                  : 'linear-gradient(135deg, #00C851 0%, #A8E063 100%)',
                opacity: ticket.booked || booking ? 0.6 : 1,
                cursor: ticket.booked || booking ? 'not-allowed' : 'pointer',
              }}
            >
              {ticket.booked
                ? "✅ Забронирован"
                : booking
                ? "Бронируем..."
                : "🎫 Забронировать портал"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}