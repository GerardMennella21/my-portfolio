import React, { useState } from "react";
import resume from '../../assets/Resume/resume.png'
import MyResume from '../../assets/Resume/MyResume.docx'

export default function Resume() {
    const [showResume, setShowResume] = useState(false)
    const toggleResume = () => {
        setShowResume(!showResume)
    }

    return (
        <section id="resume" className="d-flex align-items-center flex-column animate__animated animate__bounceInLeft">
            <div className="w-100 border-bottom">
                <a href={MyResume} download="Gerard Mennella's Resume"><button className="btn w-100 btn-dark text-light">Download Resume</button></a>
            </div>
            
            {showResume && (
                <div className="animate__animated animate__flipInX">
                    <img src={resume} alt="My Resume" className="rounded w-100"/>
                </div>
            )}
            {showResume ? (
                <div className="w-100 border-top animate__animated animate__bounceInLeft">
                    <button className="btn w-100 btn-dark text-light " onClick={() => {toggleResume()}}>Hide Resume</button>
                </div>
            ) : (
                <div className="w-100 border-top animate__animated animate__bounceInLeft">
                    <button className="btn w-100 btn-dark text-light" onClick={() => {toggleResume()}}>Show Resume</button>
                </div>
            )} 
        </section>
    )
}