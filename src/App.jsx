import Header from './components/Header';
import Footer from './components/Footer';
import Navigation  from './components/Navigation';
import  Project  from './components/Project';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';




function App() {
    return (
        <main className="App">
            <Header />
            <hr />
            <Navigation />
            <hr />
            <Project />
            <hr />
            <Footer />
        </main>
    )
}


export default App;
