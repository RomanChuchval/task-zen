import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Sidebar} from "./components/sidebar/Sidebar";
import {Main} from "./components/main/Main";



export const App = () => {
    return (
       <div className='App'>
           <header className='Header'>
                <Header/>
           </header>
           <aside className='Sidebar'>
                <Sidebar />
           </aside>
           <main className='Main'>
                <Main />
           </main>
           <footer className='Footer'>
                <Footer />
           </footer>
       </div>
    );
}
