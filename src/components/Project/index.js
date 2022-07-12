import React from "react";

export default function Project({ currentProject }) {

    const {name, description, github} = currentProject

    return (
        <div className="modal" tabindex="-1">
            <div className="modal-dialog">
                {/* <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title"></h4>
                    </div>
                    <div className="modal-body">
                    <img src={require(`../../assets/Projects/${name}.png`)} 
                        className="d-block projectSlide ms-auto me-auto mb-5 mt-5 rounded" 
                        alt={name}
                        key={name}
                    />
                    <p>{description}</p>
                    </div>
                    <div className="modal-footer">

                    </div>
                </div> */}
            </div>
        </div>
    )
}