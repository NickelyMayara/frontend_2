import React from "react"
import { SectionBody ,SectionTextos, Linha1, SpanTime, SpanPlanner, Linha2, SpanInicie, SpanODia, SpanOrganizado, ButtonSubmit, SectionForms, Imagem } from "../Styles/Body.js"
import Forms from "./Forms.jsx"
import Calendario from "../Images/calendarioInicial.png"

const Body = () => {

    const [identificador, setidentificador] = React.useState('')
    const [senha, setSenha] = React.useState('')

    return (
        <SectionBody>
            <SectionTextos>
                <Linha1>Acesse o <SpanTime>Time </SpanTime><SpanPlanner>Planner</SpanPlanner></Linha1>
                <Linha2>& <SpanInicie>INICIE </SpanInicie><SpanODia>o dia </SpanODia><SpanOrganizado>ORGANIZADO</SpanOrganizado></Linha2>

                <SectionForms>
                    <Forms
                        id='identificador'
                        type='text'
                        placeholder='Identificador do Funcionário '
                        value={identificador}
                        setValue={setidentificador}
                    />
                    <Forms
                        id='senha'
                        type='password'
                        placeholder='Digite a senha'
                        value={senha}
                        setValue={setSenha}
                    />
                    <ButtonSubmit type="submit">Acessar</ButtonSubmit>
                </SectionForms>
                
                </SectionTextos>
                <Imagem src={Calendario} />
            
        </SectionBody>
    )
}

export default Body