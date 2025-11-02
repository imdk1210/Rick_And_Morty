import { login } from "../slices/authSlice";


const authMiddleware = (store)=>(next)=>(action)=>{
    if (action.type === login.type){
        //Если вход прошел то перенаправляем
        setTimeout(()=>{
            window.location.href = '/users';
        }, 500);
    }
    return next(action);
};

export default authMiddleware;