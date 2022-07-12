import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Project from "../Project";

export default function Portfolio() {
    const [projects] = useState([
        {
            name: "Budge-It",
            description: "An application that allows users to input their income sources and expenses to track their budget. Users can create an account and view their incomes and expenses on their dashboard. The application calculates your total yearly income and expenses based on your input. ",
            github: "https://github.com/GerardMennella21/budge-it",
            languages: "Javascript, MySQL, Sequelize, Express.js, Handlebars.js, Node.js",
            activeApp: "https://budge--it.herokuapp.com/"
        },
        {
            name: "Weather-Dashboard",
            description: "An application that allows users to check the weather of a particular area. When searched, the current weather will display, along with a five day forecast. The users search history is stored as well",
            github: "https://github.com/GerardMennella21/Weather-Dashboard",
            languages: "HTML, CSS, Javascript",
            activeApp: "https://gerardmennella21.github.io/Weather-Dashboard/"
        },

        {
            name: "Password-Generator",
            description: "An application that allows a user to generate a random password between 8-128 characters. Upon activation the user is presented with a series of prompts to specify length and character types for the password.",
            github: "https://github.com/GerardMennella21/Password-Generator",
            languages: "HTML, CSS, Javascript",
            activeApp: "https://gerardmennella21.github.io/Password-Generator/"
        },

        {
            name: "Work-Day-Scheduler",
            description: "An application that allows user to plan their schedule for a 9 to 5 work day. User input can be saved and time blocks are checked against the current time and color coded accordingly.",
            github: "https://github.com/GerardMennella21/work-day-scheduler",
            languages: "HTML, CSS, Javascript",
            activeApp: "https://gerardmennella21.github.io/work-day-scheduler/"
        },
        {
            name: "Code-Quiz",
            description: "A simple quiz on some basic coding concepts. The user's high score is saved to local storage and displayed.",
            github: "https://github.com/GerardMennella21/Code-Quiz",
            languages: "HTML, CSS, Javascript",
            activeApp: "https://gerardmennella21.github.io/Code-Quiz/"
        },
        {
            name: "Take-A-Note",
            description: "An application designed to create and save notes. Notes can be added and deleted with ease and changes persist on reload",
            github: "https://github.com/GerardMennella21/take-a-note",
            languages: "HTML, CSS, Javascript, Express.js",
            activeApp: "https://intense-peak-25620.herokuapp.com/"
        }
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