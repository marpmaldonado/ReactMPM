import React from "react";
import Dibujar from "../Componentes/Dibujar";

/* const Contenedor=()=>{

} */
class Contenedor extends React.Component{
    state={
        form:{
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }
    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
            }) 
    }
    handleSubmit=async e=>{
        e.preventDefault()
        
        try{
            let config={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state.form)
            }
            let res= await fetch('http://localhost:8000/api/info',config)
            let json=await res.json()
            console.log(json)
            this.props.navigate('/Lista')
        }
        catch(error){

        }
        console.log(this.state)
    }
render(){
    return <Dibujar
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
           />
}    
}
export default Contenedor