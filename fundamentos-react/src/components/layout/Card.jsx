import React from "react"
import "./Card.css"

//class é uma palavra reservada ao js
export default (props) => {
    const cardStyle = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00",
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}</div>
        </div>
    )
}