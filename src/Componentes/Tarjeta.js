import React from "react";
import './Styles/Tarjeta.css' 
import circlesImg from '../Imagenes/circles.png'
import bob from '../Imagenes/bob.png'
class Tarjeta extends React.Component{
  
    render(){
        const { title, description,img, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || bob} alt="" className="float-right ti"/>
                        </div> 
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tarjeta 
