import React from "react";
import Nav from "../Nav"

export default function Header({ onPageChange }) {
    return (
        <header className="d-flex p-3 flex-column text-center align-items-center justify-content-center">
            <h1 className="">
                Gerard Mennella
            </h1>
            <Nav onPageChange={onPageChange} />
        </header>
    )
}