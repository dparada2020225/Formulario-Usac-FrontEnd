import React from 'react'
import Formulario from "../Formulario/Formulario"
import Nav from "../Nav/Nav"
import Reporte from "../Reporte/Reporte"
import Reportes from "../ReporteOrdenados/ReporteOrdenados"

import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

function Main(){
  return (
        <>
         <Nav>
            <Routes>
                <Route path="/formulario" element={<Formulario /> } />
                <Route path="/reporte%20general" element={<Reporte /> } />
                <Route path="/Reportes%20ordenados" element={<Reportes /> } />
                <Route path="/" element={<Navigate to="/formulario" replace />} />
            </Routes>
        </Nav>
        </>
    );
}
export default Main;
