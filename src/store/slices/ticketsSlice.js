import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Получаем список эпизодов для просмотра fake api

export const fetchTickets = createAsyncThunk("tickets/fetchTickets", async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=511");
    return await res.json()
});

//Асинхронное добавление в список просмотра 

export const bookTicket = createAsyncThunk("tickets/bookTicket", async (ticketId)=>{
    //Иммитация запроса на сервер
    await new Promise((resovle)=> setTimeout(resovle, 1000))
    return ticketId
});

const ticketSlice = createSlice({
    name: 'tickets',
    initialState : {
        items: [],
        loading: false,
        booking: false,
        error: null,
    },

    reducers : {},
    extraReducers: (builder)=>{
        builder
        //get list
        .addCase(fetchTickets.pending, (state)=>{
            state.loading = true;
        })
        .addCase(fetchTickets.fulfilled, (state, action)=>{
            state.loading = false
            state.items = action.payload.map((t)=>({...t, booked: false}))
        })

        .addCase(fetchTickets.rejected, (state)=>{
            state.loading = false;
            state.error = 'Error in tickets'
        })


        // Логика на добавление эпизодов в список просмотра
        .addCase(bookTicket.pending, (state)=>{
            state.booking = true
        })
        .addCase(bookTicket.fulfilled, (state, action)=>{
            state.booking = false
            const ticket = state.items.find((t)=>t.id === action.payload)
            if(ticket) ticket.booked = true
        })
        .addCase(bookTicket.rejected, (state)=>{
            state.booking = false;
            state.error = 'Ошибка бронирования'
        })
    }
})

export default ticketSlice.reducer


