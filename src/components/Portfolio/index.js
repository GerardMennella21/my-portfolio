import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Project from "../Project";

export default function Portfolio() {
    const [projects] = useState([
        {
            name: "Budge-It",
            description: "An application that allows users to input their income sources and expenses to track their budget. Users can create an account and view their incomes and expenses on their dashboard. The application calculates your total yearly income and expenses based on your input. ",
            github: "https://github.com/GerardMennella21/budge-it",
            languages: "Javascript, MySQL, Sequelize, Express.js, Handlebars.js, Node.js"
        },
        // {
        //     name: "My-Social-API",
        //     description: "test"
        // },
        {
            name: "Weather-Dashboard",
            description: "test",
            github: "https://github.com/GerardMennella21/Weather-Dashboard",
            languages: "HTML, CSS, Javascript"
        },
        // {
        //     name: "Readme-Generator",
        //     description: "test"
        // },
        {
            name: "Password-Generator",
            description: "test",
            github: "https://github.com/GerardMennella21/Password-Generator",
            languages: "HTML, CSS, Javascript"
        },
        // {
        //     name: "Portfolio-Generator",
        //     description: "test"
        // },
        {
            name: "Work-Day-Scheduler",
            description: "test",
            github: "https://github.com/GerardMennella21/work-day-scheduler",
            languages: "HTML, CSS, Javascript"
        },
        {
            name: "Code-Quiz",
            description: "test",
            github: "https://github.com/GerardMennella21/Code-Quiz",
            languages: "HTML, CSS, Javascript"
        },
        {
            name: "Take-A-Note",
            description: "test",
            github: "https://github.com/GerardMennella21/take-a-note",
            languages: "HTML, CSS, Javascript"
        }
        // {
        //     name: "Worker-Tracker",
        //     description: ""
        // }
    ])
      
    const openModal = (project) => {
        setModalOpen(true);
        setSelectedProject(project);
    }  

    const closeModal = () => {
        setModalOpen(false);
    }

    const [modalOpen, setModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState()

    return (
        <section id="my-projects" className="animate__animated animate__lightSpeedInLeft animate__faster text-center">
            {modalOpen && (
                <Project selectedProject={selectedProject} closeModal={closeModal} />
            )}
            <div className=" border-bottom border-top bg-dark">
                <h2 className="mpHeader">My Projects</h2>
            </div>
            <Carousel fade className="">
                {projects.map(project => (
                    <Carousel.Item onClick={() => openModal(project)}>
                        <h3 className="projectHeader mt-3">{project.name}</h3>
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