import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import Content from "./Content";

class Main extends Component {
    render() {
        return (
            <main className="Main">
                <div className="MainInner">
                    <Sidebar/>
                    <Content/>
                </div>
            </main>
        )
    }
}

export default Main;