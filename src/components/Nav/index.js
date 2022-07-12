import React from "react";

export default function Nav({ onPageChange }) {
    return (
        <nav>
            <ul className="nav justify-content-around">
                <li className="nav-item">
                    <a onClick={() => onPageChange('about-me')} className="nav-link " href="#about-me">About Me</a>
                </li>
                <li className="nav-item">
                    <a onClick={() => onPageChange('portfolio')} className="nav-link " href="#my-projects">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a onClick={() => onPageChange('contact')} className="nav-link " href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a onClick={() => onPageChange('resume')} className="nav-link " href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    )
}