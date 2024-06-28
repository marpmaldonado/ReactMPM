import React from "react";
import './Styles/Saludo.css'

const Saludo=({username})=>(
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>BIenvenida {username}!</h1>
            <p>Despliegue de la pagina en react</p>
            <p>lorem</p>
            
        </div>
    </div>
)

export default Saludo