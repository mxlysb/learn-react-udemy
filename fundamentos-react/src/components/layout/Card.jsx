import React from "react"
import "./Card.css"

//class é uma palavra reservada ao js
export default (props) => {
    return (
        <div className="Card">
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}</div>
        </div>
    )
}