import React from 'react';
import './App.css';
import {Header} from "common/components/header/Header";
import {Footer} from "common/components/footer/Footer";
import {Sidebar} from "common/components/sidebar/Sidebar";
import {Main} from "common/components/main/Main";
import {Route, Routes} from 'react-router-dom'



export const App = () => {

    return (
        <div className='App'>
            <header className='Header'>
                <Header/>
            </header>
            <aside className='Sidebar'>
                <Sidebar/>
            </aside>
            <main className='Main'>
                <Routes>
                        <Route path={'/:id?'} element={<Main/>}/>
                        <Route index element={ <Main/> } />
                </Routes>
            </main>
            <footer className='Footer'>
                <Footer/>
            </footer>
        </div>
    );
}
