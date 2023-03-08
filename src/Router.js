import React from 'react';
import { Route, Routes } from "react-router-dom";
import LoginPage from './Components/Login/LoginForm';
import Register from './Components/Register/RegisterForm.jsx';
import App from './App';


const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
        
    );
};

export default Router;