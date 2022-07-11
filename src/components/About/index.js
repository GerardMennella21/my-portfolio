import React from "react";
import Me2 from '../../assets/Me2.jpg'

export default function About() {
    return (
        <section id="about-me" className="col-9 d-flex flex-column flex-xl-row align-items-center mt-5">
            <img id="my-pic" alt="Gerard Mennella" className="animate__animated animate__rollIn" src={Me2}/>
            <article id="bio" className="d-flex animate__animated animate__zoomInRight flex-column m-5 fs-5 text-center align-items-center">
                <h2 className="border-bottom">About Me</h2>
                Hi, I'm Gerard Mennella. For the past four years I've been a Real Estate Sales Associate, I've enjoyed it and learned a lot, but I have always had passion for technology and computers. I have recently taken the first step to pursue my dream career of software engineering. In February of 2022 I joined UCF's Coding Bootcamp and loved every minute of it. My passion for this field has grown as well as my curiosity. I have a strong desire to consistently learn new technologies and progress in my software engineering career. I am actively searching for my first software engineering position and I am extremely excited to take this first step in a long and prosperous career.
            </article>
        </section>
    )
}