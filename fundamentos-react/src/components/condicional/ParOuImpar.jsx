import React from "react"

export default props => {
    //verifica se o numero passado é par
    const isPar = props.numero % 2 === 0

    return (
        <div>
            <p>O numero {props.numero} é { isPar ? <span>Par</span> : <span>Impar</span>}</p>
        </div>
    )
}