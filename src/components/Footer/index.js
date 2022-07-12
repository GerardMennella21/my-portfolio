import React from "react";
import GitHubLogo from '../../assets/GitHubLogo.png'
import LinkedInLogo from '../../assets/LinkedInLogo.png'

export default function Footer() {
    return (
        <footer className="text-center p-3 mt-auto">
            Made with love by Gerard Mennella!<br />
            <img className="ms-1 me-1 myLinks" alt="GitHub Logo Link" onClick={() => document.location.replace("https://github.com/GerardMennella21")} src={GitHubLogo} />
            <img className="ms-1 me-1 myLinks" alt="LinkedIn Logo Link" onClick={() => document.location.replace("https://www.linkedin.com/in/gerard-mennella-68467b22b/")} src={LinkedInLogo} />
        </footer>
    )
}