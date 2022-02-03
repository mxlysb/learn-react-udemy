import React from "react"
import "./App.css"

// Primeiro não precisa se chamar 'Primeiro'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"

//não precisa nomear usando default
//(props); (); _ apenas um parametro
// retorna tudo 
export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatório" color="#581845">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#900C3F">
                <Fragmento />
            </Card>
        
            <Card titulo="#02 - Com Parâmetro" color="#C70039">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Maria"
                    nota= {9.3} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#FF5733">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>