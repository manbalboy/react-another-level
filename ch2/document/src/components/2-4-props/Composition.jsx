import React from "react";


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}


export default function Composition() {
    return (
        <div>
            <Welcome name="훈"/>
            <Welcome name="훈2"/>
            <Welcome name="훈3"/>
            <Welcome name="훈4"/>
        </div>
    );
}