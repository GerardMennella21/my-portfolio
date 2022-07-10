import React from "react";
import Nav from "../Nav"

export default function Header() {
    return (
        <header className="d-flex justify-content-between bg-secondary">
            <h2 className="text-danger">
                Gerard Mennella
            </h2>
            <h1 className="text-light">
                My Portfolio
            </h1>
            <Nav />
        </header>
    )
}