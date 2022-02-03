import React from "react"

// Primeiro não precisa se chamar 'Primeiro'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

//não precisa nomear usando default
//(props); (); _ apenas um parametro
// retorna tudo 
export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Maria"
            nota= { 9.3 } />
        <Primeiro></Primeiro>
    </div>