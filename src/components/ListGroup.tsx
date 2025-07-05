
import { useState } from "react";

// props
interface ListGroupProps {
    projects: string[];
    heading: string;
    onSelectProject: (project: string) => void;
}


function ListGroup({ projects, heading, onSelectProject}: ListGroupProps){
    


    // Hook - to let react know that there is a component that will change overtime
    const [selectedIndex, setSelectedIndex] = useState(-1);
    

    const message = projects.length == 0 && <p>No projects found</p>
    
    

    return (<><h4>{heading}</h4>
    { message }
    <ul className="list-group">
        {projects.map((project, index) => (
            <li 
            key={project} 
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            onClick={() => {
                setSelectedIndex(index);
                onSelectProject(project);
            }}
            >
                <a className="link-opacity-50" href={"https://github.com/megiemee/" + project}>{project}</a>
            </li>
        ))}
    </ul>

        </>);
}

export default ListGroup;