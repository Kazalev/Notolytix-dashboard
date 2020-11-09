import React from "react"
import Heading from "../heading";
import Projects from "../projects";
import Tabs from "../tabs";
import './style.scss';

function Main() {
    return (
        <div className="Main">
            <Heading />
            <Tabs />
            <Projects />
        </div>
    );
}

export default Main;
