import React from "react";
import Modal from 'react-bootstrap/Modal'

export default function Project({ name }) {

    return (
        <Modal>
                <h3>{name}</h3>
                <img src={require(`../../assets/Projects/${name}.png`)} 
                    alt={name}
                />
                <p></p>

        </Modal>
    )
}