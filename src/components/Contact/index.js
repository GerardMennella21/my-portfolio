import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''})
    const [errorMessage, setErrorMessage] = useState('')
    const { name, email, message } = formState

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage('Your email is invalid.')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage('')
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <div className="">
            <div className="text-center bg-dark rounded animate__animated animate__flip animate__slow" >
                <h1 id="reachOut" className="">Reach Out</h1>
            </div>
            <section className="text-center d-flex flex-column flex-lg-row align-items-center p-5 animate__animated animate__zoomInLeft animate__slow">
                <h2 className="me-lg-5 mb-5 p-2 bg-dark text-light border border-light animate__animated animate__pulse animate__infinite rounded">Contact Me:</h2>
                <form onSubmit={handleSubmit} id="contact-form">
                <div className="input-group mb-3">
                    <label className="input-group-text bg-dark text-light" htmlFor="name">Name:</label>
                    <input className="form-control bg-secondary text-light" type="text" defaultValue={name} onBlur={handleChange} name="Name" />
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text bg-dark text-light" htmlFor="email">Email:</label>
                    <input className="form-control bg-secondary text-light" type="email" defaultValue={email} onBlur={handleChange} name="Email" />
                </div>
                <div className="input-group mb-3">
                    <label className="input-group-text bg-dark text-light" htmlFor="message">Message:</label>
                    <input className="form-control text-light bg-secondary" name="Message" defaultValue={message} onBlur={handleChange} rows="5"  />
                </div>
                {errorMessage && (
                    <div>
                        <p className="bg-dark text-danger rounded border border-danger">Error: {errorMessage}</p>
                    </div>
                )}
                <button className="btn btn-dark border border-light" data-testid="contactsubmit" type="submit">Submit</button>
                </form>
            </section>
        </div>
    )
}