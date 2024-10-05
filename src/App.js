import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from "./components/Header/Header"
import './App.css';
import Rotuer from './Rotuer';

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
            <div className="App">
                <Header></Header>
                <div className="container">
                    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <div id="main" className={isSidebarOpen ? 'main-shrink' : 'main-expand'}>
                        <Rotuer />
                    </div>
                </div>
            </div>

    );
}

export default App;
