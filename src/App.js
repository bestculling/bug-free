import React, { useEffect } from "react";
import "./App.css";

function App() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/script.js";
        script.async = true;
        script.onload = () => this.scriptLoaded();

        document.body.appendChild(script);
    }, []);

    return (
        <div className="sc-bottom-bar">
            <a className="sc-menu-item">
                <i className="fas fa-list"></i>
            </a>
            <a class="sc-menu-item sc-current">
                <i className="fas fa-plus"></i>
            </a>
            <a className="sc-nav-indicator"></a>
            <a className="sc-menu-item">
                <i className="fas fa-calendar-alt"></i>
            </a>
        </div>
    );
}

export default App;
