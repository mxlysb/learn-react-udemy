import React from "react"
import "./App.css"

// Primeiro não precisa se chamar 'Primeiro'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"

//não precisa nomear usando default
//(props); (); _ apenas um parametro
// retorna tudo 
export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#12 - Contador" color="#CD5C5C">
                <Contador numeroInicial={109}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#7D3C98">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#B9770E">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#7B241C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#21618C">
                <ParOuImpar numero={20}></ParOuImpar>
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: "Fernando" }} />
                <UsuarioInfo usuario={{ email: "fer@nando.com" }} />
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#16A085">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FFC300">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#FF5733">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

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