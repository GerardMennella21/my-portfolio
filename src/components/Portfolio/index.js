import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Project from "../Project";

export default function Portfolio() {
    const [projects] = useState([
        {
            name: "Budge-It",
            description: "test",
            github: "https://github.com/GerardMennella21/budge-it"
        },
        // {
        //     name: "My-Social-API",
        //     description: "test"
        // },
        {
            name: "Weather-Dashboard",
            description: "test",
            github: "https://github.com/GerardMennella21/budge-it"
        },
        // {
        //     name: "Readme-Generator",
        //     description: "test"
        // },
        {
            name: "Password-Generator",
            description: "test",
            github: "https://github.com/GerardMennella21/budge-it"
        },
        // {
        //     name: "Portfolio-Generator",
        //     description: "test"
        // },
        {
            name: "Work-Day-Scheduler",
            description: "test",
            github: "https://github.com/GerardMennella21/budge-it"
        },
        {
            name: "Code-Quiz",
            description: "test",
            github: "https://github.com/GerardMennella21/budge-it"
        },
        {
            name: "Take-A-Note",
            description: "test",
            github: "https://github.com/GerardMennella21/budge-it"
        }
        // {
        //     name: "Worker-Tracker",
        //     description: ""
        // }
    ])
      
    return (
        <section id="my-projects" className="animate__animated animate__lightSpeedInLeft text-center">
            <h2 className="mpHeader border-bottom">My Projects</h2>
            <Carousel fade className="border-bottom">
                {projects.map(project => (
                    <Carousel.Item>
                        <h3 className="mpHeader mt-3">{project.name}</h3>
                        <img src={require(`../../assets/Projects/${project.name}.png`)} 
                            className="d-block projectSlide ms-auto me-auto mb-5 mt-5 rounded" 
                            alt={project.name}
                            key={project.name}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    )
}