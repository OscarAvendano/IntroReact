import React from "react";
//componente de clase
export default class PrimerComponente extends React.Component{
    render(){
return <h1>Hola componenete de clase</h1>
    }
}

//componente de funcion normal
function SegundoComponente(){
    return <h2>Segundo componente</h2>
}

//componente funcion flecha
export let TercerComponente = ()=> <h3>Tercer componenete</h3>