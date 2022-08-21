import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function ReportesOrdenados() {
   
    const [persona, setPersona] = useState([])
    useEffect(() => {
      let heroku = "https://form-usac.herokuapp.com"
      //let local = "http://localhost:3200"
      let funcion = "/api/SeeForms"
      axios
        .get(heroku+funcion)
        .then((res) => {
          setPersona(res.data)
        })
        .then()
        .catch((error) => {
          console.log(error.response.data); 
        });    
    }, [])

    const rows =persona.map((row,index) => (
      {id:index, carnet: row.carnet, nombre: row.nombre, carrera: row.carrera , edad: row.edad+ " años" , generoLiterario: row.generoLiterario, fechaDeclamacion: row.fechaDeclamacion}   
      )) ;  

    const columns = [
      { field: 'carnet', headerName: 'Carnet', width: 100 ,color: '#2F7D32'},
      { field: 'nombre', headerName: 'Nombre Completo', width: 250 },
      { field: 'carrera', headerName: 'Carrera', width: 150 },
      { field: 'edad', headerName: 'Edad', width: 100 },
      { field: 'generoLiterario', headerName: 'Genero Literario', width: 150 },
      { field: 'fechaDeclamacion', headerName: 'Fecha Declamacion',type: 'date', width: 200 },   
    ];

  return (
   <>   <div style={{ height: 400, width: '100%'}}>
       <DataGrid
         rows={rows}
         columns={columns}
         pageSize={5}
         rowsPerPageOptions={[5]}
         sx={{ maxWidth: '100%'}}
       />
     </div>
    </>
  );
}
