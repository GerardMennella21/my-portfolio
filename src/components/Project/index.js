import React from "react";

export default function Project({ selectedProject, closeModal}) {

    const {name, description, github, languages} = selectedProject

    return (
            <div className="modal-dialog animate__animated animate__bounceInDown animate__faster align-self-start">
                <div className="modal-content bg-dark">
                    <div className="modal-header d-flex">
                        <h4 className="modal-title">{name}</h4>
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                    <img src={require(`../../assets/Projects/${name}.png`)} 
                        className="rounded w-100" 
                        alt={name}
                        key={name}
                    />
                    <p className="fs-5 mt-3">{description}</p>
                    <p>Built Using: {languages}</p>
                    </div>
                    <div className="modal-footer">
                        <p onClick={() => document.location.replace(github)}>View on Github</p>
                    </div>
                </div>
            </div>
    )
}