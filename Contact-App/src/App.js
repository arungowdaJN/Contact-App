import React, {useState} from 'react';
import './App.css';
import ContactApp from "./components/ContactApp";

let App  = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Hooks - Contact App</a>
            </nav>

            <ContactApp/>

        </React.Fragment>
    );
}
export default App;
