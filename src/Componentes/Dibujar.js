import React from "react";
import Formu from '../Componentes/Formulario'
import Tarjeta from "../Componentes/Tarjeta";

const Dibujar =({form,onChange,onSubmit})=>(
<div className="row">
            <div className="col-sm">
                <Tarjeta
                {...form}
                />
            </div>
            <div className="col-sm">
                <Formu
                    onSubmit={onSubmit}
                    onChange={onChange}
                    form={form}
                />
            </div>
        </div>
)

export default Dibujar