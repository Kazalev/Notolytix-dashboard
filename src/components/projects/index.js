import React, { useContext } from "react"
import myContext from "../../contexts/ProjectContext";
import Project from "../project";
import './style.scss';

function Projects() {
    const { value } = useContext(myContext)
    let projectInfo = value[0];

    return (
        <div>
            <Project projectInfo={projectInfo} />
        </div>
    );
}

export default Projects;
