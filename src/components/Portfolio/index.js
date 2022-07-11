import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

export default function Portfolio() {
    const [projects] = useState([
        {
            name: "Budge-It",
            type: "Full-Stack"
        },
        // {
        //     name: "My-Social-API",
        //     type: "Back-End"
        // },
        {
            name: "Weather-Dashboard",
            type: "Front-End"
        },
        // {
        //     name: "Readme-Generator",
        //     type: "Back-End"
        // },
        {
            name: "Password-Generator",
            type: "Front-End"
        },
        // {
        //     name: "Portfolio-Generator",
        //     type: "Back-End"
        // },
        {
            name: "Work-Day-Scheduler",
            type: "Front-End"
        },
        {
            name: "Code-Quiz",
            type: "Front-End"
        },
        {
            name: "Take-A-Note",
            type: "Front-End"
        }
        // {
        //     name: "Worker-Tracker",
        //     type: "Back-End"
        // }
    ])

    return (
        <Carousel fade id="my-projects">
            {projects.map(project => (
                <Carousel.Item>
                    <img src={require(`../../assets/Projects/${project.name}.png`)} 
                        className="d-block ms-auto me-auto rounded" 
                        alt={project.name}
                        key={project.name}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}