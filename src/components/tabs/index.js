import React from "react"
import './style.scss';
import { FaBars } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

function Tabs() {
    const handleClickTabs = (event) => {
        if(event.currentTarget.style.borderBottom){
            event.currentTarget.style.borderBottom = ""
        } else {
            event.currentTarget.style.borderBottom = '4px solid red';
        }
    }

    return (
        <div className="tabs">
            <ul>
                <li style={{borderBottom: '4px solid red'}} onClick={handleClickTabs}>
                    Activity
               </li>
                <li onClick={handleClickTabs}>
                    Late tasks
               </li>
                <li onClick={handleClickTabs}>
                    Upcoming tasks
               </li>
                <li onClick={handleClickTabs}>
                    Late milestones
               </li>
            </ul>

            <div className="buttons">
                <button className="btn btn-bars"><FaBars /></button>
                <button className="btn btn-settings"><FiSettings /></button>
            </div>
        </div>
    );
}

export default Tabs;
